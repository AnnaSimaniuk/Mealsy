"use server";

import { connectToDB } from "@/lib/mongoose";
import Cookbook from "@/lib/models/cookbook.model";
import { revalidatePath } from "next/cache";

export const getRecipesByName = async (name) => {
  try {
    await connectToDB();
    const res = await Cookbook.findOne({
      name: name.replace("-", " "),
    }).populate("recipes");
    return JSON.stringify(res);
  } catch (error) {
    console.log(error);
  }
};

export const deleteRecipe = async (name, recipeId) => {
  try {
    await connectToDB();
    const cookbook = await Cookbook.findOne({
      name: name.replace("-", " "),
    }).populate("recipes");
    cookbook.recipes = cookbook.recipes.filter(
      (recipe) => recipe._id.toString() !== recipeId
    );
    await cookbook.save();
    const path = "/profile/cookbook/[name]";
    revalidatePath(path);
    return JSON.stringify(cookbook);
  } catch (error) {
    console.log(error);
  }
};
