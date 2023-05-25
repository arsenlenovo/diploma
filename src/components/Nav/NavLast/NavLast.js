import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";
import "./NavLast.css";

export default function NavLast() {
  let menuBtn = document.querySelectorAll('.NavItem a')
  let menu = document.querySelector('.Drawer')
    menuBtn.forEach(el => {
    el.addEventListener('click', function(){
        menu.classList.remove('open')
    })
})
  return (
    <nav className="NavLast">
      <ul className="Ul">
        <Logo />
        <li className="NavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>
       <li className="NavItem">
         <NavLink to="/contacts">Contacts</NavLink>
       </li>
       <li className="NavItem">
         <NavLink to="/delivery">Delivery</NavLink>
       </li>
     </ul>
   </nav>
  )
}
