import { GET_ORDER_ERROR, GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from "./actions";

export const getOrderRequest = () => ({
  type: GET_ORDER_REQUEST,
});

export const getOrderSuccess = (payload) => ({
  type: GET_ORDER_SUCCESS,
  payload,
});

export const getOrderError = (payload) => ({
  type: GET_ORDER_ERROR,
  payload,
});