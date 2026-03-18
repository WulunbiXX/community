import Navbar from "@/components/Navbar"
import Header from "./Header";


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="w-full max-w-[1320px] mx-auto flex justify-center items-start md:px-8 py-10">
                <div className="w-70 sticky top-25 left-0 mr-10 lg:block hidden">
                    <Navbar />
                </div>
                <main className="relative w-full md:max-w-[658px] lg:max-w-[758px] xl:max-w-[758px] flex justify-center items-center">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;