"use client";
import { createContext, ReactNode, useState } from "react";
import { IRecipe } from "@/types/IRecipe";
import { AdditionalIngredientsOption } from "@/types/AdditionalIngredientsOption";
import { ExcludedIngredientsOption } from "@/types/ExcludedIngredientsOption";
import { getConstructorRecipe } from "@/lib/actions/recipe.action";

export const ConstructorContextStore = createContext({});

interface ConstructorContextProps {
  children: ReactNode;
}

interface ResultRecipe {
  recipe: IRecipe[];
  count: number;
}

const ConstructorProvider = ({ children }: ConstructorContextProps) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [additionalIngredients, setAdditionalIngredients] =
    useState<AdditionalIngredientsOption>("5");
  const [excludeIngredients, setExcludeIngredients] = useState<
    ExcludedIngredientsOption[]
  >([]);
  const [time, setTime] = useState<number[]>([2]);
  const [recipes, setRecipes] = useState<ResultRecipe | []>({
    recipe: [],
    count: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(8);

  const handleClear = () => {
    setIngredients([]);
    setExcludeIngredients([]);
    setTime([2]);
    setAdditionalIngredients("5");
    setRecipes([]);
    setSubmitted(false);
  };

  const handleGetRecipe = async () => {
    if (ingredients.length === 0) {
      setError("You must add at least one ingredient");
      return;
    }
    setSubmitted(true);
    setLoading(true);
    const res: ResultRecipe = await getConstructorRecipe({
      ingredients,
      additionalIngredients,
      excludeIngredients,
      time,
      limit,
    });
    setLoading(false);
    setRecipes(res);
  };

  const handleSkip = async () => {
    setLimit((prevState) => prevState + 8);
    const newLimit = limit + 8;
    setLoading(true);
    const res: ResultRecipe = await getConstructorRecipe({
      ingredients,
      additionalIngredients,
      excludeIngredients,
      time,
      limit: newLimit,
    });
    setLoading(false);
    setRecipes(res);
  };

  return (
    <ConstructorContextStore.Provider
      value={{
        ingredients,
        setIngredients,
        error,
        setError,
        setAdditionalIngredients,
        additionalIngredients,
        excludeIngredients,
        setExcludeIngredients,
        time,
        setTime,
        handleClear,
        handleGetRecipe,
        loading,
        recipes,
        submitted,
        handleSkip,
        limit,
      }}
    >
      {children}
    </ConstructorContextStore.Provider>
  );
};

export default ConstructorProvider;
