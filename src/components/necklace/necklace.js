import React, { useContext } from "react";
import "../../pages/necklace/necklace.css";
import { cartContext } from "../../context/shopcontext";
import { Link } from "react-router-dom";

const NecklaceComponent = ({ product }) => {
  const { addToCart, cart, removeFromCart } = useContext(cartContext);
  const isInCart = cart?.some((item) => item.id === product.id);
  const imagePath = require (`../../assets/necklace/${product.image}`);

  return (
    <React.Fragment>
      <div className="ml">
        <Link to={`/product/necklace/${product.id}`}>
        <div>
          <img src={imagePath} alt={product.alt} className="image"></img>
        </div>
        <div>
          <span className="sqr"></span>
        </div>
        <div className="txt">
          <h4>Name: {product.name}</h4>
          <h4>Material: {product.material}</h4>
          <h4>Price: {product.price}$</h4>
        </div>
          </Link>
          <div id="btn">
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

export default NecklaceComponent;
