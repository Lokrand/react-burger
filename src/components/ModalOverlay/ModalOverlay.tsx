import React, { FC } from "react";
import { IModal } from "../../services/types/data";
import styles from "./ModalOverlay.module.css";

export const ModalOverlay: FC<IModal> = ({ active, children, onClose }) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={onClose}
    >
      {children}
    </div>
  );
};
