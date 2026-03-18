import { BsPerson } from "react-icons/bs";
import Bell from "@/components/Bell"
import Link from "next/link";

const Header = () => {
    return (
        <div className="w-full sticky top-0 left-0 bg-black/10 backdrop-blur-sm border-b border-white/10 z-10">
            <header className="w-full max-w-[1320px] h-15 md:h-20 px-5 md:px-10 mx-auto flex items-center md:text-2xl font-bold">
                <div className="min-w-[100px] font-bold text-white">
                    Community
                </div>
                <div className="min-w-[30px] ml-auto flex justify-end shrink-0 items-center space-x-1 md:space-x-5">
                    <Bell />
                    <div className="relative">
                        <button className="size-7 md:size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                            <BsPerson/>
                        </button>
                    </div>
                    <button className="ml-0 btn rounded-full bg-white/10 border border-white/20 hover:bg-white/30">
                        <Link href="/login">Join</Link>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header