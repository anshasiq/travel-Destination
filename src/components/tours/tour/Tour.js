import React from "react";
import { Link } from "react-router-dom";

// import "./tours.css"
import db from "../../../data/db.json";
function Tour(props) {
   return (
      <div>
         { 
        
                  <div >
                     <Link to={`/city/${props.js.id}`}> <p>{props.js.name}</p> </Link>
                     <img src={props.js.image} />
                  </div>
            
               // <tours  id={obj.id} name={obj.name} info={obj.info} image={obj.image} price={obj.price} />
         }
      </div>
   );
}
export default Tour;