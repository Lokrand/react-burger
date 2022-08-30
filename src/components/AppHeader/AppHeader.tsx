import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
export const AppHeader = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "18px 0",
          justifyContent: "center",
          backgroundColor: "#1C1C21",
        }}
        className="mt-10 ml-10 mr-10"
      >
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
          className="mr-10"
        >
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default ml-2">Конструктор</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }} className="ml-2">
          <ListIcon type="secondary" />
          <p
            className="text text_type_main-default text_color_inactive ml-2"
            style={{ marginRight: "132px" }}
          >
            Лента заказов
          </p>
        </div>
        <Logo />
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "312px" }}
        >
          <ProfileIcon type="secondary" />
          <p
            className="text text_type_main-default text_color_inactive"
            style={{ marginLeft: "11px" }}
          >
            Личный кабинет
          </p>
        </div>
      </div>
    </>
  );
};
