import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const slider = [
    {
        url:'https://images.unsplash.com/photo-1472591651607-70e2d88ae3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    },

    {
        url:'https://images.unsplash.com/photo-1575583153865-d6c30eb00e87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },

    {
        url:'https://images.unsplash.com/photo-1575932150875-d31ebc835f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    }
]

const Slide = () => {
      
    const [slide, setSlide] = useState(0)

    const length = slider.length

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }

    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }

    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center'>

           <BsArrowLeftSquareFill onClick={prevSlide}
           className='absolute top-[50%] left-8 md:left-[250px] text-white text-2xl cursor-pointer' />

           <BsArrowRightSquareFill onClick={nextSlide}
           className='absolute top-[50%] right-8 md:right-[250px] text-white text-2xl cursor-pointer'/>
            {slider.map((items, index) => (
            <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide &&(
                <img className='w-full rounded-md' src={items.url} alt="/" />
                )}
            </div>
            ))}  
        </div>
    );
};

export default Slide;