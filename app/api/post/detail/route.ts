import { NextRequest } from "next/server";
import { apiHandling } from "@/utils/apiHandling";
import { success, error } from "@/utils/apiResponse";
import clientPromise from "@/lib/mododb";
import { DB_NAME } from "@/config/constant";

export const GET = apiHandling(async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return Response.json(error("Id is required"), {
      status: 400,
    });
  }

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection("posts");
  const post = await collection.findOne({ id });
  if (!post) {
    return Response.json(error("Post not found"), {
      status: 404,
    });
  }
  await collection.updateOne({ id }, { $inc: { views: 1 } });

  return Response.json(success(post), {
    status: 200,
  });
});
