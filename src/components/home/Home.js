import React from "react";
import "./home.css"
import Header from "../header/Header";
import Tours from "../tours/tours";
import Footer from "../footer/Footer";
// import db from "../../data/db.json";
function Home() {
    return (
        <div>
   <Header />
   <Tours />
   <Footer />
        </div>


    );
}
export default Home;