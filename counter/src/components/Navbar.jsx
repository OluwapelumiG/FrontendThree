function Navbar(){
    return (
        <>
            <div className="w-full  h-10 bg-blue-800 ">
                <div className="flex justify-between items-center pt-1 max-w-7xl mx-auto">
                    <h4 className="text-xl text-white">We are the leading consultant firm!</h4>
                    <div className="flex space-x-2 text-xl">
                        <span className="rounded-full bg-blue-400 text-white w-6 h-6 text-center">F</span>
                        <span className="rounded-full bg-black text-white w-6 h-6 text-center">X</span>
                        <span className="rounded-full bg-pink-400 text-white w-6 h-6 text-center">P</span>
                        <span className="rounded-full bg-orange-400 text-white w-6 h-6 text-center">G</span>
                    </div>
                </div>
            </div>

            <div className="w-full  h-20 bg-white ">
                <div className="flex justify-between items-center pt-1 max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl">Charles</h1>
                        <p className="text-xs">BUSINESS CONSULTING</p>
                    </div>
                    
                    <div className="text-2xl space-x-4">
                        <a href="/" className="hover:text-blue-600 text-blue-600 ml-4">Home</a>
                        /
                        <a href="/about" className="hover:text-blue-600 ml-4">About</a>
                        /
                        <a href="/solutions" className="hover:text-blue-600 ml-4">Solutions</a>
                        /
                        <a className="hover:text-blue-600 ml-4">Case Studies</a>
                        /
                        <a className="hover:text-blue-600 ml-4">Shop</a>
                        /
                        <a className="hover:text-blue-600 ml-4">Contact</a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar;