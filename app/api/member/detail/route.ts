import { NextRequest } from "next/server";
import { apiHandling } from "@/utils/apiHandling";
import { success, error } from "@/utils/apiResponse";
import clientPromise from "@/lib/mododb";
import { DB_NAME } from "@/config/constant";
import { ObjectId } from "mongodb";

export const GET = apiHandling(async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("_id");
  if (!id) {
    return Response.json(error("Id is required"), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection("rosters");

  const player = await collection.findOne({ _id: new ObjectId(id) });
  if (!player) {
    return Response.json(error("Player not found"), { status: 404 });
  }

  return Response.json(success(player), { status: 200 });
});
