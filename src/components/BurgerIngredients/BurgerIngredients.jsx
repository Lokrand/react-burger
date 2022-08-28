import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredient } from "./BurgerIngredient";


export const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState("one");
  return (
    <>
      <div style={{ width: "600px", height: "872px"}}>
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
        <div style={{ display: "grid",gridTemplateColumns: "1fr 1fr", columnGap: "24px", padding: "0 32px" }}>
          <BurgerIngredient {...props[0]} />
          <BurgerIngredient {...props[1]} />
        </div>
        <p
          className="text text_type_main-medium"
          style={{ marginTop: "68px", marginBottom: "24px" }}
          >
          Соусы
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "24px",
            padding: "0 32px"
          }}
          >
          <BurgerIngredient {...props[3]} />
          <BurgerIngredient {...props[5]} />
          <BurgerIngredient {...props[6]} />
          <BurgerIngredient {...props[9]} />
        </div>
      </div>
    </>
  );
};

BurgerIngredients.propTypes = {

}