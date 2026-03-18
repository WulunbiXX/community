"use client";

import { useState } from "react";
import CommentEditor from "@/modules/home/comment-editor"

const CommentBtn = () => {
    const [IsOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="w-full h-[32px] flex justify-center items-center rounded-lg bg-white rounded-ld p-4 text-sm text-black font-bold cursor-pointer"
            >
                Write a Post
            </button>
            <CommentEditor IsOpen={IsOpen} setIsOpen={setIsOpen}/>
        </>
    );
};

export default CommentBtn