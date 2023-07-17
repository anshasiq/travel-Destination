import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./components/home/Home";
import Tours from "./components/tours/Tours";
import Tourdetail from "./components/TourDetails/TourDetails";
// import 
// import tours from "./components/tours/tours";
// import header from "./components/header/header";
function App() {
  return (
    <>

<Routes>
 <Route path='/' element={<Home />} />
 <Route path='/city/:id' element={<Tourdetail />} />
 </Routes>
   </>
  )
}

export default App;
