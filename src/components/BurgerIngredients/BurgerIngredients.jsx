import React, { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredient } from "./BurgerIngredient";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./BurgerIngredients.module.css";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";

export const BurgerIngredients = ({ data, modalActive, setModalActive }) => {
  const [modalIngredient, setModalIngredient] = useState(null);

  const [current, setCurrent] = useState("one");
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
          {data
            .filter((item) => item.type === "bun")
            .map((el) => (
              <BurgerIngredient
                data={el}
                key={el._id}
                onClick={() => {
                  setModalActive(true);
                  setModalIngredient(el);
                }}
              />
            ))}
          {/* <div className={styles.block}>
            <BurgerIngredient data={data[0]} active={modalActive} setActive={setModalActive} />
            <div className={styles.counter}>
            <Counter count={1} size="default" />
            </div>
          </div> */}
        </div>
        <p className="text text_type_main-medium mb-6 mt-15">Соусы</p>
        <div className={styles.items}>
          {data
            .filter((item) => item.type === "sauce")
            .map((el) => (
              <BurgerIngredient
                data={el}
                key={el._id}
                onClick={() => {
                  setModalActive(true);
                  setModalIngredient(el);
                }}
              />
            ))}
        </div>
        <p className="text text_type_main-medium mb-6 mt-15">Начинки</p>
        <div className={styles.items}>
          {data
            .filter((item) => item.type === "main")
            .map((el) => (
              <BurgerIngredient
                data={el}
                key={el._id}
                onClick={() => {
                  setModalActive(true);
                  setModalIngredient(el);
                }}
              />
            ))}
        </div>
      </div>
      {modalIngredient && (
        <IngredientDetails
          data={modalIngredient}
          active={modalActive}
          setActive={setModalActive}
        />
      )}
    </div>
  );
};

const dataPropTypes = {
  _id: PropTypes.string.isRequired,
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(dataPropTypes)).isRequired,
};
