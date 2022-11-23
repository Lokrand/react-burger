import React, { useState, useCallback } from "react";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.css";
import { ModalRegister } from "../../components/ModalRegister/ModalRegister";
import { Text } from "../../components/Text/Text";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { login } from "../../services/asyncActions/login";

export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.isAuthenticated);
  const [value, setValue] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const toLogin = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(login(value.email, value.password));
    },
    [value]
  );

  if (auth) {
    return <Redirect to={history.location.state?.from || "/"} />;
  }

  return (
      <ModalRegister>
        <Text size="medium" className="mb-6">
          Вход
        </Text>
        <form className={`${styles.form} mb-6`} onSubmit={toLogin}>
          <EmailInput onChange={onChange} value={value.email} name={"email"} />
          <PasswordInput
            onChange={onChange}
            value={value.password}
            name={"password"}
          />
          <Button htmlType="submit" type="primary" size="large">
            Войти
          </Button>
        </form>
        <div className={styles.new_person}>
          <Text inactive>Вы - новый пользователь?</Text>
          <NavLink to="/register" className={styles.register}>
            <Text>Зарегистрироваться</Text>
          </NavLink>
        </div>
        <div className={styles.forget_password}>
          <Text inactive>Забыли пароль?</Text>
          <NavLink to="/forgot-password" className={styles.register}>
            <Text>Восстановить пароль</Text>
          </NavLink>
        </div>
      </ModalRegister>
  );
};
