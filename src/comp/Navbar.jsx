import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [Mobile, setMobile] = useState(false);
  const togglemobile = () => {
    setMobile(!Mobile);
  };

  return (
    <div>
      {/* Navbar */}
      <div className='flex flex-col md:flex-row justify-between items-center p-6 bg-gray-800'>
        {/* Logo */}
        <h1 className='text-white text-2xl font-serif '>
          my content<span className='text-black font-semibold'></span>
        </h1>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden '>
          {Mobile ? (
            <FaTimes className='text-white text-2xl' onClick={togglemobile} />
          ) : (
            <GiHamburgerMenu className='text-white text-2xl' onClick={togglemobile} />
          )}
        </div>

        {/* Menu Items */}
        <ul className={`flex flex-col md:flex-row gap-4 md:gap-8 text-center text-white ${Mobile ? 'block' : 'hidden'} md:flex`}>
          <li className='hover:text-gray-400'>Home</li>
          <li className='hover:text-gray-400'>Available</li>
          <li className='hover:text-gray-400'>About</li>
          <li className='hover:text-gray-400'>Testimonials</li>
          <li className='hover:text-gray-400'>Shipping & Delivery</li>
          <li className='hover:text-gray-400'>Health Guarantee</li>
          <li className='hover:text-gray-400'>Privacy Policy</li>
          <li className='hover:text-gray-400'>Contact</li>
        </ul>
      </div>

      <div className=' bg bg-opacity-50 p-6 md:p-12 flex justify-center'>
        <div className='w- max-w-4xl bg-gray-800 bg-opacity-60 rounded-lg text-center'>
          <h1 className='text-green-300 font-bold text-3xl md:text-5xl mt-6 font-serif'>
            SonyrottiesHome
          </h1>
          <p className='text-white mt-4 text-base md:text-lg'>
            Are you on a quest for the perfect Rottweiler companion? Look no further! At SonyrottiesHome.com, we’re your dedicated online resource for connecting with reputable Rottweiler breeders near your location. Our mission is to simplify your journey in finding the ideal Rottweiler puppy for sale near me, ensuring that you bring home a loyal and loving furry friend that perfectly matches your family’s needs. Explore our extensive network of Rottweiler breeders who share our commitment to quality, ethics, and the well-being of these incredible dogs. Whether you’re a seasoned Rottweiler enthusiast or embarking on your first Rottweiler journey, our platform is designed to guide you every step of the way. Discover the joy of Rottweiler ownership with RottweilerPuppiesNearMe.com, where excellence meets devotion.
          </p>
          <div className='mt-8'>
            <button className='text-white bg-green-600 hover:bg-green-700 rounded py-2 px-4'>
              Available Puppies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
