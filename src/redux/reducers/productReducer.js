import * as actionTypes from "../../constants/actionConstants";
import initialState from "./initialState";

const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
