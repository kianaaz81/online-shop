import React from "react";

const ProductListOff = ({productImage,productName,oldPrice,newPrice,alt}) => 
    (
  <React.Fragment>
    <div className="product-list">
      <div>
        <img src={productImage} alt={alt} className="img-li" />
      </div>
      <div className="label-li">
        <h5>Name: {productName}</h5>
        <p>
          Price: <del>{oldPrice}$</del>-{newPrice}$
        </p>
      </div>
    </div>
  </React.Fragment>
);
export default ProductListOff;
