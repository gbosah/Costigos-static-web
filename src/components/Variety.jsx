import React from 'react';
import shoe1 from '../assets/shoe1.jpg'
import shoe2 from '../assets/shoe2.jpg'
import shoe3 from '../assets/shoe3.jpg'
import shoe4 from '../assets/shoe4.jpg'
import shoe5 from '../assets/shoe5.jpg'

const Variety = () => {
    return (
        <div className='max-w-[1240px] mx-auto text-center px-4 py-16'>
            <h2>Best quality shoes</h2>
            <p className='py-4'>Make your feet look beautiful</p>
            <div className='grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4 py-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={shoe1} alt="/" />
                <img className='w-full h-full object-cover' src={shoe2} alt="/" />
                <img className='w-full h-full object-cover' src={shoe3} alt="/" />
                <img className='w-full h-full object-cover' src={shoe4} alt="/" />
                <img className='w-full h-full object-cover' src={shoe5} alt="/" />
            </div>
        </div>
    );
};

export default Variety;