import { DB_NAME } from "@/config/constant";
import clientPromise from "@/lib/mododb";
import { apiHandling } from "@/utils/apiHandling";
import { success } from "@/utils/apiResponse";
import { NextRequest } from "next/server";

export const GET = apiHandling(async (request: NextRequest) => {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get("page") || 1
    const limit = searchParams.get("limit") || 10

    const skip = (Number(page) - 1) * Number(limit);

    const client = await clientPromise
    const db = client.db(DB_NAME)
    const collection = db.collection("posts");
    const total = await collection.countDocuments();
    const posts = await collection
        .find({})
        .skip(skip)
        .limit(Number(limit))
        .sort({ createtime: -1 })
        .toArray();

    return Response.json(
        success({
            posts,
            total,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(total / Number(limit)),
        }),
        {
            status: 200,
        }
    );
})