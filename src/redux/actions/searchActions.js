import * as actionTypes from "../../constants/actionConstants";

const getSearch = (search) => {
  return {
    type: actionTypes.GET_SEARCH,
    payload: search,
  };
};

export default getSearch;
