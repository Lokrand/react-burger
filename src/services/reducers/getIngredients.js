import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_LOADING,
} from "../actions/actions.js";

const initialState = {
  components: [],
  loading: false,
};

export const getIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return { ...state, components: action.payload, loading: false };
    case GET_INGREDIENTS_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const addManyIngredients = (payload) => ({
  type: GET_INGREDIENTS,
  payload,
});

export const addManyIngredientsLoading = (payload) => ({
  type: GET_INGREDIENTS_LOADING,
  payload,
});
