import React, { useEffect, useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import styles from "./App.module.css";
import axios from "axios";
import { BurgersContext } from "../BurgersContext/BurgersContext";

function App() {
  const [componentModalActive, setComponentModalActive] = useState(false);

  const [appState, setAppState] = useState({
    loading: false,
    components: [],
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://norma.nomoreparties.space/api/ingredients";
    axios
      .get(apiUrl)
      .then((resp) => {
        const allComponents = resp.data.data;
        setAppState({
          loading: false,
          components: allComponents,
        });
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <BurgersContext.Provider value={appState}>
      <AppHeader />
      <main>
        <div className={styles.sections}>
          <div className="pl-4">
            <p className="text text_type_main-large mb-5">Соберите бургер</p>
            {appState.loading ? (
              <p>Loading</p>
            ) : (
              <BurgerIngredients
                modalActive={componentModalActive}
                setModalActive={setComponentModalActive}
              />
            )}
          </div>
          <div className="mt-15">
            {appState.loading ? (
              <p>Loading</p>
            ) : (
              <BurgerConstructor />
            )}
          </div>
        </div>
      </main>
    </BurgersContext.Provider>
  );
}

export default App;

