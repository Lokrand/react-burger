import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../actions/actions.js";

const initialState = {
  loading: false,
  user: {},
  accessToken: null,
  refreshToken: null,
  error: null,
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: action.payload.success,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case LOGIN_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});
