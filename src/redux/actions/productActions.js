import Api from "../../helpers/api";
import { PATH } from "../../constants/apiConstants";
import * as actionTypes from "../../constants/actionConstants";

const getProductsSuccess = (products) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    await Api.get(PATH)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getProductsSuccess(res.products));
      })
      .catch((err) => console.error(err));
  };
};
