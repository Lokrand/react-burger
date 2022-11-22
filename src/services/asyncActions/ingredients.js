import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsError,
} from "../reducers/getIngredients";

export const fetchIngredients = () => {
  return function (dispatch) {
    dispatch(getIngredientsRequest());
    commonFetch(`${BASE_URL}/ingredients`)
      .then((data) => {
        dispatch(getIngredientsSuccess(data.data));
      })
      .catch((err) => {
        console.error("Error", err);
        dispatch(getIngredientsError(err));
      });
  };
};
