import React, { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IngredientsModal } from "../IngredientsModal/IngredientsModal";

export const IngredientDetails: FC = () => {
  const data = useTypedSelector((state) => state.getDetails.details);
  if (!data) return null;
  return <IngredientsModal data={data} />;
};
