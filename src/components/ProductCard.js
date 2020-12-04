import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShopped } from "../features/productsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductCard = ({ id, name, price, imagePath, shopped }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleShopped({ id, shopped: !shopped }));
  };
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={"/images/" + imagePath}
          className="product-card__image"
          alt=""
        />
        <button onClick={handleClick} className="product-card__shop">
          {shopped ? "IN CART" : <FontAwesomeIcon icon="shopping-cart" />}
        </button>
      </div>
      <Link to={"/products/" + id}>
        <div className="product-card__info">
          <span>{name}</span>
          <span>${price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
