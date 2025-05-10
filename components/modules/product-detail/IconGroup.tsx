'use client';

import { cn } from '@/lib/utils';
import { ArrowsClockwise, Copy, FacebookLogo, Heart, PinterestLogo, TwitterLogo } from '@phosphor-icons/react';
import React from 'react';

export default function IconGroup({className}: {className?: string}) {
    return (
        <div className={cn("flex items-center justify-between", className)}>
            {/* content left */}
            <div className='flex items-center gap-6 flex-wrap'>
                <button className='flex items-center cursor-pointer'>
                    <Heart size={24}/>
                    <span className='body-S-400 text-gray-700 ml-2'>
                        Add to Wishlist
                    </span>
                </button>
                <button className='flex items-center cursor-pointer'>
                    <ArrowsClockwise size={24}/>
                    <span className='body-S-400 text-gray-700 ml-2'>
                        Add to Compare
                    </span>
                </button>
            </div>
            {/* content right */}
            <div className='flex items-center gap-3 flex-wrap'>
                <span className='body-S-400 text-gray-700'>Share product:</span>
                <ul className='flex items-center flex-row gap-3 text-gray-700'>
                    <li className='cursor-pointer'><Copy size={24} /></li>
                    <li className='cursor-pointer'><FacebookLogo weight='fill' size={25} className="text-primary-500" /></li>
                    <li className='cursor-pointer'><TwitterLogo size={24} weight="fill" /></li>
                    <li className='cursor-pointer'><PinterestLogo size={24} weight='bold'/></li>
                </ul>
            </div>
        </div>
    );
};