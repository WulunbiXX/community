"use client";
import UseQueryHotPosts from "@/hooks/use-query-hot-post";
import Link from "next/link";
import Hot from "@/components/HotPost";


const HotPost = () => {
    const { data, isLoading, error } = UseQueryHotPosts();
    const { posts = [] } = data || {};
    return (
        <div className="w-full h-full flex flex-col text-white p-4 rounded-lg mb-6">
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {!isLoading && !error && posts.length === 0 && <div>No posts found.</div>}
            {!isLoading && !error && posts.map((post: Post) => (
                <Link key={post.id} href={`/post/${post.id}`} className="w-full border-b border-white/10 py-6">
                    <Hot post={post} />
                </Link>
            ))}
        </div>
    )
}

export default HotPost; 