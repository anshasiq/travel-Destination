import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import db from "../../data/db.json";


function Tourdetail() {
    let {id}= useParams();
    let x = db.filter(ele=>ele.id==id)
    const [expanded,setExpanded] = useState(false);
    function infoHandler(){
        setExpanded(!expanded);
    }
    return (
        <>
    <Header />
    <h2>{x[0].name}</h2>
    <img src={x[0].image} alt={x[0].name}/>
    <p>{x[0].price}</p>
    <p>{expanded?`${x[0].info.slice(0,200)}...`:x[0].info}</p>
    <button onClick={infoHandler}> {expanded?"see more":"see less"} </button>
    <Footer />
     </>
   );
}
export default Tourdetail;