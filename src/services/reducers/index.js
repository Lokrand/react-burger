import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./BugrerReducer";

export const rootReducer = combineReducers(reducer);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
