import React from 'react';
import shoe1 from '../assets/shoe1.jpg'
import shoe2 from '../assets/shoe2.jpg'
import shoe3 from '../assets/shoe3.jpg'
import shoe4 from '../assets/shoe4.jpg'
import shoe5 from '../assets/shoe5.jpg'
import shoe6 from '../assets/shoe6.jpg'
import Selectpic from './Selectpic';

const Select = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

         <Selectpic bg={shoe1} text={'Timber'}/>
         <Selectpic bg={shoe2} text={'Leather Shoe'}/>
         <Selectpic bg={shoe3} text={'Sneeker'}/>
         <Selectpic bg={shoe4} text={'Tiger Leather'}/>
         <Selectpic bg={shoe5} text={'Multi Coloured'}/>
         <Selectpic bg={shoe6} text={'Safety Shoe'}/>

        </div>
    );
};

export default Select;