import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../actions/actions";

const initialState = {
  loading: false,
  user: {},
  accessToken: null,
  refreshToken: null,
  error: null,
};

export const login = (state = initialState, action: any) => {
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
