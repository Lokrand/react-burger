import React, { FC, useRef, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredient } from "./BurgerIngredient";
import styles from "./BurgerIngredients.module.css";
import { typeBun } from "../../utils/constans";
import { Text } from "../Text/Text";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IIngredient } from "../../services/types/data";

export const BurgerIngredients: FC = () => {
  const items = useTypedSelector((state) => state.ingredients.components);
  const [current, setCurrent] = useState<string>("one");
  const bunRef: any = useRef<HTMLDivElement | null>(null);
  const souceRef: any = useRef<HTMLDivElement | null>(null);

  const scrollBar = () => {
    const bunsBlockHeight = bunRef.current.offsetHeight;
    const souceBlockHeight = souceRef.current.offsetHeight;

    let scrollElement = document.querySelector("#main");
    let scrollPosition: number | undefined = scrollElement?.scrollTop;
    if (scrollPosition !== undefined) {
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
  };

  const scrollView = (type: string) => {
    const mainRoot: any = document.getElementById(type);
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
              .filter((item: IIngredient) => item.type === typeBun)
              .map((el: IIngredient) => (
                <BurgerIngredient data={el} key={el._id} />
              ))}
          </div>
        </div>
        <div ref={souceRef}>
          <Text size="medium" className="mb-6 mt-15" id="souce">
            Соусы
          </Text>
          <div className={styles.items}>
            {items
              .filter((item: IIngredient) => item.type === "sauce")
              .map((el: IIngredient) => (
                <BurgerIngredient data={el} key={el._id} />
              ))}
          </div>
        </div>
        <Text size="medium" className="mb-6 mt-15" id="stuff">
          Начинки
        </Text>
        <div className={styles.items}>
          {items
            .filter((item: IIngredient) => item.type === "main")
            .map((el: IIngredient) => (
              <BurgerIngredient data={el} key={el._id} />
            ))}
        </div>
      </div>
    </div>
  );
};
