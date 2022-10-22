/* eslint-disable */
import React, { useState } from "react";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import styles from "./ForgotPassword.module.css";
import ReactDom from "react-dom";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useHistory } from "react-router-dom";
import { fetchPasswordBase } from "../../services/asyncActions/forgotPassword";
import { Text } from "../Text/Text";

export const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("bob@example.com");
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const sendEmail = async () => {
    const result = await fetchPasswordBase(email);
    if (result.success) {
      history.push({ pathname: "/reset-password" });
    }
  };

  return ReactDom.createPortal(
    <ModalRegister>
      <Text size="medium" className="mb-6">
        Восстановление пароля
      </Text>
      <form className={styles.form}>
        <EmailInput onChange={onChange} value={email} name={"email"} />
      </form>
      <Button type="primary" size="large" onClick={sendEmail}>
        Восстановить
      </Button>
      <div className={styles.already_exist}>
        <Text inactive>Вспомнили пароль?</Text>
        <NavLink className={styles.login_link} to="/login">
          <Text className={styles.log_in}>Войти</Text>
        </NavLink>
      </div>
    </ModalRegister>,
    document.getElementById("modals")
  );
};
