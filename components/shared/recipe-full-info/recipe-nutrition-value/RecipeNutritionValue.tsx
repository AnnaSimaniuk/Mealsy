import { IRecipe } from "@/types/IRecipe";
import { data } from "@/components/shared/recipe-full-info/recipe-nutrition-value/recipe-nutrition-item/data";
import RecipeNutritionItem from "@/components/shared/recipe-full-info/recipe-nutrition-value/recipe-nutrition-item/RecipeNutritionItem";

interface RecipeNutritionValueProps {
  recipe: IRecipe;
}

const RecipeNutritionValue = ({ recipe }: RecipeNutritionValueProps) => {
  return (
    <div className={"flex flex-col gap-y-5"}>
      <h4 className={"text-2xl font-bold"}>Nutritional value per serving:</h4>
      <div className={"flex flex-wrap gap-4 justify-between"}>
        {data.map(({ title, textColor, borderColor, bgColor }) => (
          <RecipeNutritionItem
            title={title}
            bgColor={bgColor}
            borderColor={borderColor}
            textColor={textColor}
            value={recipe[title]}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeNutritionValue;
