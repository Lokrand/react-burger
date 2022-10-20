import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.section}>
      <div className={styles.menu}>
        <p className="text text_type_main-medium mt-4 mb-4">Профиль</p>
        <p className="text text_type_main-medium text_color_inactive mt-4 mb-4">
          История заказов
        </p>
        <p className="text text_type_main-medium text_color_inactive mt-4 mb-4">Выход</p>
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить&nbsp;свои персональные данные
        </p>
      </div>
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
    </div>
  );
};
