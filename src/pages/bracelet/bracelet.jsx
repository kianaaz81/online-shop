import React, { useEffect, useState } from "react";
import BraceletComponent from "../../components/bracelet/bracelet";
import "../bracelet/bracelet.css";


const Bracelet = () => {
  const [bracelet , setBracelet] = useState([])

  useEffect(()=>{
    fetch ("/db.json").then((response)=>
    response.json())
    .then((data)=>
      setBracelet(data.bracelet)
    )
  },[]);
  return (
    <React.Fragment>
      <div className="header">
        <h1>Choose your Bracelet</h1>
        <h3>click on your bracelet </h3>
      </div>
      <div className="d-flex align-items-center justify-content-center my-4">
        <span className="star">✦︎</span>
        <hr className="w-50 mx-2"></hr>
        <span className="star">✦︎</span>
      </div>
      <div className="main">
        {bracelet.map((bracelet) => (
          <BraceletComponent key={bracelet.id} product={bracelet} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default Bracelet;
