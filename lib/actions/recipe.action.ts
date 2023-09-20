"use server";

import { connectToDB } from "../mongoose";
import Recipe from "@/lib/models/recipe.model";
import Ingredient from "@/lib/models/ingredient.model";
import Tag from "@/lib/models/tag.model";
import { IIngredient } from "@/types/IIngredient";
import { removeLastLetterFromWords } from "@/utils/removeLastLetterFromWords";
import UniqueIngredients from "@/lib/models/uniqueIngredients.model";
import { IUniqueIngredients } from "@/types/IUniqueIngredients";
import { AdditionalIngredientsOption } from "@/types/AdditionalIngredientsOption";
import { ExcludedIngredientsOption } from "@/types/ExcludedIngredientsOption";
import { combineIngredientArrays } from "@/utils/combineIngredientArrays";
import { IRecipe } from "@/types/IRecipe";

interface IConstructorRecipe {
  ingredients: string[];
  additionalIngredients: AdditionalIngredientsOption;
  excludeIngredients: ExcludedIngredientsOption[];
  time: number[];
  limit: number;
}

export const getRandomRecipe = async () => {
  try {
    await connectToDB();
    const count = await Recipe.countDocuments();
    const random = Math.floor(Math.random() * count);
    return await Recipe.findOne().skip(0);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getConstructorRecipe = async ({
  ingredients,
  additionalIngredients,
  excludeIngredients,
  time,
  limit,
}: IConstructorRecipe) => {
  try {
    await connectToDB();
    const excluded: IUniqueIngredients[] = await UniqueIngredients.find({
      name: {
        $nin: ingredients,
      },
    });

    const excludedParams = excluded.map((ingredient) => ingredient.name);
    const allExcludedIngredients =
      combineIngredientArrays(excludeIngredients) || [];

    const includeIngredients: IIngredient[] = await Ingredient.find({
      ingredient_sections: {
        $elemMatch: {
          ingredients: {
            $elemMatch: {
              name: {
                $regex: removeLastLetterFromWords(ingredients).join("|"),
                $options: "i",
              },
            },
          },
        },
      },
    });

    const filteredIngredients = includeIngredients
      .filter((ingredient) => {
        let count = 0;
        let hasExcluded = false;
        ingredient.ingredient_sections.filter((section) => {
          section.ingredients.filter((item) => {
            if (allExcludedIngredients.length > 0) {
              allExcludedIngredients.forEach((excluded) => {
                if (item?.name?.includes(excluded)) {
                  hasExcluded = true;
                }
              });
            }
            excludedParams.forEach((excludedItem) => {
              if (item?.name?.includes(excludedItem.toLowerCase())) {
                count++;
              }
            });
          });
        });
        if (count <= +additionalIngredients && !hasExcluded) {
          return ingredient;
        } else {
          return false;
        }
      })
      .map((item) => item.name);

    const recipe: IRecipe[] = await Recipe.find({
      slug: {
        $in: filteredIngredients,
      },
    }).limit(limit);

    const count = await Recipe.find({
      slug: {
        $in: filteredIngredients,
      },
    }).countDocuments();

    return { recipe, count };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getMostPopularRecipes = async () => {
  try {
    await connectToDB();
    return await Recipe.find().limit(8).sort({ ratings_positive: -1 });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCatalogRecipes = async () => {
  try {
    await connectToDB();
    return await Recipe.find().limit(8);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getRecipeBySlug = async (slug: string) => {
  try {
    await connectToDB();
    const res = await Recipe.find({ slug });
    return JSON.stringify(res[0]);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const sameRecipes = async (slug: string) => {
  try {
    await connectToDB();
    const res = await Recipe.findOne({ slug });
    const keywordsArr = res.keywords.split(",");
    if (keywordsArr.length > 0) {
      const res = await Recipe.find({
        keywords: { $regex: keywordsArr.join("|") },
      }).limit(8);
      return JSON.stringify(res);
    } else {
      const tagsArr = res.tags;
      const res = await Recipe.find({
        tags: {
          $regex: tagsArr.join("|"),
        },
      }).limit(8);
      return JSON.stringify(res);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
