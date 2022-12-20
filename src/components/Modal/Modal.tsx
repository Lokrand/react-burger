import React, { FC } from "react";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useEffect } from "react";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../services/modal/actions";
import { IEventKey } from "../../services/types/data";

export interface IModalProps {
  active: boolean;
  children: JSX.Element | JSX.Element[];
  onClose?: () => void;
}

export const Modal: FC<IModalProps> = ({ active, children, onClose }) => {
  const dispatch = useDispatch();
  const closePopup = useCallback(() => {
    dispatch(openModal(""));
    onClose?.();
  }, [onClose]);

  const isOpen = active;

  useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
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

  return ReactDom.createPortal(
    <ModalOverlay active={active} onClose={closePopup}>
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
    </ModalOverlay>,
    document.getElementById("modals")!
  );
};
