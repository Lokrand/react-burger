import styles from "./ModalOverlay.module.css";
import React from "react";
export const ModalOverlay = ({ active, children, onClick }) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
