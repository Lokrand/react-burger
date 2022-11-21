import { BASE_URL } from "../../utils/constans";
import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsError,
} from "../reducers/getIngredients";

export const fetchIngredients = () => {
  return function (dispatch) {
    dispatch(getIngredientsRequest());
    fetch(`${BASE_URL}/ingredients`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(getIngredientsSuccess(json.data));
      })
      .catch((err) => {
        console.error("Error", err);
        dispatch(getIngredientsError(err));
      });
  };
};
