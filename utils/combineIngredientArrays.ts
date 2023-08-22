import {
  MILK_INGREDIENTS,
  MEAT_INGREDIENTS,
  ALCOHOL_INGREDIENTS,
  ONION_INGREDIENTS,
  FISH_INGREDIENTS,
  EGG_INGREDIENTS,
} from "@/utils/const";
import { ExcludedIngredientsOption } from "@/types/ExcludedIngredientsOption";

export const combineIngredientArrays = (
  ingredientNames: ExcludedIngredientsOption[]
): string[] => {
  const combinedArray: string[] = [];

  ingredientNames.forEach((name) => {
    switch (name) {
      case "Milk":
        combinedArray.push(...MILK_INGREDIENTS);
        break;
      case "Meat":
        combinedArray.push(...MEAT_INGREDIENTS);
        break;
      case "Alcohol":
        combinedArray.push(...ALCOHOL_INGREDIENTS);
        break;
      case "Onion":
        combinedArray.push(...ONION_INGREDIENTS);
        break;
      case "Fish":
        combinedArray.push(...FISH_INGREDIENTS);
        break;
      case "Egg":
        combinedArray.push(...EGG_INGREDIENTS);
        break;
      default:
        break;
    }
  });

  return combinedArray;
};
