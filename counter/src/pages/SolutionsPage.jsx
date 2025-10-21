import Navbar from "../components/Navbar"
import FormPage from "../components/Form"

function SolutionsPage(){
    return (
        <>
            <Navbar />
            <div className="px-20 py-10 bg-gray-200 text-center max-w-7xl w-full mx-auto space-x-4 flex">
                <div className="w-1/3 bg-gray-400 text-center py-10 rounded-md">Fast</div>
                <div className="w-1/3 bg-gray-400 text-center py-10 rounded-md">Secure</div>
                <div className="w-1/3 bg-gray-400 text-center py-10 rounded-md">Available</div>
            </div>
            <FormPage />
            
        </>
    )
}

export default SolutionsPage