import { Route, Routes, } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/aydin" element={<h1>Aydin</h1>} />
          <Route path="/categories/:slug" element={<Category />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    
    </div>
  );
}

export default App;
