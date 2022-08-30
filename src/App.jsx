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
      <body>
        <header>
          <AppHeader />
        </header>
        <main>
          <div
            style={{
              display: "flex",
              columnGap: "44px",
              justifyContent: "center",
            }}
            className="mt-10"
          >
            <div className="pl-4">
              <p className="text text_type_main-large mb-5">Соберите бургер</p>
              <BurgerIngredients {...data} />
            </div>
            <div className="mt-15">
              <BurgerConstructor {...data} />
              <div
                style={{ display: "flex", justifyContent: "flex-end" }}
                className="mt-10"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "40px",
                  }}
                >
                  <p className="text text_type_digits-medium mr-2">610</p>
                  <span style={{transform: "scale(1.35)", marginTop: "5px"}}><CurrencyIcon type="primary"/></span>
                </div>
                <Button type="primary" size="large">
                  Оформить заказ
                </Button>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
