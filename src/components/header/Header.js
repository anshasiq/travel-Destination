import React from "react";
import { Link } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom';

import "./header.css"
function Header() {
    return (
        <div>
             <h1>hello world</h1>
             <nav>
             <Link to='/'>Home</Link>
            <Link to='/sec'>Sec</Link>
            </nav>
        </div>


    );
}
export default Header;