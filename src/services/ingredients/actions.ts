import { AppDispatch } from "../../hooks/useTypedDispatch";
import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { IIngredient } from "../types/data";

export enum getIngredientsActionTypes {
  GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST",
  GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS",
  GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR",
}

interface IGetIngredientsRequest {
  type: getIngredientsActionTypes.GET_INGREDIENTS_REQUEST;
}
interface IGetIngredientsSuccess {
  type: getIngredientsActionTypes.GET_INGREDIENTS_SUCCESS;
  payload: IIngredient[];
}
interface IGetIngredientsError {
  type: getIngredientsActionTypes.GET_INGREDIENTS_ERROR;
  payload: string | null;
}

export type TGetIngredientsActions =
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsError;

export const getIngredientsRequest = (): TGetIngredientsActions => ({
  type: getIngredientsActionTypes.GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (
  payload: IIngredient[]
): TGetIngredientsActions => ({
  type: getIngredientsActionTypes.GET_INGREDIENTS_SUCCESS,
  payload,
});

export const getIngredientsError = (
  payload: string
): TGetIngredientsActions => ({
  type: getIngredientsActionTypes.GET_INGREDIENTS_ERROR,
  payload,
});

export const fetchIngredients = () => {
  return function ( dispatch:AppDispatch ) {
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

