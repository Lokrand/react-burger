import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
} from "../actions/actions.js";

const initialState = {
  orderNumber: 0,
  loading: true,
  error: null,
};

export const getOrderNumber = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { ...state };
    case GET_ORDER_SUCCESS:
      return { ...state, orderNumber: action.payload, loading: false };
    case GET_ORDER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

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