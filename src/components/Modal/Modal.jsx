import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import icon from "../../images/done.png";
import { useCallback } from "react";

export const Modal = ({ active, setActive, children }) => {
  const closePopup = useCallback((event) => {
    if (event.key === "Escape") {
      setActive(false)
    }
  }, [])

  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)} onKeyDown={closePopup}
    >
      <div
        className={
          active ? `${styles.content} ${styles.active}` : styles.content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.closeIcon} onClick={() => setActive(false)}>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
    </div>
  );
};
