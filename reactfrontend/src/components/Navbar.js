import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/navbar.css";
import Logo from "./../images/Logo.png";
import hamburger from "./../images/hamburger.svg";

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false); //this is for toggling hamburger menu

    return (
        <nav className="navigation">
            <Link to="/" className="brand">
                <img src={Logo} alt="" className="brand-logo" />
                Notice Board
            </Link>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded); //click event triggers hamburger menu
                }}
            >
                <img src={hamburger} alt="" />
            </button>
            <div
                className={
                    isNavExpanded
                        ? "navigation-menu expanded"
                        : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/create-post">Create Post</a>
                    </li>
                    <li>
                        <a href="https://harshvse.in">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
