import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import {
  categoryCollection,
  onAuthChange,
  onCategoriesLoad,
  ordersCollection,
  productsCollection,
} from "./firebase";
import { getDocs } from "firebase/firestore";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  // контекст для корзины
  cart: {},
  setCart: () => {},
  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);

    // выполнить только однажды
    getDocs(productsCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setProducts(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id, // и свойства id
          }))
        );
      });

    getDocs(ordersCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setOrders(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id, // и свойства id
          }))
        );
      });

    onAuthChange((user) => {
      if (user) {
        user.isAdmin = user.email === "arsenarsensio2006@gmail.com";
      }
      
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/ladies-watch" element={<h1>Ladies Watch</h1>} />
            {/*<Route path="/contacts" element={<Contacts />} /> */}
            <Route path="/arsen" element={<h1>Arsen</h1>} />
            <Route
              path="/children's-watch"
              element={<h1>Children's Watch</h1>}
            />
            <Route path="/wall-clock" element={<h1>Wall Clock</h1>} />
            <Route path="/accessories" element={<h1>Accessories</h1>} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/thank-you/:slug" element={<ThankYou />} />
            <Route pathh="orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
