import { IIngredient } from "../types/data";

export enum DetailsActionTypes {
  DELETE_DETAILS = "DELETE_DETAILS",
  GET_DETAILS = "GET_DETAILS",
}

interface ISetDetails {
  type: DetailsActionTypes.GET_DETAILS;
  payload: IIngredient;
}

interface IDeleteDetails {
  type: DetailsActionTypes.DELETE_DETAILS;
}

export type TDetailsActions = ISetDetails | IDeleteDetails;

export const setDetails = (payload: IIngredient): TDetailsActions => ({
  type: DetailsActionTypes.GET_DETAILS,
  payload,
});

export const deleteDetails = (): TDetailsActions => ({
  type: DetailsActionTypes.DELETE_DETAILS,
});
