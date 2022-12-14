import { IAction, TIngredient } from "../types/data";
import { GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from "./actions";

export const getIngredientsRequest = ():IAction => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (payload: TIngredient[]):IAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload,
});

export const getIngredientsError = (payload:string):IAction => ({
  type: GET_INGREDIENTS_ERROR,
  payload,
});