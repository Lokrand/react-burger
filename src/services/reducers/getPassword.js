import {
  GET_PASSWORD_REQUEST,
  GET_PASSWORD_SUCCESS,
  GET_PASSWORD_ERROR,
} from "../actions/actions.js";

const initialState = {
  loading: false,
  message: null,
  error: null,
};

export const getPassword = (state = initialState, action) => {
  switch (action.type) {
    case GET_PASSWORD_REQUEST:
      return { ...state };
    case GET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: action.payload.success,
        message: action.payload.message,
      };
    case GET_PASSWORD_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
