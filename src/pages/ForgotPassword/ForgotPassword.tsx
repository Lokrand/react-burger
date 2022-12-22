/* eslint-disable */
import React, { ChangeEvent, FC, FormEvent } from "react";
import { ModalRegister } from "../../components/ModalRegister/ModalRegister";
import styles from "./ForgotPassword.module.css";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Text } from "../../components/Text/Text";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { resetPassword } from "../../services/user/actions";
import { fetchPassword } from "../../services/forgotPassword/forgotPassword";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "../../hooks/useTypedDispatch";

export const ForgotPassword: FC = () => {
  const dispatch = useDispatch();
  const email = useTypedSelector((state) => state.user.email);
  const history = useHistory<{ from: string }>();
  const auth = useTypedSelector((state) => state.user.isAuthenticated);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetPassword(e.target.value));
  };

  const redirect = () => {
    history.push(`/reset-password`, { from: "forgot-password" });
  };

  const onSubmit= (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchPassword(email, redirect);
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
        <Button htmlType="submit" type="primary" size="large">
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
