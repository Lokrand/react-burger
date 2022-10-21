import styles from "./ModalRegister.module.css";
import React from "react";
export const ModalRegister = ({children}) => {
  return (
  <div className={styles.modal}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
  )
};
