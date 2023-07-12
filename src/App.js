import React from "react";
import { Routes, Route } from 'react-router-dom';

import "./App.css";
// import footer from "./components/footer/footer";
import Home from "./components/home/Home";
import Tours from "./components/tours/tours";
// import 
// import tours from "./components/tours/tours";
// import header from "./components/header/header";
function App() {
  return (
    <div>
   <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/sec' element={<Tours />} />
</Routes>
<Home />
   </div>
  );
}

export default App;
