import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon, BurgerIcon, ProfileIcon } from "../../icons";
import styles from "./AppHeader.module.css";
import { NavLink } from "react-router-dom";
import { Text } from "../Text/Text";

export const AppHeader = () => {
  return (
    <header>
      <div className={styles.header}>
        <NavLink
          exact
          to="/"
          className={styles.link_disables}
          activeClassName={styles.link_active}
        >
          <BurgerIcon />
          <Text className="ml-2">Конструктор</Text>
        </NavLink>
        <NavLink
          exact
          to="/feed"
          className={`${styles.link_disables} mr-30`}
          activeClassName={styles.link_active}
        >
          <ListIcon />
          <Text className="ml-2">Лента заказов</Text>
        </NavLink>
        <NavLink to='/' className={styles.logo}>
          <Logo />
        </NavLink>
        <div className={styles.account}>
          <NavLink
            exact
            to="/profile"
            className={styles.link_disables}
            activeClassName={styles.link_active}
          >
            <ProfileIcon />
            <Text className="ml-2">Личный кабинет</Text>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
