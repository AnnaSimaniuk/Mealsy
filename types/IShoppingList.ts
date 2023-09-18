import { IRecipe } from "@/types/IRecipe";
import { IIngredientItem } from "@/types/IIngredient";

export interface INeededIngredient extends IIngredientItem {
  checked: boolean;
}

export interface IShoppingList {
  _id: string;
  recipe: IRecipe;
  user: string;
  neededIngredients: INeededIngredient[];
}
