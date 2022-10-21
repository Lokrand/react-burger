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
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword";
import { ResetPassword } from "../ResetPassword/ResetPassword";
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";
import { registerPerson } from "../../services/asyncActions/registerPerson";
import { person } from "../../utils/constans";
import { ProfileRegister } from "../ProfileRegister/ProfileRegister";
import { ProfileOrders } from "../ProfileOrders/ProfileOrders";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.getIngredientsReducer.loading);
  // const user = useSelector((state) => state.registerPerson.user);
  // console.log('new user', user)
  const [componentModalActive, setComponentModalActive] = useState(false);
  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(registerPerson(person));
  }, []);
  let location = useLocation();
  useEffect(() => {
    console.log("location", location);
  }, [location.pathname]);
  return (
    <>
      <Switch>
        <AppHeader />
        <main>
          <Route exact path="/">
            <DndProvider backend={HTML5Backend}>
              <div className={styles.sections}>
                <div className="pl-4">
                  <p className="text text_type_main-large mb-5">
                    Соберите бургер
                  </p>
                  {loading ? (
                    <p className="text text_type_main-medium">Loading...</p>
                  ) : (
                    <BurgerIngredients
                      modalActive={componentModalActive}
                      setModalActive={setComponentModalActive}
                    />
                  )}
                </div>
                <div className="mt-15">
                  {loading ? (
                    <p className="text text_type_main-medium">Loading...</p>
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
          <Route exact path="/profile" children={<ProfileRegister />} />
          <Route path="/profile/orders" children={<ProfileOrders />} />
        </main>
      </Switch>
    </>
  );
}

export default App;
