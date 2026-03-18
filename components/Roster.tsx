import Image from 'next/image';

interface MemberListResponse {
    members?: Member;
}

const Roster = ({ members }: MemberListResponse) => {
        const { name = "--", position = "-", number = "-" , imageUrl = "/images/players/default.png" } = members || {};

    return (
        <div className="h-full flex flex-col items-center justify-center border border-white/20 rounded-lg p-2 rounded-12">
            <div className="text-lg font-semibold flex items-center">
                {name}
                <div className="ml-2 bg-white text-black px-2 py-1 rounded-full">{number}</div>
                <div className="ml-2 bg-white text-black px-2 py-1 rounded-full">{position}</div>
            </div>
            <figure className="md:w-40 md:h-60 h-full mt-4">
                <Image
                src={imageUrl}
                alt="player"
                width={500}
                height={700}
                className="w-full h-full object-cover"
                />
            </figure>
        </div>
    )
}

export default Roster