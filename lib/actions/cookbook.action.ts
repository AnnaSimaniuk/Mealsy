"use server";

import { connectToDB } from "@/lib/mongoose";
import Cookbook from "@/lib/models/cookbook.model";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/configs/auth";

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

export const getRecipeByUser = async () => {
  try {
    await connectToDB();
    const { user } = await getServerSession(authConfig);
    if (!user) {
      new Response("Unauthorized", { status: 401 });
    }
    const cookbook = await Cookbook.find({ user: user.id }).populate("recipes");

    if (!cookbook) {
      return JSON.stringify([]);
    }
    return JSON.stringify(cookbook);
  } catch (error: any) {
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
