import { GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from "./actions";

export const getIngredientsRequest = () => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (payload) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload,
});

export const getIngredientsError = (payload) => ({
  type: GET_INGREDIENTS_ERROR,
  payload,
});