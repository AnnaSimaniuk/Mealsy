"use client";
import { IRecipe } from "@/types/IRecipe";
import Image from "next/image";
import { useState } from "react";
import HeartIcon from "@/assets/icons/HeartIcon";
import Link from "next/link";
import CookbookButton from "@/components/shared/cookbook-button/CookbookButton";

interface RecipeItemProps {
  recipe: IRecipe;
}

const RecipeItem = ({ recipe }: RecipeItemProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className={"flex flex-col gap-y-5 w-[246px] items-start"}>
      <div
        className={
          "relative w-[246px] h-[346px] rounded-lg font-semibold text-white text-xl"
        }
      >
        <Image
          alt={recipe.slug}
          src={recipe.thumbnail_url}
          width={246}
          height={346}
          className={"rounded-lg w-[246px] h-[346px] object-cover"}
        />
        <CookbookButton
          image={recipe.thumbnail_url}
          name={recipe.name}
          id={recipe._id}
          className={"absolute top-2 right-2"}
        />
        <div
          className={
            "absolute bottom-2 left-2 flex gap-2 items-center cursor-pointer"
          }
          onClick={() => setIsLiked(!isLiked)}
        >
          <HeartIcon
            fillBorder={isLiked ? "#F7931E" : "#fff"}
            fillIcon={isLiked ? "#F7931E" : "none"}
          />
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
        className={"link font-bold text-base w-fit"}
      >
        {recipe.name}
      </Link>
    </div>
  );
};

export default RecipeItem;
