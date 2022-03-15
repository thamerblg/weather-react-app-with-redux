import { SET_CITY } from "../types";

const initialState = {
  city: "",
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
