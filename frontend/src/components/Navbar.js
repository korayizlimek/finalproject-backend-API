import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = ({ click }) => {
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar__title">
                <img
                    className="header__logo"
                    src={logo}
                    alt="../doc/pngegg.png"
                />
                <h3>BitirmeProjesi</h3>
            </div>

            {/* Links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        {/* Icon */}
                        <i className="fas fa-shopping-cart"></i>
                        Sepete Git
                        <span className="cartlogo__badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Menu</Link>
                </li>
            </ul>

            {/* Hamburger menu */}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
