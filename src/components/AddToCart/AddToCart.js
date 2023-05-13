import { useContext, useState } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);
  const [showNotification, setShowNotification] = useState(false);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart,
      [product.id]: qty
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  }

  return (
    <div className="AddToCart">
      <button className="button-cart" onClick={onAddToCartClick}><span>Add To Cart</span>
         
        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="CART" />
      </button>
      {showNotification && (
        <div className="Notification">
          <img loading="eager" src="https://github.com/arsenlenovo/Figma/blob/main/icons8-%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0.gif?raw=true" alt="CHECKMARK" />
        </div>
      )}
    </div>
  );
}