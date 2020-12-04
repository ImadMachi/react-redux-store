import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShopped } from "../features/productsSlice";

const ProductPage = (props) => {
  const urlId = props.match.params.id;
  const { id, name, price, imagePath, description, shopped } =
    useSelector((state) => ({
      ...state.products.find((product) => product.id === urlId),
    })) || {};
  const dispatch = useDispatch();

  if (id)
    return (
      <div className="product-page">
        <div className="product-page__info">
          <div className="product-page__image-container">
            <img
              src={"/images/" + imagePath}
              alt=""
              className="product-page-image"
            />
          </div>
          <div className="product-page__description">
            <h1 className="product-page__title">model: {name}</h1>
            <h2 className="product-page__price">Price: ${price}</h2>
            <p className="product-page__text">{description}</p>
            <Link to="/products" className="back-to-products">
              Back To Products
            </Link>
            <button
              onClick={() => dispatch(toggleShopped({ id, shopped: !shopped }))}
              className="product-page__shop"
            >
              {shopped ? "IN CART" : "SHOP"}
            </button>
          </div>
        </div>
      </div>
    );
  else return <div>404 Not Found</div>;
};

export default ProductPage;
