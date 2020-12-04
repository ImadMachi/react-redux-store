import React from "react";
import { useSelector } from "react-redux";
import {
  InCartProductsSelector,
  totalPriceSelector,
} from "../features/productsSlice";
import InCartProduct from "./InCartProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartPage = () => {
  const shoppedProducts = useSelector(InCartProductsSelector);
  const total = useSelector(totalPriceSelector);
  if (!shoppedProducts.length) {
    return (
      <div className="cart">
        <p className="empty-cart-message">add some products to your cart</p>
      </div>
    );
  }
  return (
    <div className="cart">
      <h1 className="cart__title">Your Cart</h1>
      <div className="cart__products">
        <div className="incart-product">
          <span className="cart__prop">products</span>
          <span className="cart__prop incart-product__name">
            name of product
          </span>
          <span className="cart__prop incart-product__price">price</span>
          <span className="cart__prop">quantity</span>
          <span className="cart__prop">remove</span>
          <span className="cart__prop">total</span>
        </div>
        {shoppedProducts.map((product) => (
          <InCartProduct key={product.id} {...product} />
        ))}
      </div>
      <div className="cart__pay">
        <div className="cart__total">total: ${total}</div>
        <a
          href="https://paypal.com"
          target="_blank"
          rel="noreferrer"
          className="cart__paypalbox"
        >
          <FontAwesomeIcon icon={["fab", "paypal"]} />
          <span className="cart__paypal">PayPal</span>
          <span className="cart__checkout">checkout</span>
        </a>
      </div>
    </div>
  );
};

export default CartPage;
