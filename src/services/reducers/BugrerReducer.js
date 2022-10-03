import { typeBun } from "../../utils/constans.js";
import {
  ADD_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT,
  UPDATE_SELECTED_ITEMS_ORDER,
} from "../actions/actions.js";

const initialState = {
  selectedItems: [],
  orderFor: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_ELEMENT:
      const ingredient = action.payload;
      if (ingredient.type === typeBun) {
        for (let i = 0; i < state.selectedItems.length; i++) {
          let el = state.selectedItems[i];
          if (el.type === typeBun && ingredient._id === el._id) {
            return state;
          } else if (el.type === typeBun && ingredient._id !== el._id) {
            const withoutBunArr = state.selectedItems.filter((el) => {
              return el.type !== typeBun;
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
    case UPDATE_SELECTED_ITEMS_ORDER:
      return { ...state, selectedItems: action.payload };
    default:
      return state;
  }
};
