import axios from "axios";
import { ERROR_DATA, GET_DATA } from "../types";

export const getData = (city) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8931b1205c760dfe335609ae9c3c31f`
    );
    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_DATA,
      payload: console.log(e),
    });
  }
};
