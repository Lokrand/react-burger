import { IAction } from "../types/data";
import {
  GET_ORDER_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "./actions";

export const getOrderRequest = (): IAction => ({
  type: GET_ORDER_REQUEST,
});

export const getOrderSuccess = (payload: number): IAction => ({
  type: GET_ORDER_SUCCESS,
  payload,
});

export const getOrderError = (payload: string): IAction => ({
  type: GET_ORDER_ERROR,
  payload,
});
