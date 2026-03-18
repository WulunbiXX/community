"use client";

import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface PaginationProps {
    totalPages: number
}

const Pagination = ({ totalPages }: PaginationProps) => {
    // 初始設置分頁 = 1
    const currentpage = useSearchParams().get("page") || "1";
    return (
        <div className="flex gap-4 text-sm font-semibold">
            {Array.from({ length: totalPages }).map((_, index) => (
                <Link
                    key={index}
                    href={`?page=${index + 1}`}
                    className={`${currentpage === `${index + 1}` ? "text-white" : "text-white/50"}`}
                >
                    {index + 1}
                </Link>
            ))}
        </div>
    );
};

export default Pagination