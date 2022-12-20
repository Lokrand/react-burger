export const WSS_CONNECTION_REQUEST: "WSS_CONNECTION_REQUEST" =
  "WSS_CONNECTION_REQUEST";
export const WSS_CONNECTION_SUCCESS: "WSS_CONNECTION_SUCCESS" =
  "WSS_CONNECTION_SUCCESS";
export const WSS_CONNECTION_ERROR: "WSS_CONNECTION_ERROR" =
  "WSS_CONNECTION_ERROR";
export const WSS_CONNECTION_CLOSED: "WSS_CONNECTION_CLOSED" =
  "WSS_CONNECTION_CLOSED";
export const WSS_GET_MESSAGE: "WSS_GET_MESSAGE" = "WSS_GET_MESSAGE";
export const WSS_SEND_MESSAGE: "WSS_SEND_MESSAGE" = "WSS_SEND_MESSAGE";
export const WSS_DELETE_ORDERS: "WSS_DELETE_ORDERS" = "WSS_DELETE_ORDERS";

export enum WssConnectionActionTypes {
  WSS_CONNECTION_REQUEST = "WSS_CONNECTION_REQUEST",
  WSS_CONNECTION_SUCCESS = "WSS_CONNECTION_SUCCESS",
  WSS_CONNECTION_ERROR = "WSS_CONNECTION_ERROR",
  WSS_CONNECTION_CLOSED = "WSS_CONNECTION_CLOSED",
  WSS_GET_MESSAGE = "WSS_GET_MESSAGE",
  WSS_SEND_MESSAGE = "WSS_SEND_MESSAGE",
  WSS_DELETE_ORDERS = "WSS_DELETE_ORDERS",
}

interface IWssConnectionRequest {
  readonly type: WssConnectionActionTypes.WSS_CONNECTION_REQUEST;
  readonly payload: string;
}
interface IWssConnectionSuccess {
  readonly type: WssConnectionActionTypes.WSS_CONNECTION_SUCCESS;
  readonly payload: string;
}
interface IWssConnectionError {
  readonly type: WssConnectionActionTypes.WSS_CONNECTION_ERROR;
  readonly payload: any;
}
interface IWssConnectionClosed {
  readonly type: WssConnectionActionTypes.WSS_CONNECTION_CLOSED;
}
interface IWssGetMessage {
  readonly type: WssConnectionActionTypes.WSS_GET_MESSAGE;
  readonly payload: any;
}
interface IWssSendMessage {
  readonly type: WssConnectionActionTypes.WSS_SEND_MESSAGE;
  readonly payload: any;
}
interface IWssDeleteOrders {
  readonly type: WssConnectionActionTypes.WSS_DELETE_ORDERS;
  readonly payload: [];
}

export type TWssActions =
  | IWssConnectionRequest
  | IWssConnectionSuccess
  | IWssConnectionError
  | IWssConnectionClosed
  | IWssGetMessage
  | IWssSendMessage
  | IWssDeleteOrders;

export const wssActions = {
  wssInit: WssConnectionActionTypes.WSS_CONNECTION_REQUEST,
  wssSendMessage: WssConnectionActionTypes.WSS_SEND_MESSAGE,
  onOpen: WssConnectionActionTypes.WSS_CONNECTION_SUCCESS,
  onClose: WssConnectionActionTypes.WSS_CONNECTION_CLOSED,
  onError: WssConnectionActionTypes.WSS_CONNECTION_ERROR,
  onMessage: WssConnectionActionTypes.WSS_GET_MESSAGE,
};

export type TWssActionsObj = typeof wssActions;
