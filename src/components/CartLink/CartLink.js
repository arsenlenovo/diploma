
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import "./CartLink.css";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <NavLink to="/cart">
        <img className="img-in-cartList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-cart.svg" alt="cart" />
        <span className="CartLink-total">{total}</span>
      </NavLink>
    </div>
  );
}
