import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
  const [query , setQuery]=useState("");
  const navigate = useNavigate();
 const [products , setProducts]=useState([]);

  useEffect(()=>{
    fetch ("/db.json").then((response)=>
    response.json())
    .then((data)=>
     {const allProducts=[
      ...data.bracelet ,
      ...data.earring,
      ...data.necklace,
      ...data.ring
     ];
   setProducts(allProducts);
     });
  },[]);

const handleSearch =()=>{
  const searchResult=products.find((product)=>
    product.name.toLowerCase()===query.toLowerCase()
  );

  if(searchResult){
    navigate(`/product/${searchResult.category}/${searchResult.id}`);
  }else{
    alert("product not find!")
  }
}
  return(
    <React.Fragment>
        <form className="d-flex search-container">
    <input
      type="text"
      placeholder="Search..."
      className="form-control search-bar"
      aria-label="Search"
      size="30"
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      name="searchbar"
    />
    <button type="button" className="btn" onClick={handleSearch}>
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </form>
    </React.Fragment>
    
  )
};
export default SearchBar;
