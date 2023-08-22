import { connectToDB } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/configs/auth";
import ShoppingList from "@/lib/models/shoppingList.model";
import Recipe from "@/lib/models/recipe.model";

export const POST = async (request: Request) => {
  const { recipeName, neededIngredients } = await request.json();
  try {
    await connectToDB();
    const { user } = await getServerSession(authConfig);

    if (!user) {
      new Response("Unauthorized", { status: 401 });
    }
    const ingredients = neededIngredients.map((ingredient) => ({
      ingredient: ingredient._id,
      checked: false,
    }));

    const recipeId = await Recipe.findOne({ slug: recipeName }).select("_id");

    const existingShoppingList = await ShoppingList.findOne({
      recipe: recipeId,
      user: user.id,
    });

    if (existingShoppingList) {
      existingShoppingList.neededIngredients = ingredients;
      await existingShoppingList.save();
      return new Response(JSON.stringify("Shopping list updated"), {
        status: 200,
      });
    }

    const newShoppingList = {
      recipe: recipeId,
      user: user.id,
      neededIngredients: ingredients,
    };

    await ShoppingList.create(newShoppingList);
    return new Response(JSON.stringify("Shopping list created"), {
      status: 201,
    });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const GET = async (request: Request) => {
  try {
    await connectToDB();
    const { user } = await getServerSession(authConfig);

    if (!user) {
      new Response("Unauthorized", { status: 401 });
    }

    const shoppingList = await ShoppingList.find({ user: user.id })
      .populate("recipe")
      .populate("neededIngredients.ingredient");

    return new Response(JSON.stringify(shoppingList), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
