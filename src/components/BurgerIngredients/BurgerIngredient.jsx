import React from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { typeBun } from "../../utils/constans";

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

  return (
    <div
      className={isDrag ? styles.isDragging : styles.item}
      onClick={onClick}
      ref={dragRef}
    >
      <img src={data.image} alt={data.name} className={styles.image} />
      <div className={styles.price}>
        <p className="text text_type_digits-default">{data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.title}>
        <p className="text text_type_main-default">{data.name}</p>
      </div>
      {counter !== 0 ? (
        <div className={styles.counter}>
          <Counter count={counter} size="default" />
        </div>
      ) : null}
    </div>
  );
};

BurgerIngredient.propTypes = {
  data: PropTypes.shape(ingredientType).isRequired,
  onClick: PropTypes.func.isRequired,
};
