import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./BugrerReducer";
import { getIngredientsReducer } from "./getIngredients";
import { getDetails } from "./getDetails";
import { getOrderNumber } from "./getOrderNumber";
import { resetPassword } from "./resetPassword";
import { login } from "./login";
import { logout } from "./logout";
import { user } from "./user";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getFeed } from "./getFeed";
import { socketMiddleware } from "../middleware/socketMiddleWare";
import { wssActions } from "../actions/wssActions";
import { wssReducer } from "./wssReducer";
import { modal } from "./modal";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "app", "getFeed", "wssReducer"],
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composeEnhancers =
// typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
// : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware("wss://norma.nomoreparties.space/orders", wssActions)
  )
);

const rootReducer = combineReducers({
  app: reducer,
  ingredients: getIngredientsReducer,
  getDetails,
  getOrderNumber,
  resetPassword,
  login,
  logout,
  user,
  getFeed,
  wssReducer,
  modal,
});

export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
