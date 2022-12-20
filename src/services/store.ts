import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./burgerConstructor/reducer";
import { getIngredientsReducer } from "./ingredients/reducer";
import { getDetails } from "./details/reducer";
import { getOrderNumber } from "./orderNumber/reducer";
import { resetPassword } from "./resetPassword/actions";
import { logout } from "./logout/reducer";
import { user } from "./user/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getCurrentOrder } from "./currentOrder/reducer";
import { socketMiddleware } from "./middleware/socketMiddleWare";
import { wssActions } from "./wssServices/actions";
import { wssReducer } from "./wssServices/reducer";
import { modal } from "./modal/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "app", "getCurrentOrder", "wssReducer"],
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
  logout,
  user,
  getCurrentOrder,
  wssReducer,
  modal,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
