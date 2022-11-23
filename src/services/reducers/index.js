import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./BugrerReducer";
import { getIngredientsReducer } from "./getIngredients";
import { getDetails } from "./getDetails";
import { getOrderNumber } from "./getOrderNumber";
import { getPassword } from "./getPassword";
import { resetPassword } from "./resetPassword";
import { login } from "./login";
import { logout } from "./logout";
import { user } from "./user";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getFeedReducer } from "../reducers/feed";
import { getFeed } from "../reducers/getFeed";
import { socketMiddleware } from "../middleware/socketMiddleWare";
import { wsActions } from "../actions/feedActions";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "app", "getFeedReducer"],
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));
const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware('wss://norma.nomoreparties.space/orders', wsActions)));

const rootReducer = combineReducers({
  app: reducer,
  getIngredientsReducer,
  getDetails,
  getOrderNumber,
  getPassword,
  resetPassword,
  login,
  logout,
  user,
  getFeedReducer,
  getFeed,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
