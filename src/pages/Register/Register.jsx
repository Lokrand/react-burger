import React, { useState } from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Register.module.css";
import { ModalRegister } from "../../components/ModalRegister/ModalRegister";
import ReactDom from "react-dom";
import { Text } from "../../components/Text/Text";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { registerNewUser } from "../../services/asyncActions/user";

export const Register = () => {
  const auth = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState({ email: "", password: "", user: "" });

  const onChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  if (auth) {
    return <Redirect to={history.location.state?.from || "/"} />;
  }

  const redirect = () => {
    window.history.pushState(null, null, `/`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerNewUser(value.email, value.password, value.user, redirect)
    );
  };

  return ReactDom.createPortal(
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
        <Button htmlttype="Button" type="primary" size="large">
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.already_exist}>
        <Text inactive>Уже зарегистрированы?</Text>
        <NavLink to="/login">
          <Text className={styles.log_in}>Войти</Text>
        </NavLink>
      </div>
    </ModalRegister>,
    document.getElementById("modals")
  );
};
