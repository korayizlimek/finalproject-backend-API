import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar__title">
                {/* <img
                    className="header__logo"
                    src={logo}
                    alt="../doc/pngegg.png"
                /> */}
                <h3>BitirmeProjesi</h3>
            </div>

            {/* Links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/login">
                        <div className="cart__link">
                            <span className="header__optionBottom">
                                Giriş Yap
                            </span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="cart__link">
                        {/* Icon */}
                        <i className="fas fa-shopping-cart"></i>
                        Sepete Git
                        <span className="cartlogo__badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="cart__link">
                        <i class="fas fa-utensils fa-lg"></i>
                        Menu
                    </Link>
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
