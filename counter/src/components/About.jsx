function About(){
    return (
        <>
            <div className="flex w-full max-w-7xl mx-auto py-20">
                <div className="w-[600px] h-[400px] border-gray-500 rounded-md border-1 bg-white">
                </div>
                <div className="text-center flex flex-col items-center max-w-2xl mx-auto px-2 space-y-6">
                    <h2 className="text-6xl">About this company</h2>
                    <p className="text-lg">
                        A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family.
                    </p>

                    <p className="text-lg">
                        The government they survive as soldiers of fortune baby if you've ever wondered the east side to a deluxe apartment.
                    </p>

                    <div className="w-full border-t-1 border-gray-800 grid grid-cols-3 justify-between py-2">
                        <div className="flex flex-col border-r-1 border-dashed border-gray-800">
                            <span className="text-7xl">V</span>
                            <span className="text-lg">Vision</span>
                        </div>
                        <div className="flex flex-col  border-r-1 border-dashed border-gray-800">
                            <span className="text-7xl">M</span>
                            <span className="text-lg">Mission</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-7xl">G</span>
                            <span className="text-lg">Goals</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;