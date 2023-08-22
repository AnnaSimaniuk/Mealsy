import { connectToDB } from "@/lib/mongoose";
import Ingredient from "@/lib/models/ingredient.model";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const ingredient = await Ingredient.findOne({ name: params.name });
    if (!ingredient) return new Response("Not found", { status: 404 });
    return new Response(JSON.stringify(ingredient), { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
