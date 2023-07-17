import React from "react";
import "./tours.css"
import db from "../../data/db.json";
import Tour from "./tour/Tour";
function Tours() {
   return (
      <>   
      {/* dp.map(()=>Tour) */}
           {/* <Tour js={db} /> */}
           {db.map((obj, i) => {
               return (<Tour js={obj} key={i}/>)
               // <tours  id={obj.id} name={obj.name} info={obj.info} image={obj.image} price={obj.price} />
            })}
         
      </>
   );
}
export default Tours;