import React, { FC } from "react";
import { IModalProps } from "../Modal/Modal";
import styles from "./ModalOverlay.module.css";

export const ModalOverlay: FC<IModalProps> = ({ active, children, onClose }) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={onClose}
    >
      {children}
    </div>
  );
};
