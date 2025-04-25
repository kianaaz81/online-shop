import React, { createContext, useState , useEffect} from "react";

export const cartContext = createContext(null);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(()=>{
   const saveCart = localStorage.getItem("cart");
    return saveCart ? JSON.parse(saveCart) : [];
  });
  
useEffect(() => {  
    localStorage.setItem("cart", JSON.stringify(cart));  
  }, [cart]); 
  
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.count === 1) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item
        )
      );
    }
  };
  const contextValue = { cart, addToCart, removeFromCart };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
};
