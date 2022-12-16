import React, { FC } from "react";
import styles from "./Profile.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Text } from "../../components/Text/Text";
import { useDispatch } from "react-redux";
import { logout } from "../../services/asyncActions/logout";
import { IModalRegister } from "../../services/types/data";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const Profile: FC<IModalRegister> = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useTypedSelector((state) => state.user.isAuthenticated);
  const logOut = () => {
    dispatch(logout());
    localStorage.removeItem("persist:root");
  };
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
          to={!auth ? { pathname: `/login` } : { pathname: `` }}
          className={`${styles.link} text text_type_main-medium text_color_active mt-4 mb-4`}
          exact={true}
          onClick={logOut}
        >
          Выход
        </NavLink>
        {location.pathname === "/profile" && (
          <Text className="mt-20" inactive>
            В этом разделе вы можете изменить&nbsp;свои персональные данные
          </Text>
        )}
        {location.pathname === "/profile/orders" && (
          <Text className="mt-20" inactive>
            В этом разделе вы можете просмотреть свою историю заказов
          </Text>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};
