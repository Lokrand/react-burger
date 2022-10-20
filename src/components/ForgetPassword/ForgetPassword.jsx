import React from "react";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import styles from "./ForgetPassword.module.css";
import ReactDom from "react-dom";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ForgetPassword = () => {
  const [value, setValue] = React.useState("bob@example.com");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return ReactDom.createPortal(
    <ModalRegister>
      <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
      <div className={styles.input}>
        <EmailInput onChange={onChange} value={value} name={"email"} />
      </div>
      <Button type="primary" size="large">
        Восстановить
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
