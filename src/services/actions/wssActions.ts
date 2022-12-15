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

interface IWssConnectionRequest {
  readonly type: typeof WSS_CONNECTION_REQUEST;
  readonly payload: string;
}
interface IWssConnectionSuccess {
  readonly type: typeof WSS_CONNECTION_SUCCESS;
  readonly payload: string;
}
interface IWssConnectionError {
  readonly type: typeof WSS_CONNECTION_ERROR;
  readonly payload: any;
}
interface IWssConnectionClosed {
  readonly type: typeof WSS_CONNECTION_CLOSED;
}
interface IWssGetMessage {
  readonly type: typeof WSS_GET_MESSAGE;
  readonly payload: any;
}
interface IWssSendMessage {
  readonly type: typeof WSS_SEND_MESSAGE;
  readonly payload: any;
}
interface IWssDeleteOrders {
  readonly type: typeof WSS_DELETE_ORDERS;
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
  wssInit: WSS_CONNECTION_REQUEST,
  wssSendMessage: WSS_SEND_MESSAGE,
  onOpen: WSS_CONNECTION_SUCCESS,
  onClose: WSS_CONNECTION_CLOSED,
  onError: WSS_CONNECTION_ERROR,
  onMessage: WSS_GET_MESSAGE,
};

export type TWssActionsObj = typeof wssActions;
