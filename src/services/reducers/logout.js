import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "../actions/actions";

const initialState = {
  loading: false,
  message: null,
  error: null,
};

export const logout = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return { ...state, loading: false };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: action.payload.success,
        message: action.payload.message,
      };
    case LOGOUT_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
