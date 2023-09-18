"use server";

import { connectToDB } from "@/lib/mongoose";
import Tag from "@/lib/models/tag.model";
import Recipe from "@/lib/models/recipe.model";
import { ITag } from "@/types/ITag";

export const getUniqueTags = async () => {
  try {
    await connectToDB();
    const tags = await Tag.find({});
    return [...new Set(tags.map((tag) => tag.type))];
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllTags = async () => {
  try {
    await connectToDB();
    const res = await Tag.find({});
    return JSON.stringify(res);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getTagsByRecipe = async (name: string) => {
  try {
    await connectToDB();
    const recipeTags = await Recipe.findOne({ slug: name }).select("tags");
    const tagsArr = recipeTags.tags;
    const tags = await Tag.find({ id: { $in: tagsArr } });
    const uniqueTags = Object.values(
      tags.reduce((unique, obj) => {
        unique[obj.id] = obj;
        return unique;
      }, {})
    );
    return uniqueTags as ITag[];
  } catch (error: any) {
    throw new Error(error.message);
  }
};
