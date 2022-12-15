import {
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
} from "../actions/actions";

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
