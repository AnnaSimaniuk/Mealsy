"use client";

import { IRecipe } from "@/types/IRecipe";
import Image from "next/image";
import Link from "next/link";
import TrashIcon from "@/assets/icons/TrashIcon";
import { deleteRecipe } from "@/lib/actions/cookbook.action";
import { ICookbook } from "@/types/ICookbook";

interface CookbookRecipeItemProps {
  recipe: IRecipe;
  cookbookName: string;
  cookbook: ICookbook;
}

const CookbookRecipeItem = ({
  recipe,
  cookbookName,
  cookbook,
}: CookbookRecipeItemProps) => {
  const handleDeleteRecipe = async () => {
    // @ts-ignore
    await JSON.parse(await deleteRecipe(cookbookName, recipe._id));
  };
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
        <div
          className={"absolute top-2 right-2 cursor-pointer"}
          onClick={handleDeleteRecipe}
        >
          <TrashIcon />
        </div>
        {/*<div*/}
        {/*    className={*/}
        {/*        "absolute bottom-2 left-2 flex gap-2 items-center cursor-pointer"*/}
        {/*    }*/}
        {/*>*/}
        {/*    <HeartIcon*/}
        {/*        fillBorder={isLiked ? "#F7931E" : "#fff"}*/}
        {/*        fillIcon={isLiked ? "#F7931E" : "none"}*/}
        {/*    />*/}
        {/*    {!!recipe.ratings_positive && <span>{recipe.ratings_positive}</span>}*/}
        {/*</div>*/}
        {!!recipe.total_time && (
          <span className={"absolute bottom-2 right-2"}>
            {recipe.total_time} min
          </span>
        )}
      </div>
      <Link
        href={`/recipe/${recipe.slug}`}
        className={"link font-bold text-xs md:text-sm lg:text-base w-fit"}
      >
        {recipe.name}
      </Link>
    </div>
  );
};

export default CookbookRecipeItem;
