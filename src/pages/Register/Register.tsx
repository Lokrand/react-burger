import React, { useState, FC, ChangeEvent, FormEventHandler } from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Register.module.css";
import { ModalRegister } from "../../components/ModalRegister/ModalRegister";
import { Text } from "../../components/Text/Text";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { registerNewUser } from "../../services/user/actions";
import { useDispatch } from "../../hooks/useTypedDispatch";

export const Register: FC = () => {
  const dispatch = useDispatch();
  const auth = useTypedSelector((state) => state.user.isAuthenticated);
  const history = useHistory<{ from: string }>();
  const [value, setValue] = useState({ email: "", password: "", user: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  if (auth) {
    return <Redirect to={history.location.state?.from || "/"} />;
  }

  const redirect = () => {
    window.history.pushState(null, "", `/react-burger`);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
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
