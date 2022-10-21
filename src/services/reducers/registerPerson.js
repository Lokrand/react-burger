import {
  REGISTER_PERSON_REQUEST,
  REGISTER_PERSON_SUCCESS,
  REGISTER_PERSON_ERROR,
} from "../actions/actions.js";

const initialState = {
  loading: false,
  user: {},
  accessToken: null,
  refreshToken: null,
  error: null,
};

export const registerPerson = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PERSON_REQUEST:
      return { ...state, loading: false };
    case REGISTER_PERSON_SUCCESS:
      return {
        ...state,
        loading: action.payload.success,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case REGISTER_PERSON_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const registerPersonRequest = () => ({
  type: REGISTER_PERSON_REQUEST,
});

export const registerPersonSuccess = (payload) => ({
  type: REGISTER_PERSON_SUCCESS,
  payload,
});

export const registerPersonError = (payload) => ({
  type: REGISTER_PERSON_ERROR,
  payload,
});
