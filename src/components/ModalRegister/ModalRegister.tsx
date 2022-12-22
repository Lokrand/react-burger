import React, { FC } from "react";
import styles from "./ModalRegister.module.css";

export const ModalRegister: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
