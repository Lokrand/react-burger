import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";
import { BurgerIngredient } from "./BurgerIngredient";
export const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <>
      
      <div style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <p className="text text_type_main-medium mt-10 mb-6">Булки</p>
      <div style={{ display: "flex" }}>
        <BurgerIngredient {...data[0]} />
        <BurgerIngredient {...data[1]} />
      </div>
      <p className="text text_type_main-medium">Соусы</p>
      <div style={{ display: "grid" }}>
        <BurgerIngredient {...data[3]} />
        <BurgerIngredient {...data[5]} />
        <BurgerIngredient {...data[6]} />
        <BurgerIngredient {...data[9]} />
      </div>
    </>
  );
};
