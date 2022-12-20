/* eslint-disable */
import React, { useState, FC, ChangeEvent, FormEvent } from "react";
import { ModalRegister } from "../../components/ModalRegister/ModalRegister";
import styles from "./ResetPassword.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Text } from "../../components/Text/Text";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { resetPassword } from "../../services/resetPassword/actions";
import { dispatchStore } from "../../hooks/useTypedDispatch";

export const ResetPassword: FC = () => {
  const history = useHistory<{ from: string }>();
  const auth = useTypedSelector((state) => state.user.isAuthenticated);

  const [value, setValue] = useState({ newPassword: "", code: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchStore(resetPassword(value.newPassword, value.code) as any);
    history.replace({ pathname: "/login" });
  };

  if (history.location.state?.from !== "forgot-password") {
    return <Redirect to="/forgot-password" />;
  }

  if (auth) {
    return <Redirect to={history.location.state?.from || "/react-burger"} />;
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
        <Button htmlType="submit" type="primary" size="large">
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
