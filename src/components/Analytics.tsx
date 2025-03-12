import driver from './../assets/driver1.png';
import { motion } from 'framer-motion';

const Analytics = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white py-16 px-4"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">
                <motion.img 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-[500px] mx-auto my-4" 
                    src={driver} 
                    alt="driver" 
                />
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col justify-center items-center"
                >
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="uppercase text-[#00df9a] font-bold sm:text-center"
                    >
                        Data analytics dashboard
                    </motion.p>
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="md:text-4xl sm:text-3xl sm:text-center text-2xl font-bold py-2"
                    >
                        Manage Data Analytics Centrally
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda quo doloribus dolorum illum, excepturi animi porro voluptate deleniti totam vitae, laudantium voluptatibus sint possimus ex blanditiis dolores pariatur inventore.
                    </motion.p>
                    <motion.button 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 0.9 }}
                        className='text-[#00df9a] bg-black w-[200px] px-6 py-4 mt-8 font-medium rounded-md hover:bg-[#00c48c] mx-auto md:mx-0 hover:text-black'
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Analytics;