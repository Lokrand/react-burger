import React, { useCallback } from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Register.module.css";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import ReactDom from "react-dom";
import { Link, NavLink, useHistory } from "react-router-dom";

export const Register = () => {
  const [value, setValue] = React.useState("password");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const [values, setValues] = React.useState("value");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
  const [email, setEmail] = React.useState("bob@example.com");
  const onChangeEMail = (e) => {
    setEmail(e.target.value);
  };

  const history = useHistory();
  const toLogin = useCallback(() => {
    history.replace({ pathname: "/login" });
    window.location.reload();
  }, [history]);

  return ReactDom.createPortal(
    <ModalRegister>
      <p className="text text_type_main-medium mb-6">Регистрация</p>
      <form className={styles.form}>
        <Input
          type={"text"}
          placeholder={"placeholder"}
          onChange={(e) => setValues(e.target.value)}
          icon={"CurrencyIcon"}
          value={values}
          name={"name"}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
        />
        <EmailInput onChange={onChangeEMail} value={email} name={"email"} />
        <PasswordInput onChange={onChange} value={value} name={"password"} />
      </form>
      <Button type="primary" size="large">
        Зарегистрироваться
      </Button>
      <div className={styles.already_exist}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
        </p>
        <Link to="/login" onClick={toLogin}>
          <p className={`${styles.log_in} text text_type_main-default`}>
            Войти
          </p>
        </Link>
      </div>
    </ModalRegister>,
    document.getElementById("modals")
  );
};
