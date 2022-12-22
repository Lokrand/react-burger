import { IWssResponse } from "../types/data";
import { TWssActions, WssConnectionActionTypes } from "./actions";

interface IWssReducerState {
  wssConnected: boolean;
  orders: IWssResponse;
  error: null | string;
  total: number;
  totalToday: number;
}

const initialState: IWssReducerState = {
  wssConnected: false,
  orders: {} as IWssResponse,
  error: null,
  total: 0,
  totalToday: 0,
};

export const wssReducer = (
  state = initialState,
  action: TWssActions
): IWssReducerState => {
  switch (action.type) {
    case WssConnectionActionTypes.WSS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: null,
        wssConnected: true,
      };

    case WssConnectionActionTypes.WSS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wssConnected: false,
      };

    case WssConnectionActionTypes.WSS_CONNECTION_CLOSED:
      return {
        ...state,
        error: null,
        wssConnected: false,
      };

    case WssConnectionActionTypes.WSS_GET_MESSAGE:
      return {
        ...state,
        error: null,
        orders: action.payload,
      };

    case WssConnectionActionTypes.WSS_SEND_MESSAGE:
      return {
        ...state,
        error: null,
        orders: action.payload,
      };

    case WssConnectionActionTypes.WSS_DELETE_ORDERS:
      return {
        ...state,
        error: null,
        orders: { ...state.orders, orders: [] },
      };

    default:
      return state;
  }
};
