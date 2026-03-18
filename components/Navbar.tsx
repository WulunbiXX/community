import Link from "next/link";
import { navItems } from "@/config/constant"

const Navbar = () => {
    return (
        <nav className="w-full self-start p-4 rounded-lg">
            <ul className="bg-white/10 p-4 text-sm rounded-lg text-white font-bold">
                {navItems.map((item) => (
                    <li key={item.name} className="w-full cursor-pointer flex items-center rounded-lg hover:bg-white/20">
                        <Link href={item.href} className="w-full h-[60px] px-10 text-white hover:text-gray-900 flex items-center">
                            {item.icon && <item.icon className="w-5 h-5 inline-block mr-2" />}
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar