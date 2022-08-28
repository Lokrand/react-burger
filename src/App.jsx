import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { AppHeader } from "./components/AppHeader/AppHeader";
import "./App.css";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "./components/BurgerConstructor/BurgerConstructor";
import { data } from "./utils/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
function App() {
  return (
    <>
      <AppHeader />
      <p
        className="text text_type_main-large mb-5"
        style={{ marginLeft: "360px" }}
      >
        Соберите бургер
      </p>
      <div style={{ marginLeft: "360px", display: "flex" }}>
        <BurgerIngredients {...data} />
        <div>
          <BurgerConstructor {...data} />
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className="text text_type_digits-default">610</p>
              <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="medium" className="ml-10">
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
