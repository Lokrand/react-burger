import {
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
} from "../actions/actions.js";

const initialState = {
  loading: false,
  error: null,
};

export const refreshToken = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_TOKEN_REQUEST:
      return { ...state, loading: false };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: action.payload.success,
      };
    case REFRESH_TOKEN_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const refreshTokenRequest = () => ({
  type: REFRESH_TOKEN_REQUEST,
});

export const refreshTokenSuccess = (payload) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload,
});

export const refreshTokenError = (payload) => ({
  type: REFRESH_TOKEN_ERROR,
  payload,
});
