import { IAction, TIngredient } from "../types/data";
// import { UPDATE_SELECTED_ITEMS_ORDER } from "./actions";

export enum BurgerActionTypes {
  ADD_CONSTRUCTOR_ELEMENT = "ADD_CONSTRUCTOR_ELEMENT",
  REMOVE_CONSTRUCTOR_ELEMENT = "REMOVE_CONSTRUCTOR_ELEMENT",
  UPDATE_SELECTED_ITEMS_ORDER = "UPDATE_SELECTED_ITEMS_ORDER",
}

interface IUpdateSelectedItemsAction {
  type: BurgerActionTypes.UPDATE_SELECTED_ITEMS_ORDER;
  payload: TIngredient[];
}

interface IAddConstructorElementAction {
  type: BurgerActionTypes.ADD_CONSTRUCTOR_ELEMENT;
  payload: TIngredient;
}
interface IRemoveConstructorElementAction {
  type: BurgerActionTypes.REMOVE_CONSTRUCTOR_ELEMENT;
  payload: string;
}

export type TBurgerAction =
  | IAddConstructorElementAction
  | IRemoveConstructorElementAction
  | IUpdateSelectedItemsAction;

export const addConstructorElement = (payload: TIngredient): TBurgerAction => ({
  type: BurgerActionTypes.ADD_CONSTRUCTOR_ELEMENT,
  payload,
});

export const removeConstructorElement = (payload: string): TBurgerAction => ({
  type: BurgerActionTypes.REMOVE_CONSTRUCTOR_ELEMENT,
  payload,
});

export const removeSelectedItems = (payload: TIngredient[]): TBurgerAction => ({
  type: BurgerActionTypes.UPDATE_SELECTED_ITEMS_ORDER,
  payload,
});
