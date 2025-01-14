import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../../context/shopcontext";
import "../product/productdetail.css";

const ProductDetailPage = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, cart, removeFromCart } = useContext(cartContext);
  const isInCart = product && cart?.some((item) => item.id === product.id);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const products = data[category];
        const foundProduct = products.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, [category, id]);
  if (!product) {
    return <h3 className="page-not-find">there is nothing to show •︵•</h3>;
  }

  return (
    <React.Fragment>
      <h2 className="header">{product.category}</h2>
      <div className="all">
        <div className="d-flex">
          <div className="text-container">
            <h4>Name: {product.name}</h4>
            <h4>Price: {product.price} $</h4>
            <h4>Material: {product.material}</h4>
            <h4>Description: {product.Description}</h4>
          </div>
          <span className="squre-container"></span>
          <img
            className="img-container"
            src={require(`../../assets/${product.category}/${product.image}`)}
            alt={product.name}
          />
        </div>
        <div className="button-container d-flex">
          {product && (
            <>
          
          <button className="button-click" onClick={() => addToCart(product)}>
            Add
          </button>
          <span className="mx-2 my-3">
            {cart?.filter((row) => row.id === product.id)[0]?.count }
          </span>
          {isInCart>0 && (
          <button
            className="button-click "
            onClick={() => removeFromCart(product)}
          >
            Remove
          </button>
          )}
          </>
             )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductDetailPage;
