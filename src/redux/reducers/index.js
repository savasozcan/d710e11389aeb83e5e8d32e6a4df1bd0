import { combineReducers } from "redux";
import productsReducer from "./productReducer";
import searchReducer from "./searchReducer";
import productDetailReducer from "./productDetailReducer";

const rootReducer = combineReducers({
  productsReducer,
  searchReducer,
  productDetailReducer,
});

export default rootReducer;
