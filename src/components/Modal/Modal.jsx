import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useEffect } from "react";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

export const Modal = ({ active, setActive, children }) => {
  const closePopup = useCallback(() => {
    setActive(false);
  }, [setActive]);

  const isOpen = active;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closePopup();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen, closePopup]);

  return (
    <ModalOverlay active={active} onClick={closePopup}>
      <div
        className={
          active ? `${styles.content} ${styles.active}` : styles.content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.closeIcon} onClick={closePopup}>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
    </ModalOverlay>
  );
};
