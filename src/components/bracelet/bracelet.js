import React, { useContext } from "react";
import "../../pages/bracelet/bracelet.css";
import { cartContext } from "../../context/shopcontext";
import { Link } from "react-router-dom";

const BraceletComponent = ({ product }) => {
  const { addToCart, cart, removeFromCart } = useContext(cartContext);
  const isInCart = cart?.some((item) => item.id === product.id);
  const imagePath = require(`../../assets/bracelet/${product.image}`);
  const imgPath = require(`../../assets/bracelet/${product.img}`);

  return (
    <React.Fragment>
      <div className="ml d-inline-block justify-content-center">
        <Link to={`/product/bracelet/${product.id}`}>
          <div>
            <img
              src={imagePath}
              alt={product.name}
              className="img1 position-absolute img-fluid"
            />
          </div>
          <div>
            <img
              src={imgPath}
              alt={product.name}
              className="img2 position-absolute img-fluid"
            />
          </div>
          <div>
            <span className="square"></span>
          </div>
          <div className="name">
            <h3>Name:</h3>
            <h5>{product.name}</h5>
          </div>
          <div className="description position-absolute">
            <h5>Price: {product.price}$</h5>
            <h5>Material: {product.material}</h5>
          </div>
        </Link>
        <div className="btn-container">
          <button className="button" onClick={() => addToCart(product)}>
            +
          </button>
          <span className="mx-2">
            {cart?.filter((row) => row.id === product.id)[0]?.count}
          </span>
          {isInCart && (
            <button className="button" onClick={() => removeFromCart(product)}>
              -
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default BraceletComponent;
