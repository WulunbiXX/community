import { NextRequest } from "next/server";
import { error } from "@/utils/apiResponse"
import { BUSINESS_STATUE_CODE } from "@/config/constant";

export function apiHandling(
    handler: (req: NextRequest) => Promise<Response>,
    defaultStatus = BUSINESS_STATUE_CODE.ERROR,
) {
    return async (req: NextRequest) => {
        try {
            return await handler(req);
        }
        catch (err: any) {
            console.error("API Error:", err);
            return Response.json(
                error(err.message || "Internal Server Error", defaultStatus),
                { status: defaultStatus },
            );
        }
    }
}