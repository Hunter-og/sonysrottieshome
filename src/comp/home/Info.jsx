import React from 'react';
import { FaRegCalendarCheck } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { SlSupport } from "react-icons/sl";
import { IoHome } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";

export default function Choose() {
    const lists = [
        {
            icon: <FaRegCalendarCheck size={40} />,
            title: 'Health Guarantee:',
            list: 'We provide a comprehensive health guarantee for all our puppies, ensuring their well-being and giving you peace of mind.',
        },
        {
            icon: <SiHackthebox size={40} />,
            title: 'Money Back:',
            list: 'We offer a money-back guarantee, reflecting our confidence in the quality of our puppies.',
        },
        {
            icon: <BsFillDoorOpenFill size={40} />,
            title: 'Delivery:',
            list: 'We ensure timely delivery of our puppies to their new homes, so you can start your journey with them right away.',
        },
        {
            icon: <SlSupport size={40} />,
            title: 'Customer Support:',
            list: 'We are dedicated to providing exceptional customer support throughout your entire journey with us.',
        },
        {
            icon: <IoHome size={40} />,
            title: 'Vet Checked:',
            list: 'All our puppies undergo thorough veterinary check-ups to ensure their overall health and well-being.',
        },
        {
            icon: <RiShoppingBag3Fill size={40} />,
            title: 'Well-socialized:',
            list: 'We place a strong emphasis on early socialization to ensure that our puppies are well-adjusted and confident.',
        },
    ];

    return (
        <div className='bg-[#ccc9c93d] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-[50px]'>
            {lists.map((eachlist, index) => (
                <div 
                    key={index} 
                    className='shadow mt-[20px] h-[40vh] flex flex-col items-center justify-center transition-all duration-300'
                >
                    <div className='text-[#44ca32ea] mt-[20px]'>{eachlist.icon}</div>
                    <h1 className='text-[#3c93f7e5] font-extrabold text-[20px] mt-[20px]'>{eachlist.title}</h1>
                    <p className='text-[grey] w-[70%] items-center text-center mt-[10px]'>{eachlist.list}</p>
                </div>
            ))}
        </div>
    );
}
