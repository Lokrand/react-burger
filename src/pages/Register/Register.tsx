import React, { useState, FC } from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Register.module.css";
import { ModalRegister } from "../../components/ModalRegister/ModalRegister";
import { Text } from "../../components/Text/Text";
import { useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { registerNewUser } from "../../services/forgotPassword/user";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const Register: FC = () => {
  const auth = useTypedSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory<{ from: string }>();
  const [value, setValue] = useState({ email: "", password: "", user: "" });

  const onChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  if (auth) {
    return <Redirect to={history.location.state?.from || "/react-burger"} />;
  }

  const redirect = () => {
    window.history.pushState(null, "", `/react-burger`);
  };

  const onSubmit = (e:Event) => {
    e.preventDefault();
    dispatch(
      registerNewUser(value.email, value.password, value.user, redirect)
    );
  };

  return (
    <ModalRegister>
      <Text size="medium" className="mb-6">
        Регистрация
      </Text>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChange}
          value={value.user}
          name={"user"}
        />
        <EmailInput value={value.email} name={"email"} onChange={onChange} />
        <PasswordInput
          value={value.password}
          name={"password"}
          onChange={onChange}
        />
        <Button htmlType="submit" type="primary" size="large">
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.already_exist}>
        <Text inactive>Уже зарегистрированы?</Text>
        <NavLink to="/login">
          <Text className={styles.log_in}>Войти</Text>
        </NavLink>
      </div>
    </ModalRegister>
  );
};
