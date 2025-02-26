import React from 'react';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
    
    const handleUsers = () => {
        console.log('Users');
        
    };

    const typedRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['BTB', 'BTC', 'SASS'],
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
        <div className='text-white'>
            <div className='max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center items-center'>
                <p className='text-[#00df9a] font-bold p-2 uppercase'>Growing with data analytics</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow With Data.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-3xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                    <span className='md:text-5xl sm:text-3xl text-xl font-bold pl-2' ref={typedRef}></span>
                </div>

                <p className='md:text-2xl text-xl mx-4 font-bold text-gray-500 text-center'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>

                <button onClick={handleUsers} className='bg-[#00df9a] text-black px-6 py-4 my-8 font-medium rounded-md hover:bg-[#00c48c]'>Get Started</button>
            </div>
        </div>
    );
};

export default HeroSection;