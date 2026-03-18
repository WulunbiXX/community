import { getHotPostList } from "@/services/post";
import { useQuery } from "@tanstack/react-query";

const UseQueryHotPosts = () => {

    return useQuery({
        queryKey: ["hotpost"],
        queryFn: () => getHotPostList("3"),
    });
};

export default UseQueryHotPosts