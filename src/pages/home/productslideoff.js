import React, { useEffect, useState } from "react";
import ProductOff from "../../data/productoff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ProductListOff from "../../components/productlists/productlistoff";

const ProductSlideOff = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = ProductOff.length;
  const slidesToShow = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideCount]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideCount) % slideCount);
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center slider-container">
        <button onClick={prevSlide} className="btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Display the current slides */}
        {ProductOff.slice(currentSlide, currentSlide + slidesToShow).map(
          (productoff, index) => (
            <ProductListOff key={index} {...productoff} />
          )
        )}

        {/* Handle wrapping around if currentSlide + slidesToShow exceeds slideCount */}
        {currentSlide + slidesToShow > slideCount &&
          ProductOff.slice(0, (currentSlide + slidesToShow) % slideCount).map(
            (productoff, index) => (
              <ProductListOff key={slideCount + index} {...productoff} />
            )
          )}

        <button onClick={nextSlide} className="btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </React.Fragment>
  );
};
export default ProductSlideOff;
