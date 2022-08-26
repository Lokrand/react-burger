import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { AppHeader } from "./components/AppHeader/AppHeader";
import "./App.css";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients";

function App() {
  return (
    <>
      <AppHeader />
      <BurgerIngredients />
    </>
  );
}

export default App;
