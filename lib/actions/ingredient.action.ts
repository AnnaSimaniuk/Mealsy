"use server";

import { connectToDB } from "@/lib/mongoose";
import Ingredient from "@/lib/models/ingredient.model";

export const getInstructions = async (name: string) => {
  try {
    await connectToDB();
    return Ingredient.findOne({ name });
  } catch (error) {
    console.log(error);
  }
};
