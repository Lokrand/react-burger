/* eslint-disable */
import React, { useState } from "react";
import { ModalRegister } from "../../components/ModalRegister/ModalRegister";
import styles from "./ForgotPassword.module.css";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Text } from "../../components/Text/Text";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { resetPassword } from "../../services/actions/userActions";
import { fetchPassword } from "../../services/asyncActions/forgotPassword";

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const history = useHistory();
  const auth = useSelector((state) => state.user.isAuthenticated);

  const onChange = (e) => {
    dispatch(resetPassword(e.target.value));
  };

  function redirect() {
    history.push(`/reset-password`, { from: "forgot-password" });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPassword(email, redirect));
  };

  if (auth) {
    return <Redirect to={history.location.state?.from || "/"} />;
  }

  return (
    <ModalRegister>
      <Text size="medium" className="mb-6">
        Восстановление пароля
      </Text>
      <form className={styles.form} onSubmit={onSubmit}>
        <EmailInput onChange={onChange} value={email} name={"email"} />
        <Button htmlType="button" type="primary" size="large" onClick={onSubmit}>
          Восстановить
        </Button>
      </form>
      <div className={styles.already_exist}>
        <Text inactive>Вспомнили пароль?</Text>
        <NavLink className={styles.login_link} to="/login">
          <Text className={styles.log_in}>Войти</Text>
        </NavLink>
      </div>
    </ModalRegister>
  );
};
