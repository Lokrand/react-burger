import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
} from "../actions/actions";

export enum orderNumberActionTypes {
  GET_ORDER_REQUEST = "GET_ORDER_REQUEST",
  GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS",
  GET_ORDER_ERROR = "GET_ORDER_ERROR",
}

interface IGetOrderNumberRequest {
  type: orderNumberActionTypes.GET_ORDER_REQUEST;
}
interface IGetOrderNumberSuccess {
  type: orderNumberActionTypes.GET_ORDER_SUCCESS;
  payload: number;
}
interface IGetOrderNumberError {
  type: orderNumberActionTypes.GET_ORDER_ERROR;
  payload: string | null;
}

export type TGetOrderNumberAction =
  | IGetOrderNumberRequest
  | IGetOrderNumberSuccess
  | IGetOrderNumberError;
interface IGetOrderNumberState {
  orderNumber: number;
  loading: boolean;
  error: null | string;
}

const initialState: IGetOrderNumberState = {
  orderNumber: 0,
  loading: true,
  error: null,
};

export const getOrderNumber = (
  state = initialState,
  action: TGetOrderNumberAction
): IGetOrderNumberState => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { ...state, loading: false };
    case GET_ORDER_SUCCESS:
      return { ...state, orderNumber: action.payload, loading: true };
    case GET_ORDER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
