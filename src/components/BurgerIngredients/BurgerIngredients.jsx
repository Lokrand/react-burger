import React, { useRef, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredient } from "./BurgerIngredient";
import PropTypes from "prop-types";
import styles from "./BurgerIngredients.module.css";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { ingredientType } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { GET_DETAILS } from "../../services/actions/actions";
import { typeBun } from "../../utils/constans";

export const BurgerIngredients = ({ modalActive, setModalActive }) => {
  const [modalIngredient, setModalIngredient] = useState(null);
  const items = useSelector((state) => state.getIngredientsReducer.components);
  const [current, setCurrent] = useState("one");
  const bunRef = useRef(null);
  const souceRef = useRef(null);
  const detailsDispatch = useDispatch();

  const getIngredientDetails = (el) => {
    setModalIngredient(true);
    detailsDispatch({
      type: GET_DETAILS,
      payload: el,
    });
  };
  function scrollBar() {
    const bunsBlockHeight = bunRef.current.offsetHeight;
    const souceBlockHeight = souceRef.current.offsetHeight;

    let scrollPosition = document.querySelector("#main").scrollTop;
    if (scrollPosition > 0 && scrollPosition < bunsBlockHeight / 2) {
      setCurrent("one");
    } else if (
      scrollPosition > bunsBlockHeight / 2 &&
      scrollPosition < bunsBlockHeight + souceBlockHeight / 2
    ) {
      setCurrent("two");
    } else if (scrollPosition > bunsBlockHeight + souceBlockHeight / 2) {
      setCurrent("three");
    }
  }

  return (
    <div>
      <div className={styles.menu}>
        <Tab
          value="one"
          active={current === "one"}
          onClick={() => {
            document.getElementById("buns").scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCurrent("one");
          }}
        >
          Булки
        </Tab>
        <Tab
          value="two"
          active={current === "two"}
          onClick={() => {
            document.getElementById("souce").scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCurrent("two");
          }}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={current === "three"}
          onClick={() => {
            document.getElementById("stuff").scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCurrent("three");
          }}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.main} id="main" onScroll={scrollBar}>
        <div ref={bunRef}>
          <p className="text text_type_main-medium mb-6" id="buns">
            Булки
          </p>
          <div className={styles.items}>
            {items
              .filter((item) => item.type === typeBun)
              .map((el) => (
                <BurgerIngredient
                  data={el}
                  key={el._id}
                  onClick={() => {
                    setModalActive(true);
                    getIngredientDetails(el);
                  }}
                />
              ))}
          </div>
        </div>
        <div ref={souceRef}>
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
                    getIngredientDetails(el);
                  }}
                />
              ))}
          </div>
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
                  getIngredientDetails(el);
                }}
              />
            ))}
        </div>
      </div>
      {modalIngredient && (
        <IngredientDetails active={modalActive} setActive={setModalActive} />
      )}
    </div>
  );
};

BurgerIngredients.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ingredientType)),
};
