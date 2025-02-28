const Cards = () => {
    return(
        <div className="w-full py-[10rem] px-4 bg-gray-100">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src="profile.png" alt="profile" />
                    <h2 className="text-2xl font-bold text-center py-4">User Name</h2>
                    <p className="text-xl font-medium text-center py-2 border-b">User Email</p>
                    <p className="text-xl font-medium text-center py-2 border-b">User Role</p>
                    <button className='text-[#00df9a] bg-black w-[200px] px-6 py-4 mt-8 font-medium rounded-md hover:bg-[#00c48c] mx-auto hover:text-black'>Start trial</button>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src="profile.png" alt="profile" />
                    <h2 className="text-2xl font-bold text-center py-4">User Name</h2>
                    <p className="text-xl font-medium text-center py-2 border-b">User Email</p>
                    <p className="text-xl font-medium text-center py-2 border-b">User Role</p>
                    <button className='text-[#00df9a] bg-black w-[200px] px-6 py-4 mt-8 font-medium rounded-md hover:bg-[#00c48c] mx-auto hover:text-black'>Start trial</button>
                </div>

                <div className="w-full shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src="profile.png" alt="profile" />
                    <h2 className="text-2xl font-bold text-center py-4">User Name</h2>
                    <p className=" py-2 border-b text-xl font-medium text-center">User Email</p>
                    <p className="text-xl font-medium text-center py-2 border-b">User Role</p>
                    <button className='text-[#00df9a] bg-black w-[200px] px-6 py-4 mt-8 font-medium rounded-md hover:bg-[#00c48c] mx-auto hover:text-black'>Start trial</button>
                </div>
            </div>

        </div>
    )
}

export default Cards;