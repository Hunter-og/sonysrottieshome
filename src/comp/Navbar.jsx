import React from 'react';

export default function Navbar() {
  return (
    <div>
      {/* Navbar Section */}
      <div className='flex flex-col md:flex-row justify-between text-center p-6 bg-gray-800 h-auto md:h-[15vh] items-center'>
        <h1 className='text-white text-2xl md:text-4xl font-serif'>
          Sonyrotties<span className='text-black font-semibold text-2xl md:text-4xl'>Home</span>
        </h1>
        <ul className='flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center text-white'>
          <li className='hover:text-gray-400'>Home</li>
          <li className='hover:text-gray-400'>Available Puppies</li>
          <li className='hover:text-gray-400'>About</li>
          <li className='hover:text-gray-400'>Testimonials</li>
          <li className='hover:text-gray-400'>Shipping & Delivery</li>
          <li className='hover:text-gray-400'>Health Guarantee</li>
          <li className='hover:text-gray-400'>Privacy Policy</li>
          <li className='hover:text-gray-400'>Contact</li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className='bg flex justify-center'>
        <div className='w-full max-w-4xl h- p-6 md:p-12 bg-gray-700 bg-opacity-50 rounded-lg text-center'>
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
