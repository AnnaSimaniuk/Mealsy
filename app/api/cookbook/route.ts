import { connectToDB } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/configs/auth";
import Cookbook from "@/lib/models/cookbook.model";

export const GET = async () => {
  try {
    await connectToDB();
    const { user } = await getServerSession(authConfig);
    if (!user) {
      new Response("Unauthorized", { status: 401 });
    }
    const cookbook = await Cookbook.find({ user: user.id }).populate("recipes");

    if (!cookbook) {
      return new Response([], {
        status: 200,
      });
    }
    return new Response(JSON.stringify(cookbook), { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  const { name } = await request.json();
  try {
    await connectToDB();
    const { user } = await getServerSession(authConfig);

    if (!user) {
      new Response("Unauthorized", { status: 401 });
    }

    const newCookbook = {
      name,
      user: user.id,
      recipes: [],
    };
    const cookbook = await Cookbook.create(newCookbook);
    return new Response(JSON.stringify(cookbook), { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  const { name, recipeId, id } = await request.json();
  try {
    await connectToDB();
    if (name) {
      const cookbook = await Cookbook.findByIdAndUpdate(
        id,
        {
          name,
        },
        { new: true }
      ).populate("recipes");
      return new Response(JSON.stringify(cookbook), { status: 200 });
    }

    const cookbook = await Cookbook.findByIdAndUpdate(
      id,
      {
        $addToSet: { recipes: recipeId },
      },
      { new: true }
    ).populate("recipes");
    return new Response(JSON.stringify(cookbook), { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  const { id } = await request.json();
  try {
    await connectToDB();
    const cookbook = await Cookbook.findByIdAndDelete(id);
    return new Response(JSON.stringify(cookbook), { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};
