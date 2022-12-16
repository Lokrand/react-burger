import React, { FC } from "react";
import { IModalRegister } from "../../services/types/data";
import styles from "./ModalRegister.module.css";

export const ModalRegister: FC<IModalRegister> = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
