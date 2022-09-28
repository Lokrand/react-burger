import React, { useContext, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredient } from "./BurgerIngredient";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./BurgerIngredients.module.css";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { ingredientType } from "../../utils/types";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import { useDrag } from "react-dnd";

export const BurgerIngredients = ({ modalActive, setModalActive }) => {
  const [modalIngredient, setModalIngredient] = useState(null);
  const items = useSelector((state) => state.app.components);

  const [current, setCurrent] = useState("one");

  
  

  //   const [, dragRef] = useDrag({
  //     type: "animal",
  //     item: {id}
  // });

  return (
    <div>
      <div className={styles.menu}>
        <Tab
          value="one"
          active={current === "one"}
          onClick={() => {
            document.getElementById("buns").scrollIntoView();
            setCurrent("one");
          }}
        >
          Булки
        </Tab>
        <Tab
          value="two"
          active={current === "two"}
          onClick={() => {
            document.getElementById("souce").scrollIntoView();
            setCurrent("two");
          }}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={current === "three"}
          onClick={() => {
            document.getElementById("stuff").scrollIntoView();
            setCurrent("three");
          }}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.main}>
        <p className="text text_type_main-medium mb-6" id="buns">
          Булки
        </p>
        <div className={styles.items}>
          {items
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
        <p className="text text_type_main-medium mb-6 mt-15" id="souce">
          Соусы
        </p>
        <div className={styles.items}>
          {items
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
        <p className="text text_type_main-medium mb-6 mt-15" id="stuff">
          Начинки
        </p>
        <div className={styles.items}>
          {items
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

BurgerIngredients.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ingredientType)),
};
