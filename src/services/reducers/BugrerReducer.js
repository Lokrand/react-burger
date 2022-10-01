import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_LOADING,
  GET_COUNTER,
  ADD_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT
} from "../actions/ingredients.js";

export const initialState = {
  components: [],
  loading: false,
  selectedItems: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return { ...state, components: action.payload, loading: false };
    case GET_INGREDIENTS_LOADING:
      return { ...state, loading: action.payload };
    case ADD_CONSTRUCTOR_ELEMENT:
      return { ...state, selectedItems: [...state.selectedItems, action.payload] };
    case REMOVE_CONSTRUCTOR_ELEMENT:
      return { ...state, selectedItems: action.payload };
    default:
      return state;
  }
};











const counterState = {
  count: 0,
};

export const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case GET_COUNTER:
      return { ...state, count: action.count };
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
