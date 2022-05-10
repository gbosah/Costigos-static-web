import React from 'react';

const Selectpic = (props) => {
    return (
        <div className='relative'>
            <img className='w-full h-full object-cover' src={props.bg} alt="/" />
            <div className='w-full h-full absolute left-0 top-0 bg-gray-900/30'>
                <p className='left-4 bottom-4 absolute font-bold text-2xl text-white'>{props.text}</p>
            </div>
        </div>
    );
};

export default Selectpic;