import * as actionTypes from "../../constants/actionConstants";
import initialState from "./initialState";

const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
