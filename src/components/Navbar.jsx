import React, {useState} from 'react';
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaFacebook,
         FaTwitter,
        FaYoutube,
        FaInstagram,
        FaPinterest } from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)

    const handleChange = () => {
        setNav(!nav)
        setLogo(!logo)
    }

    return (
        <nav className='absolute z-10 text-white flex justify-between items-center w-full h-20 px-4'>
            <div>
                <div>
                    <h1 onClick={handleChange} className={logo ? 'hidden' : 'block'}>Costigos</h1>
                </div>
            </div>
            <ul className='hidden md:flex '>
                <li>Home</li>
                <li>Contact</li>
                <li>New Arrival</li>
                <li>Shoe</li>
                <li>Designer</li>
            </ul>
            <div className='hidden md:flex'>
                <BiSearch className='mr-2' size={20} />
                <BsPerson size={20} />
            </div>
            {/* Mobile menu */}
            <div onClick={handleChange} className='md:hidden z-10'>
                {nav ? <AiOutlineClose className='text-black' size={20} /> : <AiOutlineMenu size={20} /> }
            </div>

            <div className={nav ? 'absolute text-black w-full left-0 top-0 bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
            <ul>
                <h1>Costigos</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>Contact</li>
                <li className='border-b'>New Arrival</li>
                <li className='border-b'>Shoe</li>
                <li className='border-b'>Designer</li>
                <div className='flex flex-col w-full '>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
                <FaFacebook  className='icon' />
                <FaTwitter   className='icon'/>
                <FaInstagram className='icon' />
                <FaYoutube   className='icon'/>
                <FaPinterest className='icon' />
            </div>
            </ul> 
            </div>
        </nav>
    );
};

export default Navbar;