import React from "react";
import { useSelector } from "react-redux";
import { IngredientsModal } from "../IngredientsModal/IngredientsModal";

export const IngredientDetails = () => {
  const data = useSelector((state) => state.getDetails.details);
  return (
    <IngredientsModal data={data}/>
  );
};
