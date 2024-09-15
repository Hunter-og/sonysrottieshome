import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className='relative'>
      <div className=' flex justify-between gap-20 items-center p-[40px] bg-[#0c0c0ce3] h-[15vh] sm: h-5 '>
        <h1 className='text-white text-2xl font-serif'>
          Sonyrotties<span className=' text-[#1eff00] font-semibold'>Home</span>
        </h1>
        <div className='lg:hidden'>
          {mobileMenuOpen ? (
            <FaTimes className='text-white text-2xl cursor-pointer' onClick={toggleMobileMenu} />
          ) : (
            <GiHamburgerMenu className='text-white text-2xl cursor-pointer' onClick={toggleMobileMenu} />
          )}
        </div>
        <ul className={`lg:flex gap-[25px] items-center lg:bg-transparent text-white ${mobileMenuOpen ? 'flex flex-col absolute top-full left-0 w-full  h-[40vh]  lg:static lg:flex-row  sm: bg-[#0c0c0cc0] sm:absolute ' : 'hidden'}`}>
          <li className=' hover:text-[#1eff00]'><a href="#home">Home</a></li>
          <li className=' hover:text-[#1eff00]'><a href="#available-puppies">Available Puppies</a></li>
          <li className=' hover:text-[#1eff00]'><a href="#about">About</a></li>
          <li className=' hover:text-[#1eff00]'><a href="#testimonials">Testimonials</a></li>
          <li className=' hover:text-[#1eff00]'><a href="#shipping">Shipping & Delivery</a></li>
          <li className=' hover:text-[#1eff00]'><a href="#health-guarantee">Health Guarantee</a></li>
          <li className=' hover:text-[#1eff00]'><a href="#privacy-policy">Privacy Policy</a></li>
          <li className=' hover:text-[#1eff00]'><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
