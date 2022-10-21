import React, { useState } from "react";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.css";
import ReactDom from "react-dom";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import { Link } from "react-router-dom";

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
      <p className="text text_type_main-medium mb-6">Вход</p>
      <form className={`${styles.form} mb-6`}>
        <EmailInput onChange={onChanges} value={values} name={"email"} />
        <PasswordInput onChange={onChange} value={value} name={"password"} />
      </form>
      <Button type="primary" size="large">
        Войти
      </Button>
      <div className={styles.new_person}>
        <p className="text text_type_main-default text_color_inactive">
          Вы - новый пользователь?
        </p>
        <Link to={{ pathname: "/register" }}>
          <p className={`${styles.register} text text_type_main-default`}>
            Зарегистрироваться
          </p>
        </Link>
      </div>
      <div className={styles.forget_password}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>
        <Link to="/forgot-password">
          <p className={`${styles.register} text text_type_main-default`}>
            Восстановить пароль
          </p>
        </Link>
      </div>
    </ModalRegister>,
    document.getElementById("modals")
  );
};
