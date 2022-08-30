import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredient } from "./BurgerIngredient";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./BurgerIngredients.module.css";
export const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div>
      <div className={styles.menu}>
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
      <div className={styles.main}>
        <p className="text text_type_main-medium mb-6">Булки</p>
        <div className={styles.items}>
          <div className={styles.block}>
            <BurgerIngredient {...props[0]} />
            <div className={styles.counter}>
              <Counter count={1} size="default" />
            </div>
          </div>
          <BurgerIngredient {...props[1]} />
        </div>
        <p className="text text_type_main-medium mb-6 mt-15">Соусы</p>
        <div className={styles.items}>
          <BurgerIngredient {...props[3]} />
          <BurgerIngredient {...props[5]} />
          <div className={styles.block}>
            <BurgerIngredient {...props[6]} />
            <div className={styles.counter}>
              <Counter count={1} size="default" />
            </div>
          </div>
          <BurgerIngredient {...props[9]} />
        </div>
        <p className="text text_type_main-medium mb-6 mt-15">Начинки</p>
        <div className={styles.items}>
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
  );
};

BurgerIngredients.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};
