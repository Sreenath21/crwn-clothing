import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/categoryReducer";
import { cartReducer } from "./cart/cartReducers";

import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
