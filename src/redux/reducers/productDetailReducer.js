import * as actionTypes from "../../constants/actionConstants";
import initialState from "./initialState";

const productDetailReducer = (state = initialState.prodId, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default productDetailReducer;
