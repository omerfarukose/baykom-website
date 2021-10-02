import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <div id="#navbar" className="navbar">
            <img className="navbar-logo" src='./images/baykomlogo.PNG' />
            <div className="nav-items">
                <a className="navbar-item" href="#navbar"> Anasayfa </a>
                <a className="navbar-item" href="#bayboss"> Bayboss </a>
                <a className="navbar-item" href="#references"> Referanslar </a>
                <a className="navbar-item" href="#footer"> İletişim </a>
            </div>
        </div>
    )
}

export default Navbar;



