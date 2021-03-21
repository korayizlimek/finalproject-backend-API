import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img
                    src="https://cdn.yemek.com/mnresize/940/940/uploads/2019/01/ev-usulu-urfa-kebap-tarifi.jpg"
                    alt="productname"
                />
            </div>

            <Link to={`/product/${111}`} className="cartitem__name">
                <p>product1</p>
            </Link>

            <p className="cartitem__price">$499.99</p>

            <select className="cartitem__sekect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    );
};

export default CartItem;
