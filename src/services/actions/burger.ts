import { IAction } from "../types/data";
import { UPDATE_SELECTED_ITEMS_ORDER } from "./actions";

export const removeSelectedItems = (payload: number): IAction => ({
  type: UPDATE_SELECTED_ITEMS_ORDER,
  payload,
});
