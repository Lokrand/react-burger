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
        <p className="text text_type_digits-large mt-25 mb-8">034536</p>
        <div className={styles.closeIcon} onClick={() => setActive(false)}>
          <CloseIcon type="primary" />
        </div>
        <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
        <img src={icon} alt="" />
        <p className="text text_type_main-default mt-15 mb-2">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive mb-20">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  );
};
