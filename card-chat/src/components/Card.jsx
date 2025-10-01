function Card({message, index}){

    return(
        <div key={index} className='bg-gray-200 rounded-md p-4'>
            <h3>{message}</h3>
        </div>
    )

}

export default Card;