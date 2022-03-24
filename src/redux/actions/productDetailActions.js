import Api from "../../helpers/api";
import { PATH } from "../../constants/apiConstants";
import * as actionTypes from "../../constants/actionConstants";

const getProductsSuccess = (products) => {
  return {
    type: actionTypes.GET_PRODUCT_DETAIL,
    payload: products,
  };
};

export const getProductDetail = (id) => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAIL, payload: id });
};
