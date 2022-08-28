import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { AppHeader } from "./components/AppHeader/AppHeader";
import "./App.css";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "./components/BurgerConstructor/BurgerConstructor";

function App() {
  return (
    <>
      <AppHeader />
      <p className="text text_type_main-large mb-5">Соберите бургер</p>
      <div>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </>
  );
}

export default App;
