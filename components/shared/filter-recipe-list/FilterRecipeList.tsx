"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IRecipe } from "@/types/IRecipe";
import { useSearchParams } from "next/navigation";
import SpinnerIcon from "@/assets/icons/SpinnerIcon";
import RecipeItem from "@/components/shared/recipe-list/recipe-item/RecipeItem";
import RecipeProvider from "../../context/RecipeContext";

const FilterRecipeList = () => {
  const [recipes, setRecipes] = useState<IRecipe[] | []>([]);
  const [limit, setLimit] = useState<number>(12);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const fetchRecipes = async () => {
    setLoading(true);
    const res = await fetch(
      `/api/recipe?limit=${limit}&${searchParams.toString()}`
    );
    const recipes = await res.json();
    setLoading(false);
    setRecipes(recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, [limit, searchParams]);

  return (
    <div
      className={
        "flex flex-col sm:p-[30px] sm:shadow sm:bg-white w-full gap-12"
      }
    >
      <RecipeProvider>
        <div className={"flex flex-wrap justify-between gap-y-[30px]"}>
          {recipes.map((recipe) => (
            <RecipeItem recipe={recipe} key={recipe.id_} />
          ))}
          {recipes.length === 0 && !loading && (
            <p className={"text-center text-gray-500"}>No recipes found</p>
          )}
        </div>
      </RecipeProvider>
      <Button
        onClick={() => setLimit((prevState) => prevState + 12)}
        disabled={loading}
      >
        {loading ? (
          <>
            <SpinnerIcon className={"animate-spin mr-2"} />
            <span className={"pt-[2px]"}>Loading...</span>
          </>
        ) : (
          "Show more"
        )}
      </Button>
    </div>
  );
};

export default FilterRecipeList;
