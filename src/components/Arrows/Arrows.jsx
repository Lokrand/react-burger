import React from "react";
import { Text } from "../Text/Text";
import styles from "./Arrows.module.css";

export const Arrows = () => {
  return (
    <div className={styles.container}>
      <Text size="medium" className={styles.text}>
        Перенесите сюда ингредиенты
      </Text>
      <div className={styles.arrow_7}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
