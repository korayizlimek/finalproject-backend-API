import "./ProductScreen.css";

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="left__image">
                <img
                    src="https://cdn.yemek.com/mnresize/940/940/uploads/2019/01/ev-usulu-urfa-kebap-tarifi.jpg"
                    alt="productname"
                />
            </div>

            <div className="product__info">
                <p className="info__name">Product1</p>
                <p className="info__price">$499.99</p>
                <p className="product__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Cumque, veniam.
                </p>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price: <span>$499.99</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Sepete Ekle</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductScreen;
