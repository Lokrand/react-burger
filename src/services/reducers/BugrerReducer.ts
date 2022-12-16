import { typeBun } from "../../utils/constans";
import { BurgerActionTypes, TBurgerAction } from "../actions/burger";
import { TIngredient } from "../types/data";

interface IBurgerState {
  selectedItems: TIngredient[];
}

const initialState: IBurgerState = {
  selectedItems: [],
};

export const reducer = (
  state = initialState,
  action: TBurgerAction
): IBurgerState => {
  switch (action.type) {
    case BurgerActionTypes.ADD_CONSTRUCTOR_ELEMENT:
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
    case BurgerActionTypes.REMOVE_CONSTRUCTOR_ELEMENT:
      const removedIngs = state.selectedItems.filter(
        (el: TIngredient): boolean => el.key !== action.payload
      );
      return {
        ...state,
        selectedItems: removedIngs,
      };
    case BurgerActionTypes.UPDATE_SELECTED_ITEMS_ORDER:
      return { ...state, selectedItems: action.payload };
    default:
      return state;
  }
};
