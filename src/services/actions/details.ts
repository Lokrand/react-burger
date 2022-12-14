import { IAction, TIngredient } from "../types/data";
import { DELETE_DETAILS, GET_DETAILS } from "./actions";

export function setDetails(item: TIngredient): IAction {
  return {
    type: GET_DETAILS,
    payload: { item },
  };
}

export const deleteDetails = (): IAction => {
  return {
    type: DELETE_DETAILS,
    payload: {},
  };
};
