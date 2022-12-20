// types/index.ts
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';
import {
  useDispatch as dispatchHook,
} from 'react-redux';
import { store } from '../services/store';
import { IConstructorIngredient, IIngredient, IIngredientState } from '../services/types/data';
import { TBurgerActions } from '../services/burgerConstructor/actions';
import { TCurrentOrderActions } from '../services/currentOrder/actions';
import { TGetIngredientsActions } from '../services/ingredients/actions';
// import { TTodoActions } from './actions';

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
type TApplicationActions = TBurgerActions | TCurrentOrderActions | TGetIngredientsActions;

// Типизация thunk в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// export type AppThunk<ActionTypes extends Action, ReturnType = void> = ThunkAction<
//   ReturnType,
//   TApplicationActions,
//   unknown,
//   ActionTypes
// >

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch; 

export const dispatchStore = store.dispatch

// export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();