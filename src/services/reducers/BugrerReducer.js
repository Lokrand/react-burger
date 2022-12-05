import { typeBun } from "../../utils/constans";
import {
  ADD_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT,
  UPDATE_SELECTED_ITEMS_ORDER,
} from "../actions/actions";

const initialState = {
  selectedItems: [],
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
            return {
              ...state,
              selectedItems: withoutBunArr,
            };
          }
        }
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    case REMOVE_CONSTRUCTOR_ELEMENT:
      const removedIngs = state.selectedItems.filter(
        (el) => el.key !== action.payload
      );
      return {
        ...state,
        selectedItems: removedIngs,
      };
    case UPDATE_SELECTED_ITEMS_ORDER:
      return { ...state, selectedItems: action.payload };
    default:
      return state;
  }
};
