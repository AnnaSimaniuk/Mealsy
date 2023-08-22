import { IRecipe } from "@/types/IRecipe";

interface RecipeShortDescriptionProps {
  recipe: IRecipe;
}

const RecipeShortDescription = ({ recipe }: RecipeShortDescriptionProps) => {
  return (
    <div className={"flex flex-col gap-y-5"}>
      <h2 className={"text-2xl font-bold"}>Description:</h2>
      <p className={"text-xl"}>{recipe.description}</p>
    </div>
  );
};

export default RecipeShortDescription;
