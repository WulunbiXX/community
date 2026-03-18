import { navItems } from "@/config/constant"

const NavSquare = () => {
    return (
        <div className="overflow-hidden overflow-x-auto no-scrollbar lg:hidden lg:mb-30 px-2">
            <div className="flex space-x-5">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="flex-shrink-0 px-12 py-4 text-sm font-bold text-white rounded-lg bg-white/10 hover:bg-white/20"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default NavSquare