const Schdule = () => {
    return (
        <div className="w-full items-start h-full">
            <div className="sm:w-100 py-2 flex flex-col items-center">
                <span className="w-full text-gray-400  md:text-l font-bold mb-4 ml-4">Mon. Mar 16, 6:30 PM PDT</span>
                <div className="w-full flex flex-col font-bold text-sm">
                    <div className="flex justify-center items-center">
                        <span className="text-gray-400 flex flex-col items-center">
                            <img src="/images/teams/lakers.png" alt="Lakers" className="size-8 sm:size-12 lg:size-16 mr-1 inline-block" />
                            LAKERS
                        </span>
                        <div className="w-full flex flex-1 justify-between items-center px-4">
                            <span className="text-gray-400">125</span>
                            <span className="text-gray-400">Final</span>
                            <span className="text-gray-400">127</span>
                        </div>
                        <span className="text-gray-400 flex flex-col items-center">
                            <img src="/images/teams/nuggets2.png" alt="Rockets" className="size-8 sm:size-12 mr-1 inline-block" />
                            Nuggets
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schdule