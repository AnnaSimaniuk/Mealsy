import { NextRequest } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import Recipe from "@/lib/models/recipe.model";
import Tag from "@/lib/models/tag.model";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();
    const sort = req.nextUrl.searchParams.get("sort");
    const limit = req.nextUrl.searchParams.get("limit");
    const tagType = req.nextUrl.searchParams.get("tag-type")?.split(",");
    const tagName = req.nextUrl.searchParams.get("tag-name")?.split(",");
    const search = req.nextUrl.searchParams.get("search");
    let tags = [];

    if (tagName) {
      if (tagType) {
        tags = await Tag.find({
          $or: [{ name: { $in: tagName } }, { type: { $in: tagType } }],
        });
      } else {
        tags = await Tag.find({
          name: {
            $in: tagName,
          },
        });
      }
    }

    if (tagType && !tagName) {
      tags = await Tag.find({
        type: {
          $in: tagType,
        },
      });
    }

    if (tags.length > 0) {
      const tagId = tags.map((tag) => tag.id.toString());
      if (sort === "matches") {
        const recipes = await Recipe.find({
          tags: {
            $in: tagId,
          },
        });

        const sortedRecipes = recipes
          .map((recipe) => ({
            ...recipe.toObject(),
            matchingTagsCount: recipe.tags.filter((tag) => tagId.includes(tag))
              .length,
          }))
          .sort((a, b) => b.matchingTagsCount - a.matchingTagsCount)
          .slice(0, parseInt(limit));
        return new Response(JSON.stringify(sortedRecipes), { status: 200 });
      } else {
        const recipes = await Recipe.find({
          tags: {
            $in: tagId,
          },
        })
          .sort(
            sort === "ratings_positive" || sort === "calories"
              ? { [sort]: -1 }
              : sort
          )
          .limit(parseInt(limit));
        return new Response(JSON.stringify(recipes), { status: 200 });
      }
    } else if (search) {
      const recipes = await Recipe.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { keywords: { $regex: search, $options: "i" } },
        ],
      })
        .sort(
          sort === "ratings_positive" || sort === "calories"
            ? { [sort]: -1 }
            : sort
        )
        .limit(parseInt(limit));
      return new Response(JSON.stringify(recipes), { status: 200 });
    } else {
      const recipes = await Recipe.find()
        .sort(
          sort === "ratings_positive" || sort === "calories" ? sort - 1 : sort
        )
        .limit(parseInt(limit));
      return new Response(JSON.stringify(recipes), { status: 200 });
    }
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
