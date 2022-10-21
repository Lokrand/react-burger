import React from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Profile } from "../Profile/Profile";
import styles from "./ProfileRegister.module.css";

export const ProfileRegister = () => {
  return (
    <Profile>
      <form className={styles.form}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          icon={"EditIcon"}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
        />
        <Input
          type={"text"}
          placeholder={"Логин"}
          icon={"EditIcon"}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
        />
        <Input
          type={"text"}
          placeholder={"Пароль"}
          icon={"EditIcon"}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
        />
      </form>
    </Profile>
  );
};
