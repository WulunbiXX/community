interface PostPropos {
    post?: Post
}

const Post = ({ post }: PostPropos) => {
    const { title = "--", content = "-", createtime = 0 } = post || {};
    return (
        <div className="w-full border-b border-white/10 py-6">
            <h3 className="text-sm text-white font-bold">{title}</h3>
            <p className="text-sm text-white/50 mt-2">{content}</p>
            <p className="text-xs text-white/50 mt-2">
                {new Date(createtime).toLocaleString()}
            </p>
        </div>
    );
};

export default Post