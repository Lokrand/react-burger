import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./BugrerReducer";
import { configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({app: reducer});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
})