import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import shoevid from '../assets/shoevid.mp4'

const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <video src={shoevid} 
            autoPlay 
            loop muted
            className='w-full h-full object-cover'/>

            <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
                <div className='absolute top-0 flex w-full h-full p-3 text-white flex-col justify-center text-center'>
                    <h1>Best designer Shoes</h1>
                    <h2 className='py-4'>Top in the market</h2>
                    <form className='w-full flex justify-between items-center max-w-[700px]
                    mx-auto border rounded-md p-1 text-black bg-gray-100'>
                    <div>
                        <input type="text" 
                        placeholder='search items'
                        className='bg-transparent focus:outline-none w-[300px] sm:w-[400px] font-[poppins]'/>
                    </div>
                    <div>
                        <button><AiOutlineSearch size={20}/></button>
                    </div>
                </form>
                </div>
        </div>
        
    );
};

export default Hero;