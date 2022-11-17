import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./BugrerReducer";
import { getIngredientsReducer } from "./getIngredients";
import { getDetails } from "./getDetails";
import { getOrderNumber } from "./getOrderNumber";
import { configureStore } from "@reduxjs/toolkit";
import { getPassword } from "./getPassword";
import { registerPerson } from "./registerPerson";
import { resetPassword } from "./resetPassword";
import { login } from "./login";
import { logout } from "./logout";
import { user } from "./user";
const rootReducer = combineReducers({
  app: reducer,
  getIngredientsReducer,
  getDetails,
  getOrderNumber,
  getPassword,
  registerPerson,
  resetPassword,
  login,
  logout,
  user,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
