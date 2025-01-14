import React, { useEffect, useState } from "react";
import ProductNew from "../../data/productnew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ProductListNew from "../../components/productlists/productlistnew";

const ProductSlideNew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = ProductNew.length;
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
        {ProductNew.slice(currentSlide, currentSlide + slidesToShow).map(
          (productnew, index) => (
            <ProductListNew key={index} {...productnew} />
          )
        )}

        {/* Handle wrapping around if currentSlide + slidesToShow exceeds slideCount */}
        {currentSlide + slidesToShow > slideCount &&
          ProductNew.slice(0, (currentSlide + slidesToShow) % slideCount).map(
            (productnew, index) => (
              <ProductListNew key={slideCount + index} {...productnew} />
            )
          )}

        <button onClick={nextSlide} className="btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </React.Fragment>
  );
};
export default ProductSlideNew;
