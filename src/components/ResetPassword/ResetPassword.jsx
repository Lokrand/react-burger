/* eslint-disable */
import React, { useCallback, useState, useEffect } from "react";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import styles from "./ResetPassword.module.css";
import ReactDom from "react-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useHistory } from "react-router-dom";
import { resetPassword } from "../../services/asyncActions/resetPassword";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../Text/Text";

export const ResetPassword = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.resetPassword.loading);
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  const history = useHistory();
  const toLogin = useCallback(() => {
    history.replace({ pathname: "/login" });
    window.location.reload();
  }, [history]);

  const fetchResetPassword = () => {
    dispatch(resetPassword(password, token));
  };

  useEffect(() => {
    if (loading) {
      toLogin();
    }
  }, [loading]);

  return ReactDom.createPortal(
    <ModalRegister>
      <Text size="medium" className="mb-6">
        Восстановление пароля
      </Text>
      <form className={styles.form}>
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={"password"}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={(e) => setToken(e.target.value)}
          value={token}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        />
      </form>
      <Button type="primary" size="large" onClick={fetchResetPassword}>
        Сохранить
      </Button>
      <div className={styles.already_exist}>
        <Text inactive>Вспомнили пароль?</Text>
        <NavLink to="/login">
          <Text className={styles.log_in}>Войти</Text>
        </NavLink>
      </div>
    </ModalRegister>,
    document.getElementById("modals")
  );
};
