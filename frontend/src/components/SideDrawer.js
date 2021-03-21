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
                    <Link to="/cart">
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
                    <Link to="/">Menu</Link>
                </li>
            </ul>
        </div>
    );
}

export default SideDrawer;