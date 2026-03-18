import { BUSINESS_STATUE_CODE } from "@/config/constant"

export function success<T>(
    data: T,
    message = "SUCCESS",
    statue = BUSINESS_STATUE_CODE.SUCCESS,
) {
    return { statue, message, data }
}

export function error(
    message = "Internal Server Error",
    statue = BUSINESS_STATUE_CODE.ERROR,
    data: any = null,
) {
    return { statue, message, data }
}