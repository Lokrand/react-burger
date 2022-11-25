import React, { useRef, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredient } from "./BurgerIngredient";
import styles from "./BurgerIngredients.module.css";
import { useSelector } from "react-redux";
import { typeBun } from "../../utils/constans";
import { Text } from "../Text/Text";

export const BurgerIngredients = ({ setModal }) => {
  const items = useSelector((state) => state.getIngredientsReducer.components);
  const [current, setCurrent] = useState("one");
  const bunRef = useRef(null);
  const souceRef = useRef(null);

  const scrollBar = () => {
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
  };

  const scrollView = (type) => {
    const mainRoot = document.getElementById(type);
    mainRoot.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={styles.menu}>
        <Tab
          value="one"
          active={current === "one"}
          onClick={() => {
            scrollView("buns");
            setCurrent("one");
          }}
        >
          Булки
        </Tab>
        <Tab
          value="two"
          active={current === "two"}
          onClick={() => {
            scrollView("souce");
            setCurrent("two");
          }}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={current === "three"}
          onClick={() => {
            scrollView("stuff");
            setCurrent("three");
          }}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.main} id="main" onScroll={scrollBar}>
        <div ref={bunRef}>
          <Text size="medium" className="mb-6" id="buns">
            Булки
          </Text>
          <div className={styles.items}>
            {items
              .filter((item) => item.type === typeBun)
              .map((el) => (
                <BurgerIngredient
                  data={el}
                  key={el._id}
                  setModal={setModal}
                />
              ))}
          </div>
        </div>
        <div ref={souceRef}>
          <Text size="medium" className="mb-6 mt-15" id="souce">
            Соусы
          </Text>
          <div className={styles.items}>
            {items
              .filter((item) => item.type === "sauce")
              .map((el) => (
                <BurgerIngredient
                  data={el}
                  key={el._id}
                  setModal={setModal}
                />
              ))}
          </div>
        </div>
        <Text size="medium" className="mb-6 mt-15" id="stuff">
          Начинки
        </Text>
        <div className={styles.items}>
          {items
            .filter((item) => item.type === "main")
            .map((el) => (
              <BurgerIngredient
                data={el}
                key={el._id}
                setModal={setModal}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
