import { BUSINESS_STATUE_CODE, DB_NAME } from "@/config/constant";
import clientPromise from "@/lib/mododb";
import { apiHandling } from "@/utils/apiHandling"
import { success } from "@/utils/apiResponse"
import { error } from "console";
import { NextRequest } from "next/server"
import {v4 as uuid4} from "uuid"

export const POST = apiHandling(async (request: NextRequest) => {
    const body = await request.json();
    const { title, content } = body;
    if (!title || !content) {
        return Response.json(
            error("Title and content are required", BUSINESS_STATUE_CODE.WARNING),
            { status: 400 },
        )
    }

    const client = await clientPromise
    const db = client.db(DB_NAME)
    const collection = db.collection("posts")
    const result = await collection.insertOne({ title, content, createtime: new Date().getTime(), id: uuid4() });
    return Response.json(
        success({ id: result.insertedId }),
        { status: 200 },
    );
})