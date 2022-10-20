import React, { useState, useCallback } from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
import { NavLink, useHistory } from "react-router-dom";

export const AppHeader = () => {
  const [hover, setHover] = useState(true);
  const showHover = () => {
    setHover(false);
  };
  const hideHover = () => {
    setHover(true);
  };
  const history = useHistory();
  const toProfile = useCallback(() => {
    history.replace({ pathname: "/profile" });
    window.location.reload();
  }, [history]);
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.constructor}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default ml-2">Конструктор</p>
        </div>
        <div className={styles.order}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive ml-2 mr-30">
            Лента заказов
          </p>
        </div>
        <Logo />
        <div
          className={styles.account}
          onMouseEnter={showHover}
          onMouseLeave={hideHover}
          onClick={toProfile}
        >
          {hover ? (
            <>
              <ProfileIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive ml-2">
                Личный кабинет
              </p>
            </>
          ) : (
            <NavLink to="/profile" onClick={toProfile} className={styles.link}>
              <ProfileIcon type="primary" />
              <p className="text text_type_main-default text_color_active ml-2">
                Личный кабинет
              </p>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};
