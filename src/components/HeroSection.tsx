import React from 'react';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
    
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/signup');
    }

    const typedRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['SAFE', 'SMART', 'with NO REGETS'],
            startDelay: 300,
            typeSpeed: 120,
            backSpeed: 140,
            backDelay: 1000,
            loop: true,
            //showCursor: true,
        });
        return () => {
            typed.destroy();
        };
    }
    , []);

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='text-white'
        >
            <div className='max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center items-center'>
                <motion.p 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='text-[#00df9a] font-bold p-2 uppercase sm:text-2xl'
                >
                    Too Many Drinks? We've Got the Wheel.
                </motion.p>
                
                <motion.h1 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='md:text-4xl text-center text-4xl font-bold md:py-6'
                >
                    Because Every Life Matters Get Home Safe.
                </motion.h1>
                
                <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className='flex justify-center items-center'
                >
                    <p className='md:text-5xl sm:text-3xl text-xl font-bold py-4'>Ride</p>
                    <span className='md:text-5xl sm:text-3xl text-xl font-bold pl-2' ref={typedRef}></span>
                </motion.div>

                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className='md:text-2xl text-xl mx-4 font-bold text-gray-500 text-center'
                >
                    One Ride Can Save a Life — Yours or Someone Else's. <br />
                    One Choice Can Change Everything — Choose Safety.
                </motion.p>

                <motion.button 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 1 }}
                    onClick={handleGetStarted} 
                    className='bg-[#00df9a] text-black px-6 py-4 my-8 font-medium rounded-md hover:bg-[#00c48c]'
                >
                    Get Started
                </motion.button>
            </div>
        </motion.div>
    );
};

export default HeroSection;