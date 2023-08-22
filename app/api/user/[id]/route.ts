import { NextRequest } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import User from "@/lib/models/user.model";

export const GET = async (req: NextRequest, { params }) => {
  try {
    await connectToDB();
    const user = await User.findById(params.id);
    if (!user) return new Response("Not found", { status: 404 });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
