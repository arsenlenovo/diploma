import "./Footer.css";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";

export default function Footer(){
return(
  <div className="Footer">
    <div className="footer-logo" >
      <NavLink  to="/">
        <img src={logo} alt="logo" className="logo"/>
      </NavLink>
    </div>
    <div className="footer-nav">
      <ul>
        <h2>Menus</h2>
        <li className="NavFooter">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavFooter" >
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="NavFooter">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="NavFooter">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </div>
    <div className="footer-category">
      <ul>
        <h2>Categories</h2>
        <li className="footer-category">
          <NavLink to="../categories/casio-men">Casio Men</NavLink>
        </li>
        <li className="footer-category" >
          <NavLink to="../categories/brand-watch">Brand Watch</NavLink>
        </li>
        <li className="footer-category">
          <NavLink to="../categories/sports">Sports</NavLink>
        </li>
        <li className="footer-category">
          <NavLink to="../categories/casio-women">Casio Women</NavLink>
        </li>
        <li className="footer-category">
          <NavLink to="../categories/straps">Straps</NavLink>
        </li>
        <li className="footer-category">
          <NavLink to="../categories/wall-clock">Wall Clock</NavLink>
        </li>
        <li className="footer-category">
          <NavLink to="../categories/cases">Cases</NavLink>
        </li>
      </ul>
    </div>
    {/* <div className="footer-icon">
      <h1>Network</h1>
      <div className="footer-apps">
        <a href="https://www.linkedin.com/in/%D0%B0%D0%B9%D0%B6%D0%B0%D0%BD%D1%8B%D0%BB-%D1%83%D0%BB%D0%B0%D0%BD%D0%BE%D0%B2%D0%BD%D0%B0/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="linkedln"/> 
        </a>
      <a href="https://github.com/elukenova">
        <img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" alt="GitHub"/>
      </a>
      <a href="https://telegram.org/dl">
        <img src="https://www.svgrepo.com/download/299513/telegram.svg" alt="Telegram"/>
      </a>
      <a href="https://wa.me/qr/AVDLLXHGVDAPJ1" target="blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png" alt="WhatsApp"/>
      </a>
      </div>
    </div> */}
  </div>
)
}