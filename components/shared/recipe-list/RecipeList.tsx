"use client";

import Layout from "@/components/shared/layout/Layout/Layout";
import { IRecipe } from "@/types/IRecipe";
import RecipeItem from "@/components/shared/recipe-list/recipe-item/RecipeItem";
import { ReactNode } from "react";
import RecipeProvider from "@/components/context/RecipeContext";

interface RecipeListProps {
  title: string;
  arr: IRecipe[];
  button?: ReactNode;
}

const RecipeList = ({ title, arr, button }: RecipeListProps) => {
  return (
    <div
      className={
        "flex flex-col gap-y-5 lg:gap-y-12 items-center mb-12 lg:mb-36 px-0"
      }
    >
      <h2 className={"font-bold text-xl lg:text-4xl self-start"}>{title}</h2>
      <RecipeProvider>
        <div
          className={
            "flex justify-around flex-wrap gap-y-5 lg:gap-y-12 gap-x-2.5 lg:gap-x-24"
          }
        >
          {arr.map((recipe) => (
            <RecipeItem recipe={recipe} key={recipe.id_} />
          ))}
        </div>
      </RecipeProvider>
      {button}
    </div>
  );
};

export default RecipeList;
