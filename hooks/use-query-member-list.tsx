import { useQuery } from "@tanstack/react-query"
import { getMembers } from "@/services/member";

const UseQueryMemberList = () => {

    return useQuery({
        // 幫助 useQuery 打上身分證 => 專案透過身分證找到幫助useQuery
        queryKey: ["members"],
        // 
        queryFn: () => getMembers(),
    });
};

export default UseQueryMemberList