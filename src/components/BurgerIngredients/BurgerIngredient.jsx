import React from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredients.module.css";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { typeBun } from "../../utils/constans";
import { Text } from "../Text/Text";
import { NavLink, useLocation } from "react-router-dom";

export const BurgerIngredient = ({ data, onClick }) => {

  const id = data._id;
  const selectedItems = useSelector((state) => state.app.selectedItems);
  const counter = selectedItems.filter((el) => el._id === id).length;
  const [{ isDrag }, dragRef] = useDrag({
    type: typeBun,
    item: { id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const location = useLocation()
  // console.log(location)
  
  return (
    <NavLink
      to={{
        pathname: `/ingredients/${id}`,
        state: { background: location }
      }}
      className={isDrag ? styles.isDragging : styles.item}
      onClick={() => {
        // window.history.pushState(null, null, `/ingredients/${id}`);
        onClick();
      }}
      ref={dragRef}
    >
      <img src={data.image} alt={data.name} className={styles.image} />
      <div className={styles.price}>
        <Text type="digits">{data.price}</Text>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.title}>
        <Text>{data.name}</Text>
      </div>
      {counter !== 0 ? (
        <div className={styles.counter}>
          <Counter count={counter} size="default" />
        </div>
      ) : null}
    </NavLink>
  );
};
