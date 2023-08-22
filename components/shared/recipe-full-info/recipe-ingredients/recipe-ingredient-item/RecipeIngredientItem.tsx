"use client";

import RecipeCheckedIcon from "@/components/shared/recipe-full-info/recipe-ingredients/recipe-ingredient-item/RecipeCheckedIcon";
import { useEffect, useState } from "react";

interface RecipeIngredientItemProps {
  ingredient: {
    extra_comment: string;
    name: string;
    primary_unit: {
      quantity: string;
      display: string;
    };
    metric_unit: {
      quantity: string;
      display: string;
    };
  };
  setShoppingList: any;
  checkAll: boolean;
  setCheckAll: any;
}

const RecipeIngredientItem = ({
  ingredient,
  setShoppingList,
  checkAll,
  setCheckAll,
}: RecipeIngredientItemProps) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setCheckAll(false);
    setChecked(!checked);
    if (checked) {
      setShoppingList((prev) =>
        prev.filter((item) => item.name !== ingredient.name)
      );
    } else {
      setShoppingList((prev) => [...prev, ingredient]);
    }
  };

  useEffect(() => {
    if (checkAll) {
      setChecked(true);
    }
  }, [checkAll]);

  return (
    <div
      onClick={handleCheck}
      className={
        "flex pb-5 border-b-primary border-b gap-x-2.5 text-xl items-center cursor-pointer"
      }
    >
      <RecipeCheckedIcon checked={checked} />
      <div>{ingredient.name}</div>
      {ingredient.extra_comment && (
        <div className={"text-base text-gray"}>
          ({ingredient.extra_comment})
        </div>
      )}
      <div className={"ml-auto"}>
        {ingredient.metric_unit && ingredient.metric_unit.display
          ? `${ingredient.metric_unit.quantity} ${
              ingredient.metric_unit.display
                ? ingredient.metric_unit.display
                : ""
            }`
          : `${ingredient.primary_unit.quantity || ""} ${
              ingredient.primary_unit.display
                ? ingredient.primary_unit.display
                : ""
            }`}
      </div>
    </div>
  );
};

export default RecipeIngredientItem;
