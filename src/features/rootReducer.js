import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

export default combineReducers({
  products: productsReducer,
});
