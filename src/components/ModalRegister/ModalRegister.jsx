import React from "react";
import styles from "./ModalRegister.module.css";

export const ModalRegister = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
