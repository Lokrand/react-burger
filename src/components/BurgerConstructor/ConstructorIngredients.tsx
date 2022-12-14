import React, { FC } from "react";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import { Text } from "../Text/Text";
import { Reorder } from "framer-motion";
import { IConstructorIngredient } from "../../services/types/data";

export const ConstructorIngredients: FC<IConstructorIngredient> = (props) => {
  return (
    <Reorder.Item
      value={props.el}
      id={props.el._id}
      whileDrag={{
        filter: "invert(1)",
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
            <Text className="mr-5">{props.text}</Text>
            <div className={styles.price}>
              <Text type="digits">{props.price}</Text>
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
