import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer, counterReducer } from "./BugrerReducer";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({ app: reducer, counterReducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
