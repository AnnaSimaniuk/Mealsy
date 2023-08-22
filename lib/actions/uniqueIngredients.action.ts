"use server";

import { connectToDB } from "@/lib/mongoose";
import UniqueIngredients from "@/lib/models/uniqueIngredients.model";
import { IUniqueIngredients } from "@/types/IUniqueIngredients";

export const getUniqueIngredients = async (req: string) => {
  try {
    await connectToDB();

    const uniqueIngredients: IUniqueIngredients[] =
      await UniqueIngredients.find({
        name: { $regex: req, $options: "i" },
      });

    return uniqueIngredients.map((ingredient) => ({
      _id: ingredient._id.toString(),
      name: ingredient.name,
    }));
  } catch (e) {
    throw new Error(e);
  }
};
