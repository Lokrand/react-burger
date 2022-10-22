import React from "react";
import { Modal } from "../Modal/Modal";
import icon from "../../images/done.png";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { useSelector } from "react-redux";
import { Text } from "../Text/Text";

export const OrderDetails = ({ active, setActive, orderNumber }) => {
  const loading = useSelector((state) => state.getOrderNumber.loading);
  return (
    <Modal active={active} setActive={setActive}>
      {loading ? (
        <Text size="large">Loading...</Text>
      ) : (
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
      )}
    </Modal>
  );
};

OrderDetails.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientType)),
};
