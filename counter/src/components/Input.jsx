function Input({setName, company}){
    return(
        <div className="bg-green-400 h-30 px-10 py-10">
            <label>Company: {company}</label>
            <input 
            onChange={
                (e) => {
                    console.log("Event: ", e)
                    setName(e.target.value)
                }
            } 
            className="bg-white px-8 py-4 w-full rounded-md" type="text" placeholder="Enter Company Name" />
        </div>
    )
}

export default Input;