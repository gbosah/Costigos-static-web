import React from 'react';
import { FaFacebook,
    FaTwitter,
   FaYoutube,
   FaInstagram,
   FaPinterest } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='w-full bg-gray-100 py-16'>
            <div className='max-w-[1240px] flex flex-col px-4 mx-auto'>
               <div className='sm:flex justify-between text-center items-center'>
                   <h2>Costigos</h2>
             <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                <FaFacebook  className='icon' />
                <FaTwitter   className='icon'/>
                <FaInstagram className='icon' />
                <FaYoutube   className='icon'/>
                <FaPinterest className='icon' />
            </div>
             </div>
             <div className='flex justify-between'>
                 <ul className='lg:flex'>
                     <li>Name</li>
                     <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Arrival</li>
                    <li>Advertising</li>
                 </ul>

                 <ul className='text-right lg:flex'>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>New Arrival</li>
                    <li>Shoe</li>
                    <li>Designer</li>
                 </ul>
             </div>
            </div>  
        </div>
    );
};

export default Footer;