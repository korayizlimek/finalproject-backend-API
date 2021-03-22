import { Link } from "react-router-dom";
import "./SideDrawer.css";

function SideDrawer({ show, click }) {
    const sideDrawerClass = ["sidedrawer"];

    if (show) {
        sideDrawerClass.push("show");
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to="/cart" className="sidedrawer__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Sepete Git{" "}
                            <span className="sidedrawer__cartbadge">
                                0
                            </span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="sidedrawer__link">
                        <i class="fas fa-utensils fa-lg"></i>
                        <span>Menu</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideDrawer;
