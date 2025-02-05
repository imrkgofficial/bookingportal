import React from 'react';
import { LuHeartPulse } from "react-icons/lu";
import { RiStethoscopeLine } from "react-icons/ri";
import { CiMedicalCase } from "react-icons/ci";
import { BiInjection } from "react-icons/bi";

const Section2 = () => {
    return (
        <div className=' flex w-full mt-[5rem] justify-center gap-20 bg-slate-50'>
            <div className='w-[15rem] flex flex-col gap-3 mt-3'>
                <LuHeartPulse size={30} className='text-blue-500'/>
                <h2 className='text-blue-800 text-2xl font-serif font-bold'>Cardiology</h2>
                <p className='text-gray-500'>Phasellus pellentesque ligula eget magna tristique.</p>
                <button className='text-blue-900 text-left font-bold text-base hover:underline hover:text-blue-700 outline-none'>Explore Now</button>
            </div>
            <div className='w-[15rem] flex flex-col gap-3 mt-3'>
                <RiStethoscopeLine size={30} className='text-red-500'/>
                <h2 className='text-blue-800 text-2xl font-serif font-bold'>Monthly Checkup</h2>
                <p className='text-gray-500'>Vestibulum laoreet libero ac ipsum sollicitudin.</p>
                <button className='text-blue-900 text-left font-bold text-base hover:underline hover:text-blue-700 outline-none'>Explore Now</button>
            </div>
            <div className='w-[15rem] flex flex-col gap-3 mt-3'>
                <CiMedicalCase size={30} className='text-green-500 text-[16px]'/>
                <h2 className='text-blue-800 text-2xl font-serif font-bold'>Dental Care</h2>
                <p className='text-gray-500'>Integer elit varius a eros nec porta elementum nibh.</p>
                <button className='text-blue-900 text-left font-bold text-base hover:underline hover:text-blue-700 outline-none'>Explore Now</button>
            </div>
            <div className='w-[15rem] flex flex-col gap-3 mt-3'>
                <BiInjection size={30} className='text-yellow-500'/>
                <h2 className='text-blue-800 text-2xl font-serif font-bold'>Opthalmology</h2>
                <p className='text-gray-500'>Seduahag perspiciati under omnised atused error.</p>
                <button className='text-blue-900 text-left font-bold text-base hover:underline hover:text-blue-700 outline-none'>Explore Now</button>
            </div>
        </div>
    );
}

export default Section2;
