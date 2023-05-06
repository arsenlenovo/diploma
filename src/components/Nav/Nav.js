import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul className="Ul">
        <li className="NavItem">
          <NavLink to="/">Men's Watch</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/ladies-watch">Ladies Watch</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/wall-clock">Wall Clock</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/children's-watch">Children's Watch</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/accessories">Accessories</NavLink>
        </li>
      </ul>
    </nav>
  )
}