import { GET_ORDER_NUMBER } from "../actions/actions.js";

const initialState = {
  orderNumber: 0,
};

export const getOrderNumber = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_NUMBER:
      return { ...state, orderNumber: action.payload };
    default:
      return state;
  }
};

export const getOrderSuccess = (payload) => ({
  type: GET_ORDER_NUMBER,
  payload,
});