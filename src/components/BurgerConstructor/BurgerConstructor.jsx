import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
export const BurgerConstructor = (props) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "696px", width: "600px", padding: "20px 0" }}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={props[0].name}
          price={200}
          thumbnail={props[0].image}
        />
        <ConstructorElement
          text={props[1].name}
          price={props[1].price}
          thumbnail={props[1].image}
        />
        <ConstructorElement
          text={props[1].name}
          price={props[1].price}
          thumbnail={props[1].image}
        />
        <ConstructorElement
          text={props[1].name}
          price={props[1].price}
          thumbnail={props[1].image}
        />
        <ConstructorElement
          text={props[1].name}
          price={props[1].price}
          thumbnail={props[1].image}
        />
        <ConstructorElement
          text={props[1].name}
          price={props[1].price}
          thumbnail={props[1].image}
        />
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={props[0].image}
        />
      </div>
    </>
  );
};
