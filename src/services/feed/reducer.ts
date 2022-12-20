import { IOrder } from "../types/data";
import { CurrentOrderActionTypes, TCurrentOrderActions } from "./actions";

interface ICurrentOrderState {
  details: IOrder;
}

const initialState: ICurrentOrderState = {
  details: {
    createdAt: "",
    ingredients: [""],
    name: "",
    number: 0,
    status: "",
    updatedAt: "",
    _id: "",
  },
};

export const getCurrentOrder = (
  state = initialState,
  action: TCurrentOrderActions
): ICurrentOrderState => {
  switch (action.type) {
    case CurrentOrderActionTypes.SET_CURRENT_ORDER:
      return { details: action.payload };
    case CurrentOrderActionTypes.DELETE_CURRENT_ORDER:
      state.details = {
        createdAt: "",
        ingredients: [""],
        name: "",
        number: 0,
        status: "",
        updatedAt: "",
        _id: "",
      };
      return { ...state };
    default:
      return state;
  }
};
