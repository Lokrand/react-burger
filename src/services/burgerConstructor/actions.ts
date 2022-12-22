import { IIngredient } from "../types/data";

export enum BurgerActionTypes {
  ADD_CONSTRUCTOR_ELEMENT = "ADD_CONSTRUCTOR_ELEMENT",
  REMOVE_CONSTRUCTOR_ELEMENT = "REMOVE_CONSTRUCTOR_ELEMENT",
  UPDATE_SELECTED_ITEMS_ORDER = "UPDATE_SELECTED_ITEMS_ORDER",
}

interface IUpdateSelectedItemsAction {
  type: BurgerActionTypes.UPDATE_SELECTED_ITEMS_ORDER;
  payload: IIngredient[];
}
/////
type TUpdateSelectedItemsAction = IReduxAction<
  BurgerActionTypes.UPDATE_SELECTED_ITEMS_ORDER,
  IIngredient[]
>;
/////
interface IAddConstructorElementAction {
  type: BurgerActionTypes.ADD_CONSTRUCTOR_ELEMENT;
  payload: IIngredient;
}
interface IRemoveConstructorElementAction {
  type: BurgerActionTypes.REMOVE_CONSTRUCTOR_ELEMENT;
  payload: string | undefined;
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
  payload: IIngredient
): TBurgerActions => ({
  type: BurgerActionTypes.ADD_CONSTRUCTOR_ELEMENT,
  payload,
});

export const removeConstructorElement = (payload: string | undefined): TBurgerActions => ({
  type: BurgerActionTypes.REMOVE_CONSTRUCTOR_ELEMENT,
  payload,
});

export const updateSelectedItemsOrder = (
  payload: IIngredient[]
): TBurgerActions => ({
  type: BurgerActionTypes.UPDATE_SELECTED_ITEMS_ORDER,
  payload,
});
