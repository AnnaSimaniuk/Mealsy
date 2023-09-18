import { connectToDB } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/configs/auth";
import ShoppingList from "@/lib/models/shoppingList.model";
import { NextRequest } from "next/server";
import Recipe from "@/lib/models/recipe.model";

export const PUT = async (
  request: NextRequest,
  {
    params,
  }: {
    params: {
      slug: string;
    };
  }
) => {
  try {
    const { id } = await request.json();

    await connectToDB();

    const session = await getServerSession(authConfig);

    if (session && !session.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const recipeId = await Recipe.findOne({ slug: params.slug }).select("_id");

    const oldShoppingList = await ShoppingList.findOne({
      recipe: recipeId,
      user: session?.user?.id,
    });

    const newIngredients = oldShoppingList.neededIngredients.map(
      (ingredient) => {
        if (ingredient._id.toString() === id) {
          ingredient.checked = !ingredient.checked;
        }
        return ingredient;
      }
    );

    oldShoppingList.neededIngredients = newIngredients;
    await oldShoppingList.save();

    return new Response(JSON.stringify("Shopping list updated"), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
};

export const GET = async (
  request: NextRequest,
  {
    params,
  }: {
    params: {
      slug: string;
    };
  }
) => {
  try {
    await connectToDB();

    const session = await getServerSession(authConfig);

    if (session && !session.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const recipeId = await Recipe.findOne({ slug: params.slug }).select("_id");

    const shoppingList = await ShoppingList.findOne({
      recipe: recipeId,
      user: session?.user?.id,
    }).populate("recipe");

    return new Response(JSON.stringify(shoppingList), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
};

export const DELETE = async (
  request: NextRequest,
  {
    params,
  }: {
    params: {
      slug: string;
    };
  }
) => {
  try {
    await connectToDB();

    const session = await getServerSession(authConfig);

    if (session && !session.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const recipeId = await Recipe.findOne({ slug: params.slug }).select("_id");

    await ShoppingList.findOneAndDelete({
      recipe: recipeId,
      user: session?.user?.id,
    });

    return new Response(JSON.stringify("Shopping list deleted"), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
};
