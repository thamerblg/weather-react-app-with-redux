import { GET_DATA } from "../types";

const initialState = {
  //city: "",
  data: [],
  loading: true,
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
