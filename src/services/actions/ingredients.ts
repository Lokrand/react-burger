import { TIngredient } from "../types/data";

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
  payload: TIngredient[];
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
  payload: TIngredient[]
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
