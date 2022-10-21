import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from "../actions/actions.js";

const initialState = {
  loading: false,
  message: null,
  error: null,
};

export const resetPassword = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return { ...state, loading: false };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: action.payload.success,
        message: action.payload.message,
      };
    case RESET_PASSWORD_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const resetPasswordRequest = () => ({
  type: RESET_PASSWORD_REQUEST,
});

export const resetPasswordSuccess = (payload) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload,
});

export const resetPasswordError = (payload) => ({
  type: RESET_PASSWORD_ERROR,
  payload,
});
