import React from 'react';
import { FaDog, FaPeopleArrows } from 'react-icons/fa';

export default function Plus() {
    const plus = [
        {
            Icon: FaDog,
            title: '120+',
            list: 'Puppies',
        },
        {
            Icon: FaPeopleArrows,
            title: '130+',
            list: 'Happy Clients',
        },
    ];

    return (
        <div >
            <div className='bg-[#c4bdbd41] h-auto min-h-[20vh] p-4'>
                <div className='flex  md: justify-between'>
                    {plus.map((eachplus, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-center justify-center m-auto  md:mb-0 md:w-1/2'
                        >
                            <div className='text-[#44ca32ea] mt-4 text-3xl md:text-5xl'> {/* Responsive icon size */}
                                <eachplus.Icon />
                            </div>
                            <h1 className='text-lg md:text-2xl font-bold mt-2'>{eachplus.title}</h1> {/* Responsive title size */}
                            <p className='text-sm md:text-lg text-center'>{eachplus.list}</p> {/* Responsive text size */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
