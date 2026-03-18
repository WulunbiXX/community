import { Popover, PopoverButton, PopoverBackdrop, PopoverPanel } from '@headlessui/react'
import { FaRegBell } from "react-icons/fa";

const Bell = () => {
    return (
        <Popover className="relative">
            <PopoverButton className="size-7 md:size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"><FaRegBell /></PopoverButton>
            <PopoverPanel
                transition
                anchor="bottom"
                className="w-full h-full absolute md:relative z-20 md:w-80 md:h-100 
                bg-linear-45 from-indigo-500 via-purple-500 to-pink-500 text-black rounded-lg  
                transition duration-200 ease-in-out  data-closed:-translate-y-1
                data-closed:opacity-0
                divide-y divide-white/5 bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0
                "
            >
                <div className='w-full block border border-black/10 items-center px-3 py-2'>
                    <h1 className='text-xl md:text-xl font-semibold'>What's News</h1>
                </div>
                <div>
                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                        <p className="font-semibold text-white">Insights</p>
                        <p className="text-white/50">Measure actions your users take</p>
                    </a>
                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                        <p className="font-semibold text-white">Insights</p>
                        <p className="text-white/50">Measure actions your users take</p>
                    </a>
                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                        <p className="font-semibold text-white">Insights</p>
                        <p className="text-white/50">Measure actions your users take</p>
                    </a>
                </div>
            </PopoverPanel>
        </Popover>
    )
}


export default Bell