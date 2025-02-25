const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">
                <img className="w-[500px] mx-auto my-4" src="driver1.png" alt="driver" />
                <div className="flex flex-col justify-center">
                    <p className="uppercase text-[#00df9a] font-bold">Data analytics dashboard</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda quo doloribus dolorum illum, excepturi animi porro voluptate deleniti totam vitae, laudantium voluptatibus sint possimus ex blanditiis dolores pariatur inventore.</p>
                    <button className='text-[#00df9a] bg-black w-[200px] px-6 py-4 mt-8 font-medium rounded-md hover:bg-[#00c48c] mx-auto md:mx-0 hover:text-black'>Get Started</button>

                </div>

            </div>
            
        </div>
    );

}
export default Analytics;