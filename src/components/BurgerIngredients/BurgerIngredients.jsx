import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredient } from "./BurgerIngredient";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
export const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState("one");
  return (
    <>
      <div>
        <div style={{ display: "flex" }} className="mb-10">
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
        <div style={{ maxHeight: "716px", overflow: "auto" }} className="scrollBar">
          <p className="text text_type_main-medium mb-6">Булки</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              rowGap: "32px",
            }}
          >
            <div style={{ position: "relative" }}>
              <BurgerIngredient {...props[0]} />
              <div style={{ position: "absolute", top: "0", right: "0" }}>
                <Counter count={1} size="default" />
              </div>
            </div>
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
              rowGap: "32px",
            }}
          >
            <BurgerIngredient {...props[3]} />
            <BurgerIngredient {...props[5]} />
            <div style={{ position: "relative" }}>
              <BurgerIngredient {...props[6]} />
              <div style={{ position: "absolute", top: "0", right: "0" }}>
                <Counter count={1} size="default" />
              </div>
            </div>
            <BurgerIngredient {...props[9]} />
          </div>
          <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              rowGap: "32px",
            }}
          >
            <BurgerIngredient {...props[2]} />
            <BurgerIngredient {...props[4]} />
            <BurgerIngredient {...props[7]} />
            <BurgerIngredient {...props[8]} />
            <BurgerIngredient {...props[10]} />
            <BurgerIngredient {...props[11]} />
            <BurgerIngredient {...props[12]} />
            <BurgerIngredient {...props[13]} />
            <BurgerIngredient {...props[14]} />
          </div>
        </div>
      </div>
    </>
  );
};

BurgerIngredients.propTypes = {
   name: PropTypes.string,
   price: PropTypes.number,
   image: PropTypes.string,
};
