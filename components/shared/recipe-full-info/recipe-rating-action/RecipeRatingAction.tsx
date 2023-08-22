import { IRecipe } from "@/types/IRecipe";
import HeartIcon from "@/assets/icons/HeartIcon";
import StarIcon from "@/assets/icons/StarIcon";
import { generateTotalRating } from "@/utils/generateTotalRating";

interface RecipeRatingActionProps {
  recipe: IRecipe;
}

const RecipeRatingAction = ({ recipe }: RecipeRatingActionProps) => {
  return (
    <div className={"flex justify-between items-center"}>
      <div className={"flex gap-x-2.5 items-end cursor-pointer"}>
        <HeartIcon fillBorder={"#67BB5A"} />
        <span>{recipe.ratings_positive} liked this recipe</span>
      </div>
      <div className={"flex gap-x-2.5 items-end text-2xl"}>
        <StarIcon />
        <span>
          {generateTotalRating(
            recipe.ratings_positive,
            recipe.ratings_negative
          )}
        </span>
      </div>
    </div>
  );
};

export default RecipeRatingAction;
