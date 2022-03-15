import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import dataReducer from "./dataReducer";

export default combineReducers({
  weather: dataReducer,
  city: cityReducer,
});
