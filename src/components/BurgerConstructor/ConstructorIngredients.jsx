import React, { useState } from "react";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import styles from "./BurgerConstructor.module.css";
import { mergeRefs } from "react-merge-refs";
import { useSelector } from "react-redux";
import { Reorder } from "framer-motion";

export const ConstructorIngredients = (props) => {
  // const [card, setCard] = useState(null)
  // const id = props.id;
  // const selectedItems = useSelector((state) => state.app.selectedItems);
  // const [{ isDrag }, dragRef] = useDrag({
  //   type: "bun",
  //   item: { id },
  //   collect: (monitor) => ({
  //     isDrag: monitor.isDragging(),
  //   }),
  // });

  return (
    <Reorder.Item
      value={props.el}
      whileDrag={{
        scale: 1.03,
        transition: "scale .2s linear",
      }}
    >
      <div className={styles.item}>
        <DragIcon type="primary" />
        <div className={styles.constructor_element}>
          <img
            className={styles.constructor_image}
            src={props.thumbnail}
            alt={props.text}
          />
          <div className={styles.description}>
            <p className="text text_type_main-default mr-5">{props.text}</p>
            <div className={styles.price}>
              <p className="text text_type_digits-default">{props.price}</p>
              <div className={styles.icons}>
                <CurrencyIcon type="primary" />
                <div
                  className={styles.delete_icon}
                  onClick={() => {
                    props.remove(props.id);
                  }}
                >
                  <DeleteIcon type="primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reorder.Item>
  );
};
