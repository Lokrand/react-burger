import { IIngredient } from "../types/data";
import { DetailsActionTypes, TDetailsActions } from "./actions";

interface IDetailsState {
  details?: IIngredient;
}

const initialState: IDetailsState = {};

export const getDetails = (
  state = initialState,
  action: TDetailsActions
): IDetailsState => {
  switch (action.type) {
    case DetailsActionTypes.GET_DETAILS:
      return { details: action.payload };
    case DetailsActionTypes.DELETE_DETAILS:
      return { ...state, details: undefined };
    default:
      return state;
  }
};
