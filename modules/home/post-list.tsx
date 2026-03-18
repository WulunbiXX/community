"use client";
import Link from "next/link";
import Post from "@/components/Post"
import Pagination from "@/modules/home/Pagination";
import UseQueryPostList from "@/hooks/use-query-post-list";

// const testPost: Post[] = [
//     {
//         id: "1",
//         title: "Post1",
//         content: "Content1",
//         createtime: 0,
//     }
// ];

const PostList = () => {
    const { data, isLoading, error } = UseQueryPostList();
    const { posts = [], totalPages } = data || {};
    return (
        <div className="mt-8">
            {isLoading && <div>Loading...</div>}
            {error && <div>Error:{error.message}</div>}
            {!isLoading && posts.length === 0 && <div>No Posts</div>}
            {!isLoading && posts.map((post: Post) => (
                <Link key={post.id} href={`/post/${post.id}`}>
                    <Post post={post} />
                </Link>
            ))}
            <div className="mt-8">
                <Pagination totalPages={totalPages} />
            </div>
        </div>

    )
}

export default PostList