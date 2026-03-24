import { getPlayer } from "@/services/member";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const UseQueryMember = () => {
    const { id } = useParams();
    // 從點擊的頁面url取得[id] 的內容
    // => 取得的id對應


    return useQuery({
        // 幫助 useQuery 打上身分證 => 專案透過身分證找到幫助useQuery
        queryKey: ["member", id],
        queryFn: () => getPlayer(id as string),
    });
};

export default UseQueryMember