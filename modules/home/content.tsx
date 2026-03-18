"use client"

import Image from "next/image";
import CommentBtn from "@/modules/home/comment-botton"
import PostList from "@/modules/home/post-list"
import Headline from "./headline";
import { useRouter} from "next/navigation";
import NavSquare from "@/components/NavSquare";

const Content = () => {
    const router = useRouter();

    return (
        <div className="w-full flex justify-center items-start h-full">
            <div className="w-full flex flex-col">
                <Image
                    src="/images/lakers.jpg"
                    className="w-full rounded-lg border border-white/10 mb-6 object-cover"
                    width={1584}
                    height={396}
                    alt="community banner"
                />

                <div className="w-full flex flex-col px-5 md:px-0">
                    <NavSquare/>
                    <div className="w-full mt-8">
                        <CommentBtn />
                    </div>

                    <PostList />
                </div>
                <button
                    onClick = {() => router.push("/lakers")}
                    className="w-full py-3 mt-6 text-sm font-bold text-white rounded-lg bg-[#232323] hover:bg-[#333333] cursor-pointer"
                >
                        View Lakers Community
                </button>
            </div>
            <Headline />
        </div>
    );
};

export default Content;