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
import { ForgetPassword } from "../ForgetPassword/ForgetPassword";
import { ResetPassword } from "../ResetPassword/ResetPassword";
import { Profile } from "../Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.getIngredientsReducer.loading);
  const [componentModalActive, setComponentModalActive] = useState(false);
  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  const login = false;

  return (
    <>
      <AppHeader />
      <main>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/forgot-password">
              <ForgetPassword />
            </Route>
            <Route path="/reset-password">
              <ResetPassword />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
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
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
