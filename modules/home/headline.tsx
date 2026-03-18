"use client"
import UseQueryHeadlinePost from "@/hooks/use-query-headline-post";
import Link from "next/link";

const Headline = () => {
    const { data, isLoading, error } = UseQueryHeadlinePost();
    const { posts = [] } = data || {};


    return (
        <div className="hidden lg:block w-100 h-auto self-start p-4">
            <div className="w-full flex h-full">
                <div className="ml-4 text-l font-bold text-white flex items-center">
                    HEADLINES
                </div>
            </div>
            <div className="w-full h-full mt-6">
                {isLoading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {!isLoading && !error && posts.length === 0 && <div>No posts found.</div>}
                {!isLoading && !error && posts.map((post: Post) => (
                    <Link key={post.id} href={`/post/${post.id}`}>
                        <div key={post.id} className="w-full mb-4 p-4 bg-white/10 rounded-lg">
                            <h3 className="text-sm font-bold text-white">{post.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Headline