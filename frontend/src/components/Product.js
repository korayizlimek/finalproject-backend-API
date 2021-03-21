import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <img
                    src="https://cdn.yemek.com/mnresize/940/940/uploads/2019/01/ev-usulu-urfa-kebap-tarifi.jpg"
                    alt="productname"
                />

                <p className="info__name">Adana Kebap</p>
                <p className="product__description">
                    Acili Adana Kebap - Erkek Kuzu etinden yapilmistir
                </p>
                <p className="info__price">20 TL</p>
                <Link
                    to={`/product/${1111}`}
                    className="info__button"
                >
                    incele
                </Link>

                <button type="submit" className="product__button">
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
};

export default Product;
