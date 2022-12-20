import React, { useState, useEffect, useRef, FC, ChangeEvent } from "react";
import { Profile } from "../Profile/Profile";
import styles from "./ProfileRegister.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { isTokenExpired } from "../../utils/token";
import { getCookie } from "../../utils/cookie";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { refreshToken } from "../../services/refreshToken/actions";
import { dispatchStore } from "../../hooks/useTypedDispatch";
import { getUser, userDetails } from "../../services/user/actions";

export const ProfileRegister: FC = () => {
  const user = useTypedSelector((state) => state.user);

  const password = user.password;
  const token = getCookie("token");

  const checkToken = () => {
    if (token === undefined) {
      dispatchStore(refreshToken() as any);
    }
    if (token !== undefined) {
      const isExpired = isTokenExpired(token);
      if (isExpired) {
        dispatchStore(refreshToken() as any);
      }
    }
  };

  useEffect(() => {
    checkToken();
    setTimeout(() => dispatchStore(getUser(password) as any), 0);
  }, [token]);

  const [value, setValue] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
  });

  const [isChanged, setIsChanged] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChanged(true);
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const cancelChanges = () => {
    setValue({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    setIsChanged(false);
  };

  const onSubmit = (e: Event) => {
    e.preventDefault();
    checkToken();
    setTimeout(
      () =>
        dispatchStore(
          userDetails(value.email, value.password, value.name) as any
        ),
      0
    );
    setIsChanged(false);
  };

  const inputRef = useRef();

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
  };

  return (
    <Profile>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            icon={"EditIcon"}
            name={"name"}
            error={false}
            value={value.name}
            errorText={"Ошибка"}
            onChange={onChange}
            onIconClick={onIconClick}
          />
          <Input
            type={"text"}
            placeholder={"Логин"}
            icon={"EditIcon"}
            name={"email"}
            error={false}
            value={value.email}
            errorText={"Ошибка"}
            onChange={onChange}
            onIconClick={onIconClick}
          />
          <Input
            type={"text"}
            placeholder={"Пароль"}
            icon={"EditIcon"}
            name={"password"}
            error={false}
            value={value.password}
            errorText={"Ошибка"}
            onChange={onChange}
            onIconClick={onIconClick}
          />
          <div>
            {isChanged && (
              <div className={styles.buttons}>
                <Button
                  htmlType="button"
                  type="primary"
                  size="medium"
                  onClick={cancelChanges}
                >
                  Отмена
                </Button>
                <Button htmlType="button" type="primary" size="medium">
                  Сохранить
                </Button>
              </div>
            )}
          </div>
        </form>
      </div>
    </Profile>
  );
};
