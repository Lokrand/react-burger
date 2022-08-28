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
      <div style={{ display: "flex", columnGap: "40px", justifyContent: "center" }}>
        <BurgerIngredients {...data} />
        <div>
          <BurgerConstructor {...data} />
          <div style={{ display: "flex", justifyContent: "flex-end"  }} className="mt-5">
            <div style={{ display: "flex", alignItems: "center", marginRight: "40px"}}>
              <p className="text text_type_digits-default mr-2" >610</p>
              <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="medium">
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
