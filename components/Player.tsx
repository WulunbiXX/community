import Image from "next/image";
interface MemberPropos {
    player?: Player
}

const Player = ({ player }: MemberPropos) => {
    const { name = "--", birth = "-", from = "-", height = "-", number = "-", position = "-", pro = 0, weight = "-", imageUrl = "/images/players/default.png" } = player || {};
    return (
        <div className="w-full flex justify-between border-b border-white/10 py-10">
            <div className="space-y-10 py-5">
                <div className="flex space-x-5">
                    <h3 className="text-5xl text-white font-bold">{name}</h3>
                    <div className="border"></div>
                    <p className="text-xl text-white mt-2">{number}</p>
                </div>
                <div className="flex space-x-10">
                    <div className="">
                        <p>Weight</p>
                        <p className="text-xl text-white/80">{height}</p>
                    </div>
                    <div className="">
                        <p>Height</p>
                        <p className="text-xl text-white/80">{weight}</p>
                    </div>
                </div>
                <div className="flex text-s border-b text-white/50"><p> Date of Birth : </p> {birth} </div>
                <div className="flex text-s border-b text-white/50"><p>From : </p>{from}</div>
                <div className="flex text-s border-b text-white/50"><p>Position : </p>{position}</div>
                <div className="flex text-s border-b text-white/50"><p>Years Pro : </p>{pro}</div>
            </div>
            <div className="w-auto ml-2">
                <Image
                    src={imageUrl}
                    alt="player"
                    width={400}
                    height={500}
                    className="object-cover"
                />

            </div>
        </div>
    );
};

export default Player