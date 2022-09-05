import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
export const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${styles.content} ${styles.active}` : styles.content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <p className="text text_type_digits-large">034536</p>
          <div className={styles.closeIcon} onClick={() => setActive(false)}>
            <CloseIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
