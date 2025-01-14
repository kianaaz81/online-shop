import React, { useEffect, useState } from "react";
import EarringComponent from "../../components/earring/earring";
import "../earring/earring.css";

const Earring = () => {
  const [earring , setEarring] = useState([]);

  useEffect(()=>{
     fetch("/db.json").then((response)=>
    response.json())
     .then((data)=>
    setEarring(data.earring)
    )
  },[])

  return (
    <React.Fragment>
      <div className="header">
        <h1>Choose your Earring</h1>
        <h3>click on your Earring </h3>
      </div>
      <div className="d-flex align-items-center justify-content-center my-4">
        <span className="star">✦︎</span>
        <hr className="w-50 mx-2"></hr>
        <span className="star">✦︎</span>
      </div>
      <div className="main">
        {earring.map((earring) => (
          <EarringComponent key={earring.id} product={earring} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default Earring;
