import NavSquare from "@/components/NavSquare";
import MemberRoster from "./member-roster";


const Content = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-2xl font-bold text-white">
            <div className="w-full">
                <h1 className="text-xl items-center md:text-3xl font-bold p-4">Lakers Roster</h1>
                <NavSquare/>
                <MemberRoster />
            </div>
        </div>
    )
}

export default Content;