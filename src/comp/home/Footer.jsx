import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";

export default function Footer2() {
    const lists = [
        { icon: <FaFacebookF /> },
        { icon: <FaTwitter /> },
        { icon: <FaLinkedinIn /> },
        { icon: <FaGooglePlusG /> },
    ];

    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-4 px-6 h-[30vh] bg-[#0c0c0ce3] text-white'>
            <div className='mb-4 md:mb-0 text-center md:text-left'>
                <p>© Copyright. Designed And Developed By Jamal</p>
            </div>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
                <p className='text-center md:text-left'>+1 (222) 777 8888</p>
                <div className='flex gap-3'>
                    {lists.map((eachlist, index) => (
                        <div key={index} className='bg-[green] rounded-full p-2 hover:bg-black transition'>
                            {eachlist.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
