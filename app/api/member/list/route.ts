import clientPromise from "@/lib/mododb";
import { apiHandling } from "@/utils/apiHandling";
import { NextRequest } from "next/server";
import { DB_NAME } from "@/config/constant";
import { success } from "@/utils/apiResponse";

export const GET = apiHandling(async (request: NextRequest) => {

    const client = await clientPromise
    const db = client.db(DB_NAME)
    const collection = db.collection("rosters");
    const members = await collection
    .find({})
    .sort({ priority: 1 })
    .toArray();

    return Response.json(
    success(members), 
    {
        status: 200,
    }
    );
})