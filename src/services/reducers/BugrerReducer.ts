import { typeBun } from "../../utils/constans";
// import {
//   ADD_CONSTRUCTOR_ELEMENT,
//   REMOVE_CONSTRUCTOR_ELEMENT,
//   UPDATE_SELECTED_ITEMS_ORDER,
// } from "../actions/actions";
import { TIngredient } from "../types/data";

enum BurgerActionTypes {
  ADD_CONSTRUCTOR_ELEMENT = "ADD_CONSTRUCTOR_ELEMENT",
  REMOVE_CONSTRUCTOR_ELEMENT = "REMOVE_CONSTRUCTOR_ELEMENT",
  UPDATE_SELECTED_ITEMS_ORDER = "UPDATE_SELECTED_ITEMS_ORDER",
}

interface IAddConstructorElementAction {
  type: BurgerActionTypes.ADD_CONSTRUCTOR_ELEMENT;
  payload: TIngredient;
}
interface IRemoveConstructorElementAction {
  type: BurgerActionTypes.REMOVE_CONSTRUCTOR_ELEMENT;
  payload: string;
}
interface IUpdateSelectedItemsAction {
  type: BurgerActionTypes.UPDATE_SELECTED_ITEMS_ORDER;
  payload: TIngredient[];
}

type TBurgerAction =
  | IAddConstructorElementAction
  | IRemoveConstructorElementAction
  | IUpdateSelectedItemsAction;

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
