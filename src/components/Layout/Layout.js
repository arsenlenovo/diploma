import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import { useState } from "react";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import NavLast from "../Nav/NavLast/NavLast";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";

export default function Layout(props) {

  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div className="Layout">
      <header>
        <div className="spacer">
          <NavLast />
          <Search />
          <NavToggle callback={toggleDrawer} />
          <Drawer open={drawerOpen} toggle={toggleDrawer} />
          <CartLink />
          <Auth />
        </div>
      </header >
      <aside>
        <CategoryList />
      </aside>
      <div className="container">
        <main>{props.children}</main>
        </div>
        <footer>
          <Footer />
        </footer>
    </div >
  );
}