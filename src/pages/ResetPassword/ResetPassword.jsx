/* eslint-disable */
import React, { useCallback, useState, useEffect } from "react";
import { ModalRegister } from "../../components/ModalRegister/ModalRegister";
import styles from "./ResetPassword.module.css";
import ReactDom from "react-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Text } from "../../components/Text/Text";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { resetPassword } from "../../services/asyncActions/resetPassword";

export const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.user.isAuthenticated);

  const [value, setValue] = useState({ newPassword: "", code: "" });

  const onChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(value.newPassword, value.code));
    history.replace({ pathname: "/login" });
  };

  if (history.location.state?.from !== "forgot-password") {
    return <Redirect to="/forgot-password" />;
  }

  if (auth) {
    return <Redirect to={history.location.state?.from || "/"} />;
  }

  return (
    <ModalRegister>
      <Text size="medium" className="mb-6">
        Восстановление пароля
      </Text>
      <form className={styles.form} onSubmit={onSubmit}>
        <PasswordInput
          onChange={onChange}
          value={value.newPassword}
          placeholder={"Введите новый пароль"}
          name={"newPassword"}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={onChange}
          value={value.code}
          name={"code"}
        />
        <Button htmlType="button" type="primary" size="large" onClick={onSubmit}>
          Сохранить
        </Button>
      </form>
      <div className={styles.already_exist}>
        <Text inactive>Вспомнили пароль?</Text>
        <NavLink to="/login">
          <Text className={styles.log_in}>Войти</Text>
        </NavLink>
      </div>
    </ModalRegister>
  );
};
