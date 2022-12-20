import { IOrder } from "../types/data";

export enum CurrentOrderActionTypes {
  DELETE_CURRENT_ORDER = "DELETE_CURRENT_ORDER",
  SET_CURRENT_ORDER = "SET_CURRENT_ORDER",
}

interface ISetCurrentOrder {
  type: CurrentOrderActionTypes.SET_CURRENT_ORDER;
  payload: IOrder;
}

interface IDeleteCurrentOrder {
  type: CurrentOrderActionTypes.DELETE_CURRENT_ORDER;
}

export type TCurrentOrderActions = ISetCurrentOrder | IDeleteCurrentOrder;

export const setCurrentOrder = (payload: IOrder): TCurrentOrderActions => ({
  type: CurrentOrderActionTypes.SET_CURRENT_ORDER,
  payload,
});

export const deleteCurrentOrder = (): TCurrentOrderActions => ({
  type: CurrentOrderActionTypes.DELETE_CURRENT_ORDER,
});
