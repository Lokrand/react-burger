import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { useDispatch as dispatchHook } from "react-redux";
import { RootState, store } from "../services/store";
import { TBurgerActions } from "../services/burgerConstructor/actions";
import { TCurrentOrderActions } from "../services/currentOrder/actions";
import { TGetIngredientsActions } from "../services/ingredients/actions";
import { TDetailsActions } from "../services/details/actions";
import { TGetOrderNumberAction } from "../services/orderNumber/actions";
import { TResetPasswordActions } from "../services/resetPassword/actions";
import { TUserActions } from "../services/user/actions";
import { TWssActions } from "../services/wssServices/actions";

type TApplicationActions =
  | TBurgerActions
  | TCurrentOrderActions
  | TGetIngredientsActions
  | TDetailsActions
  | TGetOrderNumberAction
  | TResetPasswordActions
  | TUserActions
  | TWssActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => dispatchHook<AppDispatch>() as AppThunk;
