import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShopped, setQuantity } from "../features/productsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InCartProduct = ({ id, imagePath, quantity, name, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="incart-product">
      <Link to={"/products/" + id}>
        <img src={"/images/" + imagePath} alt="" className="cart-image" />
      </Link>
      <span className="incart-product__name">{name}</span>
      <span className="incart-product__price">${price}</span>
      <span className="cart__quantity">
        <FontAwesomeIcon
          icon={["far", "minus-square"]}
          onClick={() =>
            quantity > 1 &&
            dispatch(setQuantity({ id, quantity: quantity - 1 }))
          }
        />
        {quantity}
        <FontAwesomeIcon
          icon={["far", "plus-square"]}
          onClick={() => dispatch(setQuantity({ id, quantity: quantity + 1 }))}
        />
      </span>
      <FontAwesomeIcon
        icon="trash"
        onClick={() => dispatch(toggleShopped({ id, shopped: false }))}
      />
      <span className="product-total">${parseInt(price, 10) * quantity}</span>
      <hr />
    </div>
  );
};

export default InCartProduct;
