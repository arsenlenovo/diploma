import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import "./CartList.css";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }
  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <Link className="link" to={"/product/" + product.slug}>
          {product.name}
        </Link>
        <input
          className="input-in-CartList"
          type="number"
          value={cart[product.id]}
          min={1}
          onChange={(event) => onQuantityChange(product, +event.target.value)}
        />
        <span className="price-in-product">
          {cart[product.id] * product.price} som
        </span>
        <button className="button" onClick={() => onItemRemove(product)}>
          <span className="Remove">Remove</span>
        </button>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}
