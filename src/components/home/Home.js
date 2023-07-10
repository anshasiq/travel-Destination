import React from "react";
import "./home.css"
import header from "../header/header";
import tours from "../tours/tours";
import footer from "../footer/footer";
// import db from "../../data/db.json";
function Home() {
    return (
        <div>
   <header />
   <tours />
   <footer />
        </div>


    );
}
export default Home;