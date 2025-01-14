import React, { useContext } from "react";
import { cartContext } from "../../context/shopcontext";
import { Link } from "react-router-dom";

const RingComponent = ({ product }) => {
  const { addToCart, cart, removeFromCart } = useContext(cartContext);
  const isInCart = cart?.some((item) => item.id === product.id);
  const imagePath = require(`../../assets/ring/${product.image}`);

  return (
    <React.Fragment>
      <div className="ml">
        <Link to={`/product/ring/${product.id}`}>
        <div>
          <img
            src={imagePath}
            alt={product.alt}
            className="img1 position-absolute img-fluid "
          />
        </div>
        <div>
          <span className="square"></span>
        </div>
        <div className="text position-absolute ">
          <h4>Name: {product.name}</h4>
          <h5>Material: {product.material}</h5>
          <h5>Price: {product.price}$</h5>
        </div>
        </Link>
        <div id="button">
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
export default RingComponent;
