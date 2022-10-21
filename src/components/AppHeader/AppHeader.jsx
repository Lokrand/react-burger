import React, { useState } from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
import { NavLink, useLocation } from "react-router-dom";

export const AppHeader = () => {
  const location = useLocation();
  const [hover, setHover] = useState(true);
  const [constructorIcon, setConstructorIcon] = useState(true);
  const [ordersIcon, setOrdersIcon] = useState(true);

  const showHover = () => {
    setHover(false);
  };
  const hideHover = () => {
    setHover(true);
  };
  const showConstIcon = () => {
    setConstructorIcon(false);
  };
  const hideConstIcon = () => {
    setConstructorIcon(true);
  };
  const showOrdersIcon = () => {
    setOrdersIcon(false);
  };
  const hideOrdersIcon = () => {
    setOrdersIcon(true);
  };

  return (
    <header>
      <div className={styles.header}>
        <NavLink
          to="/"
          className={
            location.pathname.endsWith("/")
              ? styles.constructor_active
              : styles.constructor_disabled
          }
          onMouseEnter={showConstIcon}
          onMouseLeave={hideConstIcon}
        >
          {constructorIcon ? (
            <BurgerIcon
              type={location.pathname.endsWith("/") ? "primary" : "secondary"}
            />
          ) : (
            <BurgerIcon type="primary" />
          )}
          <p className="text text_type_main-default text_color_active ml-2">
            Конструктор
          </p>
        </NavLink>
        <NavLink
          to="/orders"
          className={
            location.pathname.startsWith("/orders")
              ? styles.constructor_active
              : styles.constructor_disabled
          }
          onMouseEnter={showOrdersIcon}
          onMouseLeave={hideOrdersIcon}
        >
          {ordersIcon ? (
            <ListIcon
              type={
                location.pathname.startsWith("/orders")
                  ? "primary"
                  : "secondary"
              }
            />
          ) : (
            <ListIcon type="primary" />
          )}
          <p className="text text_type_main-default text_color_active ml-2 mr-30">
            Лента заказов
          </p>
        </NavLink>
        <Logo />
        <div className={styles.account}>
          <NavLink
            to="/profile"
            className={
              location.pathname.includes("/profile")
                ? styles.link_active
                : styles.link_disables
            }
            onMouseEnter={showHover}
            onMouseLeave={hideHover}
          >
            {hover ? (
              <ProfileIcon
                type={
                  location.pathname.includes("/profile")
                    ? "primary"
                    : "secondary"
                }
              />
            ) : (
              <ProfileIcon type="primary" />
            )}
            <p className="text text_type_main-default text_color_active ml-2">
              Личный кабинет
            </p>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
