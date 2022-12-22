import React, { FC } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredients.module.css";
import { useDrag } from "react-dnd";
import { typeBun } from "../../utils/constans";
import { Text } from "../Text/Text";
import { Link, useLocation } from "react-router-dom";
import { setDetails } from "../../services/details/actions";
import { openModal } from "../../services/modal/actions";
import { IIngredientProps } from "./types";
import { useDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const BurgerIngredient: FC<IIngredientProps> = ({ data }) => {
  const dispatch = useDispatch();
  const id = data._id;
  const selectedItems = useTypedSelector((state) => state.app.selectedItems);
  const counter = selectedItems.filter((el) => el._id === id).length;
  const [{ isDrag }, dragRef] = useDrag({
    type: typeBun,
    item: { id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const location = useLocation();

  return (
    <Link
      to={{
        pathname: `/ingredients/${id}`,
        state: { background: location },
      }}
      className={isDrag ? styles.isDragging : styles.item}
      onClick={() => {
        dispatch(openModal("IngredientPopup"));
        dispatch(setDetails(data));
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
    </Link>
  );
};
