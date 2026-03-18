interface HotPostPropos {
    post?: Post
}

const Hot = ({ post }: HotPostPropos) => {
    const { title = "--" , imageUrl = "/images/teams/lakers.png"} = post || {};
    return (
            <div className="sm:w-100 py-2 flex flex-col items-center">
                <span className="w-full text-gray-400  md:text-l font-bold mb-4 ml-4">Mon. Mar 16, 6:30 PM PDT</span>
                <div className="w-full flex flex-col font-bold text-sm">
                    <img src={imageUrl} alt="Lakers" className="rounded-lg mb-6 sm:w-140 lg:w-150 xl:w-150 object-cover" />
                    <h2 className="text-lg font-bold mb-2">{title}</h2>
                </div>
            </div>
    );
};

export default Hot