import { IRecipe } from "@/types/IRecipe";
import Image from "next/image";
import HeartIcon from "@/assets/icons/HeartIcon";
import Link from "next/link";
import CookbookButton from "@/components/shared/cookbook-button/CookbookButton";

interface RecipeItemProps {
  recipe: IRecipe;
}

const RecipeItem = ({ recipe }: RecipeItemProps) => {
  return (
    <div
      className={
        "flex flex-col gap-y-5 w-[144px] md:w-[214px] lg:w-[246px] items-start"
      }
    >
      <div
        className={
          "relative w-[144px] md:w-[214px] lg:w-[246px] h-[226px] md:h-[346px] rounded-lg font-semibold text-white text-sm md:text-base lg:text-xl"
        }
      >
        <Image
          alt={recipe.slug}
          src={recipe.thumbnail_url}
          width={246}
          height={346}
          className={
            "rounded-lg w-[144px] md:w-[214px] lg:w-[246px] h-[226px] md:h-[346px] object-cover"
          }
        />
        <CookbookButton
          image={recipe.thumbnail_url}
          name={recipe.name}
          id={recipe._id}
          className={"absolute top-2 right-2"}
        />
        <div className={"absolute bottom-2 left-2 flex gap-2 items-center"}>
          <HeartIcon fillBorder={"#F7931E"} fillIcon={"#F7931E"} />
          {!!recipe.ratings_positive && <span>{recipe.ratings_positive}</span>}
        </div>
        {!!recipe.total_time && (
          <span className={"absolute bottom-2 right-2"}>
            {recipe.total_time} min
          </span>
        )}
      </div>
      <Link
        href={`/recipe/${recipe.slug}`}
        className={"link font-bold text-sx md:text-sm lg:text-base w-fit"}
      >
        {recipe.name}
      </Link>
    </div>
  );
};

export default RecipeItem;
