import { TIngredient } from "../types/data";

export enum BurgerActionTypes {
  ADD_CONSTRUCTOR_ELEMENT = "ADD_CONSTRUCTOR_ELEMENT",
  REMOVE_CONSTRUCTOR_ELEMENT = "REMOVE_CONSTRUCTOR_ELEMENT",
  UPDATE_SELECTED_ITEMS_ORDER = "UPDATE_SELECTED_ITEMS_ORDER",
}

interface IUpdateSelectedItemsAction {
  type: BurgerActionTypes.UPDATE_SELECTED_ITEMS_ORDER;
  payload: TIngredient[];
}
/////
type TUpdateSelectedItemsAction = IReduxAction<
  BurgerActionTypes.UPDATE_SELECTED_ITEMS_ORDER,
  TIngredient[]
>;
/////
interface IAddConstructorElementAction {
  type: BurgerActionTypes.ADD_CONSTRUCTOR_ELEMENT;
  payload: TIngredient;
}
interface IRemoveConstructorElementAction {
  type: BurgerActionTypes.REMOVE_CONSTRUCTOR_ELEMENT;
  payload: string;
}

////
interface IReduxAction<Type, Payload> {
  type: Type;
  payload: Payload;
}
////

export type TBurgerActions =
  | IAddConstructorElementAction
  | IRemoveConstructorElementAction
  | IUpdateSelectedItemsAction;

export const addConstructorElement = (
  payload: TIngredient
): TBurgerActions => ({
  type: BurgerActionTypes.ADD_CONSTRUCTOR_ELEMENT,
  payload,
});

export const removeConstructorElement = (payload: string): TBurgerActions => ({
  type: BurgerActionTypes.REMOVE_CONSTRUCTOR_ELEMENT,
  payload,
});

export const updateSelectedItemsOrder = (
  payload: TIngredient[]
): TBurgerActions => ({
  type: BurgerActionTypes.UPDATE_SELECTED_ITEMS_ORDER,
  payload,
});
