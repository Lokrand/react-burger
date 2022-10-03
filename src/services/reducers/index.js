import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./BugrerReducer";
import { getIngredientsReducer } from "./getIngredients";
import { getDetails } from "./getDetails";
import { getOrderNumber } from "./getOrderNumber";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({ app: reducer, getIngredientsReducer, getDetails, getOrderNumber });

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
