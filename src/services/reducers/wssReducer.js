import {
  WSS_CONNECTION_SUCCESS,
  WSS_CONNECTION_ERROR,
  WSS_CONNECTION_CLOSED,
  WSS_GET_MESSAGE,
  WSS_SEND_MESSAGE,
  WSS_DELETE_ORDERS
} from '../actions/wsActions';

const initialState = {
  wsConnected: false,
  orders: [],
  error: undefined
};


export const wssReducer = (state = initialState, action) => {
  switch (action.type) {
    case WSS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    case WSS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    case WSS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    case WSS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        orders: action.payload
      };

    case WSS_SEND_MESSAGE:
      return {
        ...state,
        error: undefined,
        orders: action.payload
      };

    case WSS_DELETE_ORDERS:
      return {
        ...state,
        error: undefined,
        orders: []
      };

    default:
      return state;
  }
};