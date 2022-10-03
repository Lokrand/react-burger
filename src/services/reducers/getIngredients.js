import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../actions/actions.js";

const initialState = {
  components: [],
  loading: true,
  error: null,
};

export const getIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state };
    case GET_INGREDIENTS_SUCCESS:
      return { ...state, components: action.payload, loading: false };
    case GET_INGREDIENTS_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};

export const getIngredientsRequest = () => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (payload) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload,
});

export const getIngredientsError = (payload) => ({
  type: GET_INGREDIENTS_ERROR,
  payload,
});
