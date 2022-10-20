import React, { useCallback } from "react";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import styles from "./ResetPassword.module.css";
import ReactDom from "react-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink, useHistory } from "react-router-dom";

export const ResetPassword = () => {
  const [value, setValue] = React.useState("bob@example.com");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const [values, setValues] = React.useState("value");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
  const history = useHistory();
  const toLogin = useCallback(() => {
    history.replace({ pathname: "/login" });
    window.location.reload();
  }, [history]);
  return ReactDom.createPortal(
    <ModalRegister>
      <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
      <form className={styles.form}>
        <PasswordInput onChange={onChange} value={value} name={"password"} />
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
          size={"default"}
        />
      </form>
      <Button type="primary" size="large">
        Сохранить
      </Button>
      <div className={styles.already_exist}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
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
