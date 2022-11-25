import React from "react";
import icon from "../../images/done.png";
import { Text } from "../Text/Text";

export const OrderDetails = ({ orderNumber }) => {
  return (
    <>
      <Text size="large" type="digits" className="mt-25 mb-8">
        {orderNumber}
      </Text>
      <Text size="medium" className="mb-15">
        идентификатор заказа
      </Text>
      <img src={icon} alt="" />
      <Text className="mt-15 mb-2">Ваш заказ начали готовить</Text>
      <Text className="mb-20" inactive>
        Дождитесь готовности на орбитальной станции
      </Text>
    </>
  );
};
