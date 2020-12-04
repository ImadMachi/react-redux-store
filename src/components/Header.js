import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { ProductsLength } from "../features/productsSlice";

const Header = () => {
  const inCartProductsLength = useSelector(ProductsLength);
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/products" className="header__logo">
          atlas
        </Link>
        <Link to="/cart" className="header__cart-box">
          <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
          <span className="header__cart-name">My Cart</span>

          {inCartProductsLength > 0 ? (
            <span className="header__length">{inCartProductsLength}</span>
          ) : null}
        </Link>
      </div>
    </header>
  );
};

export default Header;
