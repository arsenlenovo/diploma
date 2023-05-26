import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if (Object.keys(cart).length === 0) {
    return "You cart is empty.";
  }

  if (!user) {
    return "Please login to create an order.";
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addDoc(ordersCollection, {
      name: formData.get("name"),
      phone: formData.get("phone"),
      user: user.uid,
      address: formData.get("address"),
      cart: cart,
    }).then((doc) => {
      setCart({});
      navigate("/thank-you");
    });
  }

  return (
    <form className="OrderForm" onSubmit={onFormSubmit}>
      <h2>Create an order</h2>
      <label>
        Name:{" "}
        <input
          className="input-in-OrderForm"
          type="text"
          name="name"
          required
        />
      </label>
      <label>
        Phone:{" "}
        <input
          className="input-in-OrderForm"
          type="tel"
          name="phone"
          required
        />
      </label>
      <label>
        Address:{" "}
        <input
          className="input-in-OrderForm"
          type="text"
          name="address"
          required
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
