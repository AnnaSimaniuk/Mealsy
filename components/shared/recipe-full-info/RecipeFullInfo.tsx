import { getRecipeBySlug } from "@/lib/actions/recipe.action";
import Image from "next/image";
import { IRecipe } from "@/types/IRecipe";
import RecipeIngredients from "@/components/shared/recipe-full-info/recipe-ingredients/RecipeIngredients";
import RecipeTags from "@/components/shared/recipe-full-info/recipe-tags/RecipeTags";
import RecipeKeywords from "@/components/shared/recipe-full-info/recipe-keywords/RecipeKeywords";
import RecipeActionBtns from "@/components/shared/recipe-full-info/recipe-action-btns/RecipeActionBtns";
import RecipeNutritionValue from "./recipe-nutrition-value/RecipeNutritionValue";
import RecipeRatingAction from "@/components/shared/recipe-full-info/recipe-rating-action/RecipeRatingAction";
import RecipeShortDescription from "@/components/shared/recipe-full-info/recipe-short-description/RecipeShortDescription";
import RecipeVideo from "@/components/shared/recipe-full-info/recipe-video/RecipeVideo";
import RecipeInstruction from "@/components/shared/recipe-full-info/recipe-instruction/RecipeInstruction";
import RecipeLiked from "@/components/shared/recipe-full-info/recipe-liked/RecipeLiked";
import RecipeProvider from "@/components/context/RecipeContext";
import { Providers } from "@/components/provider/Providers";

interface RecipeFullInfoProps {
  params: {
    name: string;
  };
}

const RecipeFullInfo = async ({ params }: RecipeFullInfoProps) => {
  const recipe: IRecipe = await JSON.parse(await getRecipeBySlug(params.name));

  return (
    <div className={"flex flex-col lg:flex-row text-dark gap-10 mb-24"}>
      <div className={"flex flex-col lg:max-w-[522px]"}>
        <div className={"flex flex-col-reverse md:flex-row gap-5"}>
          <Image
            src={recipe.thumbnail_url}
            alt={recipe.name}
            width={522}
            height={522}
            className={
              "rounded-md w-full md:w-[216px] lg:w-[522px] md:h-[216px] lg:h-[522px] object-cover mb-5"
            }
          />
          <div className={"flex flex-col gap-5 lg:hidden"}>
            <h1 className={"text-xl lg:text-3xl font-bold"}>{recipe.name}</h1>
            <div
              className={
                "flex justify-between gap-x-10 items-center gap-y-5 flex-col sm:flex-row"
              }
            >
              {recipe.keywords && <RecipeKeywords keywords={recipe.keywords} />}
              <RecipeProvider>
                <RecipeActionBtns
                  id={recipe._id}
                  image={recipe.thumbnail_url}
                  name={recipe.name}
                />
              </RecipeProvider>
            </div>
          </div>
        </div>
        <Providers>
          <RecipeIngredients />
        </Providers>
        <RecipeTags params={params} />
      </div>
      <div className={"flex flex-col gap-y-8 flex-1"}>
        <div className={"hidden lg:flex flex-col gap-y-8 "}>
          <h1 className={"text-xl lg:text-3xl font-bold"}>{recipe.name}</h1>
          <div className={"flex justify-between gap-x-10 items-center"}>
            {recipe.keywords && <RecipeKeywords keywords={recipe.keywords} />}
            <RecipeProvider>
              <RecipeActionBtns
                id={recipe._id}
                image={recipe.thumbnail_url}
                name={recipe.name}
              />
            </RecipeProvider>
          </div>
        </div>
        <RecipeNutritionValue recipe={recipe} />
        <RecipeRatingAction recipe={recipe} />
        {recipe.description && <RecipeShortDescription recipe={recipe} />}
        {recipe.video_url && <RecipeVideo video={recipe.video_url} />}
        <RecipeInstruction name={params.name} />
        <RecipeProvider>
          <RecipeLiked
            id={recipe._id}
            image={recipe.thumbnail_url}
            name={recipe.name}
          />
        </RecipeProvider>
      </div>
    </div>
  );
};

export default RecipeFullInfo;
