import { getPost } from "@/services/post";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const UseQueryPost = () => {
    const { id } = useParams();
    // 從點擊的頁面url取得[id] 的內容
    // => 取得的id對應
    // => (post頁面設計資料夾名[id])


    return useQuery({
        // 幫助 useQuery 打上身分證 => 專案透過身分證找到幫助useQuery
        queryKey: ["post", id],
        queryFn: () => getPost(id as string),
    });
};

export default UseQueryPost