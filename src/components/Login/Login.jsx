import React, { useState } from "react";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.css";
import ReactDom from "react-dom";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import { NavLink } from "react-router-dom";
import { Text } from "../Text/Text";

export const Login = () => {
  const [value, setValue] = useState("password");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const [values, setValues] = useState("bob@example.com");
  const onChanges = (e) => {
    setValues(e.target.value);
  };

  return ReactDom.createPortal(
    <ModalRegister>
      <Text size="medium" className="mb-6">
        Вход
      </Text>
      <form className={`${styles.form} mb-6`}>
        <EmailInput onChange={onChanges} value={values} name={"email"} />
        <PasswordInput onChange={onChange} value={value} name={"password"} />
      </form>
      <Button type="primary" size="large">
        Войти
      </Button>
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
    </ModalRegister>,
    document.getElementById("modals")
  );
};
