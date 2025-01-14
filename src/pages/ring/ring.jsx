import RingComponent from "../../components/ring/ring";
import "../ring/ring.css";
import React, { useEffect, useState } from "react";

const Ring = () => {
  const [ring , setRing]= useState([]);

 useEffect(()=>{
  fetch("/db.json").then((response)=>
    response.json())
  .then((data)=>
    setRing(data.ring))
 },[])
  return (
    <React.Fragment>
      <div className="header">
        <h1>Choose your ring</h1>
        <h3>click on your ring </h3>
      </div>
      <div className="d-flex align-items-center justify-content-center my-4">
        <span className="star">✦︎</span>
        <hr className="w-50 mx-2"></hr>
        <span className="star">✦︎</span>
      </div>
      <div className="main">
        {ring.map((ring) => (
          <RingComponent key={ring.id} product={ring} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Ring;
