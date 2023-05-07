import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import "./Product.css";

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);
  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <div className="th">
        <h1>{product.name}</h1>
        <img
          className="img-in-product"
          src={product.picture}
          alt={product.name}
        />
      </div>
      <div className="fd">
        <span>{product.price} som</span>
        <p className="paragraph-in-product">{product.description}</p>
        <p className="paragraph-in-product">{product.description2}</p>
        <p className="paragraph-in-product">{product.description3}</p>
      </div>
    </div>
  );
}
