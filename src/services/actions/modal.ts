import { IAction } from "../types/data";

export const SET_MODAL: "SET_MODAL" = "SET_MODAL";

export interface IOpenModalAction {
  type: typeof SET_MODAL;
  payload: string;
}

export const openModal = (payload: string): IOpenModalAction => ({
  type: SET_MODAL,
  payload,
});
