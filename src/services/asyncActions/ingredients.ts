import { Dispatch } from "react";
import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsError,
  TGetIngredientsActions,
} from "../actions/ingredients";


export const fetchIngredients = () => {
  return function (dispatch: Dispatch<TGetIngredientsActions>) {
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
