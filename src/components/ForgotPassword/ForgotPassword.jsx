import React, { useCallback } from "react";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import styles from "./ForgotPassword.module.css";
import ReactDom from "react-dom";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink, useHistory } from "react-router-dom";
// import { access } from "fs";

export const ForgotPassword = () => {
  const history = useHistory();
  const login = useCallback(() => {
    history.replace({ pathname: "/login" });
    window.location.reload();
  }, [history]);
  const toResetPassword = useCallback(() => {
    history.replace({pathname: "/reset-password"})
    window.location.reload();
  }, [history])
  const [value, setValue] = React.useState("bob@example.com");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return ReactDom.createPortal(
    <ModalRegister>
      <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
      <form className={styles.form}>
        <EmailInput onChange={onChange} value={value} name={"email"} />
      </form>
      <Button type="primary" size="large" onClick={toResetPassword}>
        Восстановить
      </Button>
      <div className={styles.already_exist}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <NavLink to="/login" onClick={login}>
          <p className={`${styles.log_in} text text_type_main-default`}>
            Войти
          </p>
        </NavLink>
      </div>
    </ModalRegister>,
    document.getElementById("modals")
  );
};
