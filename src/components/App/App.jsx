import React, { useEffect, useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import styles from "./App.module.css";
import { BurgersContext } from "../../services/BurgersContext/BurgersContext";
import { getIngredients } from "../../utils/api.js";

function App() {
  const [componentModalActive, setComponentModalActive] = useState(false);
  const [appState, setAppState] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getIngredients().then((res) => {
      setAppState(res.data);
      setloading(false);
    });
  }, []);

  return (
    <BurgersContext.Provider value={appState}>
      <AppHeader />
      <main>
        <div className={styles.sections}>
          <div className="pl-4">
            <p className="text text_type_main-large mb-5">Соберите бургер</p>
            {loading ? (
              <p>Loading</p>
            ) : (
              <BurgerIngredients
                modalActive={componentModalActive}
                setModalActive={setComponentModalActive}
              />
            )}
          </div>
          <div className="mt-15">
            {loading ? <p>Loading</p> : <BurgerConstructor />}
          </div>
        </div>
      </main>
    </BurgersContext.Provider>
  );
}

export default App;
