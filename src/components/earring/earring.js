import React, { useContext } from "react";
import "../../pages/earring/earring.css";
import { cartContext } from "../../context/shopcontext";
import { Link } from "react-router-dom";

const EarringComponent = ({ product }) => {
  const { addToCart, cart, removeFromCart } = useContext(cartContext);
  const isInCart = cart?.some((item) => item.id === product.id);
  const imagePath=require(`../../assets/earring/${product.image}`);

  return (
    <React.Fragment>
      <div className="ml d-inline-block justify-content-center">    
        <div>
          <span className="hd-row d-flex"></span>
        </div>
        <div className="column">
           <Link to={`/product/earring/${product.id}`} id="link">
          <div>
            <img src={imagePath} alt={product.alt} className="img"></img>
          </div>
          <div className="txt-column">
            <h4>Name: {product.name}</h4>
            <h4>Material: {product.material}</h4>
            <h4>Price: {product.price}$</h4>
            </div>
         </Link>
          <div>
            <button className="button" onClick={() => addToCart(product)}>
              +
            </button>
            <span className="mx-2">
              {cart?.filter((row) => row.id === product.id)[0]?.count}
            </span>
            {isInCart && (
              <button
                className="button"
                onClick={() => removeFromCart(product)}>
                -
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default EarringComponent;
