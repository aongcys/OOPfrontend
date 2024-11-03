import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Navbar({ small }) {
    console.log(small);
    return (
        <div className='mt-[0.75%] relative'>
            <div className={small ? 'ml-[6%]' : 'ml-[4%]'}>
                <div className='flex flex-row'>
                    <div className='relative flex items-center'>
                        <input className='rounded-full w-[54rem] h-[3rem] border border-gray-300 pl-12 text-[15px]' type="text" placeholder="Search" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#606060" }} className='absolute left-4 text-gray-400 w-[1.1rem] h-[1.1rem]' />
                    </div>
                    <div className='flex flex-row gap-4 mt-[5px] ml-[15px]'>
                        <button className="rounded-full bg-white hover:bg-gray-100 h-[2.2rem] w-[6.5rem] text-gray-700 font-extrabold text-[14px]">Sign In</button>
                        <button className="rounded-full bg-black hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[2.2rem] w-[6.5rem] text-white font-extrabold text-[14px]">Register</button>
                    </div>
                </div>
                <div className='flex flex-row mt-[0.5%] gap-[1.5%] items-center'>
                    <img className='w-[2.05rem] h-[2.05rem] rounded-full border-2 border-black' src="rsna.png" alt="" />
                    <p className='text-[11px] font-semibold pr-[25%]'>RADIOLOGICAL SOCIETY OF NORTH AMERICA · FEATURED CODE COMPETITION · 12 HOURS AGO</p>
                    <div>
                        <button className="rounded-full bg-zinc-400 h-[2.3rem] w-[11rem] text-white font-extrabold text-[14px] gap-0">Late Submission</button>
                        <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] text-white font-extrabold text-[14px] gap-0"><FontAwesomeIcon icon={faEllipsis} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
                    </div>
                </div>
                <div className='flex flex-row mt-[2%] items-center'>
                    <div className='w-[70%]'>
                        <p className='text-[2.3rem] font-extrabold leading-tight'>RSNA 2024 Lumbar Spine Degenerative Classification</p>
                        <p className='text-[1.05rem]'>Classify lumbar spine degenerative conditions</p>
                    </div>
                    <img className=' w-[25%] h-[50%]' src="scan.png" alt="" />
                </div>
                <div>
                    <ul className="flex flex-row gap-[2%] h-[3rem] items-center ml-[2%]">
                        <li className=''><a href='./' className='[text-shadow:_0_0.5px_0.5px_rgb(0_0_0)]'>Overview </a>
                        <hr className='border-[1.9px] border-black rounded-t-lg' /></li>
                        <li><a href='./data' className='hover:[text-shadow:_0_0.5px_0.5px_rgb(0_0_0)] '>Data</a></li>  
                    </ul>
                </div>
            </div>
            <hr className='border-0.75 border-gray-200'/>
        </div>
    )
}

export default Navbar;

