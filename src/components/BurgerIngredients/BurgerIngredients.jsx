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
            <BurgerIngredient {...props.data[0]} />
            <div className={styles.counter}>
              <Counter count={1} size="default" />
            </div>
          </div>
          <BurgerIngredient {...props.data[1]} />
        </div>
        <p className="text text_type_main-medium mb-6 mt-15">Соусы</p>
        <div className={styles.items}>
          <BurgerIngredient {...props.data[2]} />
          <BurgerIngredient {...props.data[3]} />
          <div className={styles.block}>
            <BurgerIngredient {...props.data[4]} />
            <div className={styles.counter}>
              <Counter count={1} size="default" />
            </div>
          </div>
          <BurgerIngredient {...props.data[5]} />
        </div>
        <p className="text text_type_main-medium mb-6 mt-15">Начинки</p>
        <div className={styles.items}>
          {props.data.slice(6).map((element) => {
            return <BurgerIngredient {...element} key={element._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired,
};
