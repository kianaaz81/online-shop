import React, { useEffect, useState } from "react";
import NecklaceComponent from "../../components/necklace/necklace";

const Necklace = () => {
  const [necklace , setNecklace] = useState([]);

  useEffect(()=>{
   fetch("/db.json").then((response)=>
    response.json())
   .then((data)=>
  setNecklace(data.necklace))
  },[])

  return (
    <React.Fragment>
      <div className="header">
        <h1>Choose your Necklace</h1>
        <h3>click on your Necklace </h3>
      </div>
      <div className="d-flex align-items-center justify-content-center my-4">
        <span className="star">✦︎</span>
        <hr className="w-50 mx-2"></hr>
        <span className="star">✦︎</span>
      </div>
      <div className="main">
        {necklace.map((necklace) => (
          <NecklaceComponent key={necklace.id} product={necklace} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default Necklace;
