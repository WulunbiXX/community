"use client";

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addPost } from '@/services/post';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';


interface CommentEditorProps {
    IsOpen: boolean;
    setIsOpen: (IsOpen: boolean) => void;
}

const commentEditor = ({ IsOpen, setIsOpen }: CommentEditorProps) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const queryClient = useQueryClient()
    const searchParams = useSearchParams()
    const currentPage = searchParams.get("page") || "1";
    const router = useRouter();

    const { mutate: addPostMutation, isPending } = useMutation({
        mutationFn: addPost,
        onSuccess: () => {
            setIsOpen(false);
            queryClient.invalidateQueries({ queryKey: ["posts", currentPage] });
            if (currentPage !== "1") {
                router.push(`/?page=1`)
            }
        },
        // 使用queryClient刷新內容, 引用queryKey的設定, 並刷新在第一頁(沒有跳轉)
    });

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }

    const onPost = () => {
        if (isPending) return;
        if (!title || !content) {
            alert("未填寫任何內容")
            return;
        }
        addPostMutation({ title, content })
    }

    return (
        <Dialog open={IsOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-[#131313] p-12">
                    <DialogTitle className="font-bold text-white">
                        Write a Post
                    </DialogTitle>
                    <input
                        placeholder='Title'
                        className='w-full h-[60px] border text-sm text-white border-white/10 rounded-md p-2 focus:outline-none'
                        value={title}
                        onChange={onTitleChange}
                    />
                    <textarea
                        placeholder='Enter Post Detail'
                        className='w-full h-[100px] border text-sm text-white border-white/10 rounded-md p-2 focus:outline-none'
                        value={content}
                        onChange={onContentChange}
                    />
                    <div className="flex gap-4 text-sm justify-end">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/50 font-bold cursor-pointer"
                        >
                            取消
                        </button>
                        <button
                            className="text-white font-bold cursor-pointer"
                            onClick={onPost}
                            disabled={isPending}
                        >
                            {isPending ? "上傳中..." : "上傳"}
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default commentEditor