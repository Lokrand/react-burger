import { orderNumberActionTypes, TGetOrderNumberAction } from "../reducers/getOrderNumber";
import { IAction } from "../types/data";
import {
  GET_ORDER_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "./actions";

export const getOrderRequest = (): TGetOrderNumberAction => ({
  type: orderNumberActionTypes.GET_ORDER_REQUEST,
});

export const getOrderSuccess = (payload: number): TGetOrderNumberAction => ({
  type: orderNumberActionTypes.GET_ORDER_SUCCESS,
  payload,
});

export const getOrderError = (payload: string): TGetOrderNumberAction => ({
  type: orderNumberActionTypes.GET_ORDER_ERROR,
  payload,
});
