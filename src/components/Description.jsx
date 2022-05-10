import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Description = () => {
    return (
        <div className='max-w-[1240px] grid lg:grid-cols-3 mx-auto gap-4 px-4 py-16'>
            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                <h2>Get your best shoes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Tempora dolores assumenda soluta ad. 
                  Modi, molestias harum magnam quas nam exercitationem quod. 
                  Aliquam repellat quidem atque, repudiandae ullam eaque vel dolor.
                  </p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 py-4'>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <RiCustomerService2Fill size={50} />
                        </button>
                        <div>
                            <h3 className='text-2xl py-2'>LEADING SERVICE</h3>
                            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <MdOutlineTravelExplore size={50} />
                        </button>
                        <div>
                            <h3 className='text-2xl py-2'>We are everywhere</h3>
                            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='border text-center'>
                    <p className='pt-4'>GET AN ADDITIONAL 10% OFF</p>
                    <p className='py-4'>12 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200 py-2'>Buy NOW AND SAVE</p>
                </div>
                <form className='w-full'>
                    <div className='flex flex-col pt-4'>
                    <label>Location</label>
                    <select>
                        <option>Anambra</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Enugu</option>
                    </select>
                    </div>
                    <div className='flex flex-col my-4'>
                        <label>Start Date</label>
                        <input type="date" className='border rounded-md p-2' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label>Start Date</label>
                        <input type="date" className='border rounded-md p-2' />
                    </div>
                    <button className='w-full my-4'>Buy Now</button>
                </form>
            </div>
        </div>
    );
};

export default Description;