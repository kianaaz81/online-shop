import React from "react";

const ProductListNew = ({ productImage, productName, price, alt }) => {
  return (
    <React.Fragment>
      <div className="product-list">
        <div>
          <img src={productImage} alt={alt} className="img-li" />
        </div>
        <div className="label-li">
          <h5>Name: {productName}</h5>
          <p>Price: {price}$</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductListNew;
