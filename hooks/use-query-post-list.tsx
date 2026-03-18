import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import { getPostList } from "@/services/post";

const UseQueryPostList = () => {
    const searchParams = useSearchParams()
    const currentPage = searchParams.get("page") || "1";

    return useQuery({
        // 幫助 useQuery 打上身分證 => 專案透過身分證找到幫助useQuery
        queryKey: ["posts", currentPage],
        // 
        queryFn: () => getPostList(currentPage),
    });
};

export default UseQueryPostList