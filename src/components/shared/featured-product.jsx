import React, { useContext } from "react";
import { isInCart } from "../../helpers";
import { CartContext } from "../../context/cart-context";
import { withRouter } from "react-router-dom";
import "./featured-product.styles.scss";

const FeaturedProduct = (props) => {
  const { title, imageUrl, price, history, id, description } = props;
  const product = { title, imageUrl, price, id, description };
  const { addProduct, cartItems } = useContext(CartContext);
  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => history.push(`/product/${id}`)}
      >
        <img src={imageUrl} alt="product" />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>$ {price}</p>
        {!isInCart(product, cartItems) && (
          <button
            className="button is-black roux-btn"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
        )}
        {isInCart(product, cartItems) && (
          <button
            className="button is-white roux-btn"
            id="btn-white-outline"
            onClick={() => {}}
          >
            Add More
          </button>
        )}
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
