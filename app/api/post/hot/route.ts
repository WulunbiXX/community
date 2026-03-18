import { DB_NAME } from "@/config/constant";
import clientPromise from "@/lib/mododb";
import { apiHandling } from "@/utils/apiHandling";
import { success } from "@/utils/apiResponse";
import { NextRequest } from "next/server";

export const GET = apiHandling(async (request: NextRequest) => {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection("posts");
    const total = await collection.countDocuments();

    const posts = await collection
        .find({})
        .sort({ views: -1 })
        .limit(3)
        .toArray();

    return Response.json(
        success({
            posts,
            total,
        }),
        {
            status: 200,
        }
    );
});
