// types/index.ts
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import {
  useDispatch as dispatchHook,
} from 'react-redux';
import { store } from '../services/reducers';
// import { TTodoActions } from './actions';

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
type TApplicationActions = any;

// Типизация thunk в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch; 

export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();