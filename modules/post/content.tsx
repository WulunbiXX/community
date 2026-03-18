"use client";
import Post from "@/components/Post";
import UseQueryPost from "@/hooks/use-query-post";
import { useRouter } from "next/navigation";

// const testPost: Post = {
//     id: "1",
//     title: "Post 1",
//     content: "Content 1",
//     createtime: 0,
// }

const Content = () => {
    const router = useRouter();
    const { data, isPending, error} = UseQueryPost()

    return (
        <div className="w-full justify-center items-start h-full p-5">
            <button
                onClick={() => router.back()}
                className="text-sm text-white font-bold"
            >
                {"← Back"}
            </button>
            <Post post={data} />
        </div>  
    );
};

export default Content