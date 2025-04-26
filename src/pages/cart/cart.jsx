import { cartContext } from "../../context/shopcontext";
import React, { useContext, useEffect, useState } from "react";

const Cart = () => {
  const { cart, removeFromCart, addToCart } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    setTotalPrice(
      cart.reduce(
         (preValue, currValue) => preValue + currValue.price * currValue.count,
        0
     )
    );
  }, [cart]);

  const cartCount = cart.reduce((prev, current) => {
    return prev + current.count;
  }, 0);

  return (
    <React.Fragment>
      <h1 className="header">your cart items</h1>
      <div className="d-flex align-items-center justify-content-center my-4">
        <span className="star">✦︎</span>
        <hr className="w-50 mx-2"></hr>
        <span className="star">✦︎</span>
      </div>
      <div className="main">
        {cart.map((item) => ( 
          <div key={item.id}>
            {item.category && item.image ? (
            <img src={ require(`../../assets/${item.category}/${item.image}`)} alt={item.name} className="img" />
            ):(
              <p>Image not available</p>  
            )} 
            <div className="txt-column">
              <h3>Name: {item.name}</h3>
              <h4>Price: {item.price} $</h4>
            </div>
            <button className="button" onClick={() => removeFromCart(item)}>
              -
            </button>
            <span className="mx-2">
              {cart?.filter((row) => row.id === item.id)[0]?.count}
            </span>
            <button className="button" onClick={() => addToCart(item)}>
              +
            </button>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center my-2">
        <span className="star">✦︎</span>
        <hr className="w-50 mx-2"></hr>
        <span className="star">✦︎</span>
      </div>
      <div className="description my-3">
        <h4>Cart items: {cartCount}</h4>
        <h4>TotalPrice: {totalPrice} $</h4>
        <button className="button">Pay</button>
      </div>
    </React.Fragment>
  );
};
export default Cart;
