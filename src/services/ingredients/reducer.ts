import { getIngredientsActionTypes, TGetIngredientsActions } from "./actions";
import { IIngredient } from "../types/data";

interface IGetIngredientsState {
  components: IIngredient[];
  loading: boolean;
  error: null | string;
}

const initialState: IGetIngredientsState = {
  components: [],
  loading: true,
  error: null,
};

export const getIngredientsReducer = (
  state = initialState,
  action: TGetIngredientsActions
): IGetIngredientsState => {
  switch (action.type) {
    case getIngredientsActionTypes.GET_INGREDIENTS_REQUEST:
      return { ...state };
    case getIngredientsActionTypes.GET_INGREDIENTS_SUCCESS:
      return { ...state, components: action.payload, loading: false };
    case getIngredientsActionTypes.GET_INGREDIENTS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
