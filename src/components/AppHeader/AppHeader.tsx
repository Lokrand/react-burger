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
        className="m-10 "
      >
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
        >
          <BurgerIcon type="secondary" />
          <p style={{ marginLeft: "8px", marginRight: "49px" }}>Конструктор</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ListIcon type="secondary" />
          <p style={{ marginLeft: "8px", marginRight: "132px" }}>
            Лента заказов
          </p>
        </div>
        <Logo />
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "312px" }}
        >
          <ProfileIcon type="secondary" />
          <p style={{ marginLeft: "11px" }}>Личный кабинет</p>
        </div>
      </div>
      </>
  )
}