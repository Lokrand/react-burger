import React from "react";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import styles from "./ResetPassword.module.css";
import ReactDom from "react-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

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
  return ReactDom.createPortal(
    <ModalRegister>
      <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
      <div className={styles.inputs}>
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
      </div>
      <Button type="primary" size="large">
        Сохранить
      </Button>
      <div className={styles.already_exist}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <p className={`${styles.log_in} text text_type_main-default`}>Войти</p>
      </div>
    </ModalRegister>,
    document.getElementById("modals")
  );
};
