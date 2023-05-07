import { useContext } from "react";
import { AppContext } from "../../App";
import "./ProductList.css";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div key={product.id} className="Product">
        <div className="div-inside-product">
          <div className="picture-wrap">
            <img
              className="picture picture--main"
              width="300px"
              src={product.picture}
              alt={product.name}
            />
            <img
              className="picture picture--hover"
              width="300px"
              src={product.picture2}
              alt={product.name}
            />
          </div>
          <div className="Pro">
            <NavLink className="nav" to={"/products/" + product.slug}>
              {product.name}
            </NavLink>
            <span className="price-in-product">{product.price} som</span>
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    ));

  return (
    <div className="ProductList">
      {output}
      <AddProduct />
    </div>
  );
}
