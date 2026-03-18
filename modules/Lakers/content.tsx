"use client"

import Image from "next/image"
import Schdule from "@/modules/Lakers/schedule"
import { IoIosArrowDroprightCircle } from "react-icons/io";
import HotPost from "@/modules/Lakers/hot-post"
import NavSquare from "@/components/NavSquare";


const Content = () => {

    return (
        <div className="w-full justify-center items-start h-full">
            <h1 className="text-xl md:text-3xl font-bold p-4">Latest</h1>
            <NavSquare />
            <div className="w-full h-full flex flex-col text-white p-4 rounded-lg mb-10">
                <Schdule />
                <Image
                    src="/images/players/Luka-1.jpg"
                    alt="Lakers"
                    width={800}
                    height={400}
                    className="rounded-lg mb-6 sm:w-140 lg:w-150 xl:w-150 object-cover"
                />
                <div className="flex items-center text-sm font-bold">
                    <IoIosArrowDroprightCircle />
                    <span className="ml-2">Luka Doncic 在加時賽還剩0.5秒時投進致勝球</span>
                </div>
            </div>

            <h1 className="text-xl md:text-3xl font-bold p-4">Most Popular</h1>
            <HotPost />

            <p className="text-lg text-gray-600">
                Stay tuned for updates on the team, game highlights, and exclusive content. Whether you're a die-hard fan or just getting into basketball, there's something for everyone in the Lakers community!
            </p>
        </div>

    )
}

export default Content;