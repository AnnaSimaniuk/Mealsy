import Tag from "@/lib/models/tag.model";
import Recipe from "@/lib/models/recipe.model";
import { connectToDB } from "@/lib/mongoose";

export const GET = async () => {
  try {
    await connectToDB();
    const tags = await Tag.find({ type: "cuisine" });
    const res = await Promise.all(
      tags.map(async (tag, index) => {
        const recipes = await Recipe.find({
          tags: {
            $regex: tag.id,
          },
        });

        return {
          image: recipes[index]?.thumbnail_url || recipes[0]?.thumbnail_url,
          tag: tag.name,
          id: tag.id,
          display_name: tag.display_name,
        };
      })
    );
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};
