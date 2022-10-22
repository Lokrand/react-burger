import React from "react";
import styles from "./Profile.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Text } from "../Text/Text";

export const Profile = ({ children }) => {
  const location = useLocation();

  return (
    <div className={styles.section}>
      <div className={styles.menu}>
        <NavLink
          to="/profile"
          className={
            location.pathname.endsWith("/profile")
              ? `${styles.link_active} text text_type_main-medium text_color_inactive mt-4 mb-4`
              : `${styles.link} text text_type_main-medium text_color_active mt-4 mb-4`
          }
        >
          Профиль
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={
            location.pathname.endsWith("/profile/orders")
              ? `${styles.link_active} text text_type_main-medium text_color_inactive mt-4 mb-4`
              : `${styles.link} text text_type_main-medium text_color_active mt-4 mb-4`
          }
        >
          История заказов
        </NavLink>
        <NavLink
          to="/profile/orders/:id"
          className={`${styles.link} text text_type_main-medium text_color_active mt-4 mb-4`}
        >
          Выход
        </NavLink>
        <Text className="mt-20" inactive>
          В этом разделе вы можете изменить&nbsp;свои персональные данные
        </Text>
      </div>
      <div>{children}</div>
    </div>
  );
};
