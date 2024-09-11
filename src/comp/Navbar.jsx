import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className=' flex justify-between  text-center p-[20px] bg-[#0c0c0cc0] h-[15vh] items-center '>
            <h1 className=' text-white text-[30px] font-serif'>Sonyrotties<span className=' text-[black] font-semibold text-[30px]'>Home</span></h1>
            <ul className=' flex gap-10 items-center text-center text-white '>
                <li>Home</li>
                <li>Available Puppies</li>
                <li>About</li>
                <li>Testimonials</li>
                <li>Shipping & Delivery </li>
                <li>Health Guarantee</li>
                <li>Privacy Policy</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='bg '>
          <div className=' w-[40%] h-[90vh] m-[100px] bg-[#52505052] absolute items-center text-center  rounded'>
           <h1 className=' text-[#1eff00] font-bold text-[50px] mt-[30px]  font-serif'> SonyrottiesHome</h1>
           <p className=' text-[white] text-center  m-auto items-center  w-[80%]'>Are you on a quest for the perfect Rottweiler companion? Look no further! At SonyrottiesHome.com, we’re your dedicated online resource for connecting with reputable Rottweiler breeders near your location. Our mission is to simplify your journey in finding the ideal Rottweiler puppy for sale  near me, ensuring that you bring home a loyal and loving furry friend that perfectly matches your family’s needs. Explore our extensive network of Rottweiler breeders who share our commitment to quality, ethics, and the well-being of these incredible dogs. Whether you’re a seasoned Rottweiler enthusiast or embarking on your first Rottweiler journey, our platform is designed to guide you every step of the way. Discover the joy of Rottweiler ownership with RottweilerPuppiesNearMe.com, where excellence meets devotion.</p>
           <div>
            <button className=' text-white bg-[green] rounded mt-10 p-[10px]'>Available Puppies</button>
          
           </div>
          </div>

        </div>

      
    </div>
  )
}
