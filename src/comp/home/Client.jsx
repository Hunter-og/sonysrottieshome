import React from 'react';

export default function Client() {
    const menu = [
        {
            title: '“I cannot express how happy I am with my Rottweiler puppy from Homeland Rottweiler Puppies. From the moment I contacted them, they were responsive, knowledgeable, and genuinely cared about finding the perfect match for me. My puppy has exceeded all my expectations – he is not only stunningly beautiful but also incredibly intelligent and well-behaved. I highly recommend Homeland Rottweiler Puppies to anyone looking for a top-quality Rottweiler companion.”',
            list: 'John T',
        },
        {
            title: '“I am so grateful to Homeland Rottweiler Puppies for helping me find the perfect show-quality Rottweiler puppy. Their attention to detail and commitment to breeding for conformation and temperament is truly exceptional. My puppy has already won several awards and has become the star of the show. I cannot thank Homeland Rottweiler Puppies enough for their expertise and support throughout the entire process.”',
            list: 'Jessica Smith',
        },
        {
            title: '“I recently adopted a Rottweiler puppy from Homeland Rottweiler Puppies, and I couldn’t be happier with my decision. The entire process was smooth and seamless, and the team at Homeland Rottweiler Puppies really took the time to understand my needs and preferences. My puppy is not only adorable but also incredibly loving and gentle. I am so grateful for the ongoing support and guidance they provide. Highly recommended!”',
            list: 'Steve Rogers',
        },
    ];

    return (
        <div className="bg-[#adabab23] min-h-screen relative flex flex-col items-center">
            <h1 className="text-center font-serif font-extrabold text-[#3c93f7e5] text-2xl mt-10">
                What Our Clients Say
            </h1>
            <div className="flex flex-wrap mt-10 p-5 justify-center gap-5">
                {menu.map((eachmenu, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-md bg-[#e7dddd2c] p-5 rounded-lg">
                        <blockquote className="text-center text-[grey] text-base p-4">
                            {eachmenu.title}
                        </blockquote>
                        <p className="text-center mt-2 font-serif font-extrabold">{eachmenu.list}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
