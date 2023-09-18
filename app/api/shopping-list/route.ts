import { connectToDB } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/configs/auth";
import ShoppingList from "@/lib/models/shoppingList.model";
import Recipe from "@/lib/models/recipe.model";

export const POST = async (request: Request) => {
  const { recipeName, neededIngredients } = await request.json();
  try {
    await connectToDB();
    const session = await getServerSession(authConfig);

    if (session && !session.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const recipeId = await Recipe.findOne({ slug: recipeName }).select("_id");

    const existingShoppingList = await ShoppingList.findOne({
      recipe: recipeId,
      user: session?.user?.id,
    });

    if (existingShoppingList) {
      existingShoppingList.neededIngredients = neededIngredients;
      await existingShoppingList.save();
      return new Response(JSON.stringify("Shopping list updated"), {
        status: 200,
      });
    }

    const newShoppingList = {
      recipe: recipeId,
      user: session?.user?.id,
      neededIngredients,
    };

    await ShoppingList.create(newShoppingList);
    return new Response(JSON.stringify("Shopping list created"), {
      status: 201,
    });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectToDB();
    const { user } = await getServerSession(authConfig);

    if (!user) {
      new Response("Unauthorized", { status: 401 });
    }

    const shoppingList = await ShoppingList.find({ user: user.id }).populate(
      "recipe"
    );

    return new Response(JSON.stringify(shoppingList), { status: 200 });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
};
