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
        <div className='text-white'>
            <div className='max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center items-center'>
                <p className='text-[#00df9a] font-bold p-2 uppercase sm:text-2xl'>Too Many Drinks? We've Got the Wheel.</p>
                <h1 className='md:text-5xl text-center text-4xl font-bold md:py-6'>Because Every Life Matters Get Home Safe.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-3xl text-xl font-bold py-4'>Ride</p>
                    <span className='md:text-5xl sm:text-3xl text-xl font-bold pl-2' ref={typedRef}></span>
                </div>

                <p className='md:text-2xl text-xl mx-4 font-bold text-gray-500 text-center'>One Ride Can Save a Life — Yours or Someone Else’s. <br />One Choice Can Change Everything — Choose Safety.</p>

                <button onClick={handleUsers} className='bg-[#00df9a] text-black px-6 py-4 my-8 font-medium rounded-md hover:bg-[#00c48c]'>Get Started</button>
            </div>
        </div>
    );
};

export default HeroSection;