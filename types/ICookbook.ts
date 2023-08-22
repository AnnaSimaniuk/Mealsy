import { IRecipe } from "@/types/IRecipe";

export interface ICookbook {
  _id: string;
  name: string;
  user: string;
  recipes: IRecipe[];
}
