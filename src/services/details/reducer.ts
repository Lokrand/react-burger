import { IIngredient } from "../types/data";
import { DetailsActionTypes, TDetailsActions } from "./actions";

interface IDetailsState {
  details: IIngredient;
}

const initialState: IDetailsState = {
  details: {} as IIngredient,
};

export const getDetails = (
  state = initialState,
  action: TDetailsActions
): IDetailsState => {
  switch (action.type) {
    case DetailsActionTypes.GET_DETAILS:
      return { details: action.payload };
    case DetailsActionTypes.DELETE_DETAILS:
      state.details = {
        calories: 0,
        carbohydrates: 0,
        fat: 0,
        image: "",
        image_large: "",
        image_mobile: "",
        name: "",
        price: 0,
        proteins: 0,
        type: "",
        __v: 0,
        _id: "",
      };
      return { ...state };
    default:
      return state;
  }
};
