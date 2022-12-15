import { IAction } from "../types/data";

export const SET_MODAL = "SET_MODAL";

export const openModal = (payload: string): IAction => ({
  type: SET_MODAL,
  payload,
});
