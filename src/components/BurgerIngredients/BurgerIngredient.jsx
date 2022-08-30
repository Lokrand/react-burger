import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
export const BurgerIngredient = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "9px",
        }}
      >
        <img src={props.image} alt={props.name} style={{ width: "fit-content", margin: "0 auto" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "9px",
          }}
        >
          <p className="text text_type_digits-default">{props.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p
          className="text text_type_main-default"
          style={{ display: "flex", width: "272px", justifyContent: "center", textAlign: "center"}}
        >
          {props.name}
        </p>
      </div>
    </>
  );
};
