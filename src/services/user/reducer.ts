import {
  RESET_PASSWORD,
  REGISTER_USER,
  LOG_OUT,
  LOG_IN,
  SET_USER,
} from "../actions/actions";

const initialState = {
  name: "",
  email: "",
  password: "",
  isAuthenticated: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        email: action.payload,
      };
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOG_OUT:
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        isAuthenticated: false,
      };
    case SET_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
