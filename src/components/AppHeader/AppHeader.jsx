import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
export const AppHeader = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.constructor}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default ml-2">Конструктор</p>
        </div>
        <div className={styles.order}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive ml-2 mr-30">
            Лента заказов
          </p>
        </div>
        <Logo />
        <div className={styles.account}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive ml-2">
            Личный кабинет
          </p>
        </div>
      </div>
    </header>
  );
};
