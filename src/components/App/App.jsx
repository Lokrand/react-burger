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

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.getIngredientsReducer.loading);
  const [componentModalActive, setComponentModalActive] = useState(false);
  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  return (
    <>
      <AppHeader />
      <main>
        <DndProvider backend={HTML5Backend}>
          <div className={styles.sections}>
            <div className="pl-4">
              <p className="text text_type_main-large mb-5">Соберите бургер</p>
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
      </main>
    </>
  );
}

export default App;
