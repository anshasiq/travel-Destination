import React from "react";
import { Link } from "react-router-dom";

// import "./tours.css"
import db from "../../../data/db.json";
function Tour(props) {
   return (
      <div>
         { 
            props.js.map((obj, i) => {
               return (
                  <div key={i}>
                     <Link to={`/city/${obj.id}`}> <p>{obj.name}</p> </Link>
                     <img src={obj.image} />
                  </div>
               )
               // <tours  id={obj.id} name={obj.name} info={obj.info} image={obj.image} price={obj.price} />
            })
         }
      </div>
   );
}
export default Tour;