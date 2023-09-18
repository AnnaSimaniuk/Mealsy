"use client";
import RecipeIngredientItem from "@/components/shared/recipe-full-info/recipe-ingredients/recipe-ingredient-item/RecipeIngredientItem";
import { IIngredient } from "@/types/IIngredient";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "../../../ui/use-toast";
import SpinnerIcon from "../../../../assets/icons/SpinnerIcon";

const RecipeIngredients = () => {
  const params = useParams();
  const [ingredients, setIngredients] = useState<IIngredient>();
  const [shoppingList, setShoppingList] = useState<IIngredient[]>([]);
  const [checkAll, setCheckAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const renderIngredients = () => {
    return ingredients?.ingredient_sections.map((section) => {
      return (
        <div key={section.name} className={"flex flex-col gap-y-6"}>
          {section.name && (
            <h5 className={"text-base lg:text-lg font-semibold mb-2"}>
              {section.name}
            </h5>
          )}
          {section.ingredients.map((ingredient, index) => {
            return (
              <RecipeIngredientItem
                key={`${ingredient.name}-${index}`}
                ingredient={ingredient}
                setShoppingList={setShoppingList}
                checkAll={checkAll}
                setCheckAll={setCheckAll}
              />
            );
          })}
        </div>
      );
    });
  };

  const getIngredients = async () => {
    const res = await fetch(`/api/ingredient/${params.name}`);
    const data = await res.json();
    setIngredients(data);
  };

  const handleAddIngredients = async () => {
    setLoading(true);
    const res = await fetch(`/api/shopping-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipeName: params.name,
        neededIngredients: shoppingList,
      }),
    });
    const data = await res.json();
    setLoading(false);
    toast({
      title: "Happy shopping!",
      description: `${data}! 🛒`,
      duration: 3000,
    });
  };

  useEffect(() => {
    getIngredients();
  }, []);
  const handleAddAll = () => {
    setShoppingList([]);
    ingredients?.ingredient_sections.forEach((section) => {
      section.ingredients.forEach((ingredient) => {
        setShoppingList((prev: IIngredient[]) => [...prev, ingredient]);
      });
    });
    setCheckAll(true);
  };

  return (
    <div className={"flex flex-col gap-y-6 mb-12"}>
      <h4 className={"text-xl lg:text-2xl font-bold"}>Ingredients:</h4>
      {!!ingredients && renderIngredients()}
      <div
        className={
          "flex flex-col items-center md:items-start md:flex-row justify-around gap-2.5"
        }
      >
        <Button onClick={handleAddIngredients} disabled={loading}>
          {loading ? (
            <>
              <SpinnerIcon className={"animate-spin mr-2"} />
              <span className={"pt-[2px]"}>Loading...</span>
            </>
          ) : (
            "Add to shopping list"
          )}
        </Button>
        <Button
          variant={"outline"}
          onClick={handleAddAll}
          className={"bg-background w-fit"}
        >
          Select all
        </Button>
      </div>
    </div>
  );
};
export default RecipeIngredients;
