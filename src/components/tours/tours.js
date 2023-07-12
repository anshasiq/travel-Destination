import React from "react";
import "./tours.css"
import db from "../../data/db.json";
function Tours() {
   return (
      <div>
         {
            db.map((obj, i) => {
               return (
                  <div key={i}>
                     <p>{obj.name}</p>
                     <img src={obj.image} />
                  </div>
               )
               // <tours  id={obj.id} name={obj.name} info={obj.info} image={obj.image} price={obj.price} />
            })
         }
      </div>
   );
}
export default Tours;