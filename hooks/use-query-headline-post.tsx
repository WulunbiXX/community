import { getHeadlinePostList } from "@/services/post";
import { useQuery } from "@tanstack/react-query";

const UseQueryHeadlinePost = () => {

    return useQuery({
        queryKey: ["headline-post"],
        queryFn: () => getHeadlinePostList("1", "5"),
    });
};

export default UseQueryHeadlinePost