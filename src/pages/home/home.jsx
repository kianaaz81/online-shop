import React from "react";
import { Link } from "react-router-dom";
import convertedImage from "../../assets/home-header/fashion2.png";
import Productcategory from "../../data/productcategory";
import "../home/home.css";
import ProductSlideOff from "./productslideoff";
import ProductSlideNew from "./productslidenew";

const ProductLink = ({ to, image, alt, label }) => (
  <div className="link-item">
    <Link className="list-item" to={to}>
      <div>
        <img src={image} alt={alt} className="img-li" />
      </div>
      <h2 className="label">{label}</h2>
    </Link>
  </div>
);
const Home = () => {
  return (
    <React.Fragment>
      <div>
        <img src={convertedImage} alt="header-jewelry" className="header-img" />
      </div>
      <div className="d-flex justify-content-center">
        {Productcategory.map((productctg, index) => (
          <ProductLink key={index} {...productctg} />
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center my-4">
        <span className="star">✦︎</span>
        <hr className="w-50 mx-2"></hr>
        <span className="star">✦︎</span>
      </div>
      <div>
        <h2 className="title text-align-center">Off%</h2>
        <ProductSlideOff />
      </div>
      <div>
        <h2 className="title text-align-center">New</h2>
        <ProductSlideNew />
      </div>
    </React.Fragment>
  );
};
export default Home;
