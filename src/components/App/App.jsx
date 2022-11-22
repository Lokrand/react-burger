/* eslint-disable */
import React, { useEffect, useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../services/asyncActions/ingredients.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Login } from "../../pages/Login/Login";
import { Register } from "../../pages/Register/Register";
import { ForgotPassword } from "../../pages/ForgotPassword/ForgotPassword";
import { ResetPassword } from "../../pages/ResetPassword/ResetPassword";
import { BrowserRouter as Switch, Route, useHistory } from "react-router-dom";
import { ProfileRegister } from "../../pages/ProfileRegister/ProfileRegister";
import { ProfileOrders } from "../../pages/ProfileOrders/ProfileOrders";
import { Text } from "../Text/Text";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import Ingredients from "../../pages/Ingredients/Ingredients";
import { Feed } from "../Feed/Feed";
import { fetchFeed } from "../../services/asyncActions/feed";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.getIngredientsReducer.loading);
  const [componentModalActive, setComponentModalActive] = useState(false);
  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchFeed())

  }, []);

  return (
    <>
      <Switch>
        <AppHeader />
        <main>
          <Route exact path="/">
            <DndProvider backend={HTML5Backend}>
              <div className={styles.sections}>
                <div className="pl-4">
                  <Text size="large" className="mb-5">
                    Соберите бургер
                  </Text>
                  {loading ? (
                    <Text size="medium">Loading...</Text>
                  ) : (
                    <BurgerIngredients
                      modalActive={componentModalActive}
                      setModalActive={setComponentModalActive}
                    />
                  )}
                </div>
                <div className="mt-15">
                  {loading ? (
                    <Text size="medium">Loading...</Text>
                  ) : (
                    <BurgerConstructor />
                  )}
                </div>
              </div>
            </DndProvider>
          </Route>
          <Route path="/login" children={<Login />} />
          <Route path="/register" children={<Register />} />
          <Route path="/forgot-password" children={<ForgotPassword />} />
          <Route path="/reset-password" children={<ResetPassword />} />
          <Route path="/profile/orders" children={<ProfileOrders />} />
          <Route
            path="/feed"
            children={
              <Feed
                modalActive={componentModalActive}
                setModalActive={setComponentModalActive}
              />
            }
          />
          <ProtectedRoute
            path="/profile"
            children={<ProfileRegister />}
            exact={true}
          />
          <ProtectedRoute
            path="/profile/orders/:id"
            children={<ProfileOrders />}
            exact={true}
          />
          <Route path="/ingredients/:id">
            <Ingredients />
          </Route>
        </main>
      </Switch>
    </>
  );
}

export default App;
