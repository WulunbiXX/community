"use client";
import Player from "@/components/Player";
import UseQueryMember from "@/hooks/use-query-member";
import { useRouter } from "next/navigation";


const Content = () => {
    const router = useRouter();
    const { data, isPending, error} = UseQueryMember()

    return (
        <div className="w-full justify-center items-start h-full p-5">
            <button
                onClick={() => router.back()}
                className="text-sm text-white font-bold"
            >
                {"← Back"}
            </button>
            <Player player = {data}/>
        </div>  
    );
};

export default Content