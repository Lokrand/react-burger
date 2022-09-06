import React, { useEffect, useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { data } from "../../utils/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./App.module.css";
import { Modal } from "../Modal/Modal";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import axios from "axios";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [appState, setAppState] = useState({
    loading: false,
    components: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://norma.nomoreparties.space/api/ingredients";
    axios.get(apiUrl).then((resp) => {
      const allComponents = resp.data;
      setAppState({
        loading: false,
        components: allComponents,
      });
    });
  }, [setAppState]);

  return (
    <>
      <AppHeader />
      <main>
        <div className={styles.sections}>
          <div className="pl-4">
            <p className="text text_type_main-large mb-5">Соберите бургер</p>
            <BurgerIngredients data={data} />
          </div>
          <div className="mt-15">
            <BurgerConstructor data={data} />
            <div className={styles.block}>
              <div className={styles.total}>
                <p className="text text_type_digits-medium mr-2">610</p>
                <span className={styles.icon}>
                  <CurrencyIcon type="primary" />
                </span>
              </div>
              <Button
                type="primary"
                size="large"
                onClick={() => setModalActive(true)}
              >
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      </main>
      <OrderDetails active={modalActive} setActive={setModalActive} />
    </>
  );
}

export default App;
