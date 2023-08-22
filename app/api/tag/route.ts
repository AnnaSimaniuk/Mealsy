import { NextRequest } from "next/server";
import { connectToDB } from "../../../lib/mongoose";
import Tag from "../../../lib/models/tag.model";
import { ITag } from "../../../types/ITag";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();
    const uniqueTagsType = req.nextUrl.searchParams.get("unique-type");
    const res: ITag[] = await Tag.find({});
    if (uniqueTagsType) {
      return new Response(
        JSON.stringify([...new Set(res.map((tag) => tag.type))]),
        { status: 200 }
      );
    }
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};
