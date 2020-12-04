import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import ProductPage from "../components/ProductPage";
import CartPage from "../components/CartPage";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  faShoppingCart,
  faTrash,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faShoppingCart,
  faPlusSquare,
  faMinusSquare,
  faTrash,
  faPhoneAlt,
  faEnvelope
);

const AppRouter = () => {
  return (
    <BrowserRouter forceRefresh={true}>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={ProductsList} exact={true} />
          <Route path="/products" component={ProductsList} exact={true} />
          <Route path="/products/:id" component={ProductPage} exact={true} />
          <Route path="/cart" component={CartPage} exact={true} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
