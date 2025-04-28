'use client';

import { CaretRight } from '@phosphor-icons/react';
import React from 'react';

export default function CategoryList(){ 
    return (
        <div className='absolute h-[420px] w-[240px] shadow-xl top-[64px] border border-zinc-300 py-1.5'>
            <ul>
                <li className='h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50'>
                    <span className='body-S-400 group-hover:font-medium'>Computer & Laptop</span>
                </li>
                <li className='h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50'>
                    <span className='body-S-400 group-hover:font-medium'>Computer Accessories</span>
                </li>
                <li className='h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50'>
                    <span className='body-S-400 group-hover:font-medium'>SmartPhone</span>
                    <CaretRight size={12} weight='bold'/>
                </li>
                <li className='h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50'>
                    <span className='body-S-400 group-hover:font-medium'>Headphone</span>
                </li>
                <li className='h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50'>
                    <span className='body-S-400 group-hover:font-medium'>Mobile Accessories</span>
                </li>
                <li className='h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50'>
                    <span className='body-S-400 group-hover:font-medium'>Gaming Console</span>
                </li>
                <li className='h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50'>
                    <span className='body-S-400 group-hover:font-medium'>Camera & Photo</span>
                </li>
                <li className='h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50'>
                    <span className='body-S-400 group-hover:font-medium'>TV & Homes Appliances</span>
                </li>
                <li className='h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50'>
                    <span className='body-S-400 group-hover:font-medium'>Watchs & Accessories</span>
                </li>
                <li className='h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50'>
                    <span className='body-S-400 group-hover:font-medium'>GPS & Navigation</span>
                </li>
                <li className='h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50'>
                    <span className='body-S-400 group-hover:font-medium'>Warable Technology</span>
                </li>
            </ul>
        </div>
    );
};