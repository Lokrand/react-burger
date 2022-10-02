import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_LOADING,
  GET_COUNTER,
  ADD_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT,
  GET_DETAILS,
  GET_ORDER_NUMBER,
} from "../actions/ingredients.js";

export const initialState = {
  components: [],
  loading: false,
  selectedItems: [],
  details: [],
  orderFor: [],
  orderNumber: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return { ...state, components: action.payload, loading: false };
    case GET_INGREDIENTS_LOADING:
      return { ...state, loading: action.payload };
    case ADD_CONSTRUCTOR_ELEMENT:
      const ingredient = action.payload;
      if (ingredient.type === "bun") {
        for (let i = 0; i < state.selectedItems.length; i++) {
          let el = state.selectedItems[i];
          if (el.type === "bun" && ingredient._id === el._id) {
            return state;
          } else if (el.type === "bun" && ingredient._id !== el._id) {
            const withoutBunArr = state.selectedItems.filter((el) => {
              return el.type !== "bun";
            });
            withoutBunArr.push(ingredient);
            const orderWothoutBun = withoutBunArr.map((el) => el._id);
            return {
              ...state,
              selectedItems: withoutBunArr,
              orderFor: orderWothoutBun,
            };
          }
        }
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
        orderFor: [...state.orderFor, action.payload._id],
      };
    case REMOVE_CONSTRUCTOR_ELEMENT:
      const removedIngs = state.selectedItems.filter(
        (el) => el.key !== action.payload
      );
      const orderForAfterRemove = removedIngs.map((el) => el._id);
      return {
        ...state,
        selectedItems: removedIngs,
        orderFor: orderForAfterRemove,
      };
    case GET_DETAILS:
      return { ...state, details: action.payload };
    case GET_ORDER_NUMBER:
      return { ...state, orderNumber: action.payload };
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

export const getOrderReducer = (payload) => ({
  type: GET_ORDER_NUMBER,
  payload,
});
