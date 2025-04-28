'use client';

import { Badge } from '@/components/custom/Badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SearchInput({className}: {className?: string}) {
    return (
        <div className={cn(className, "px-2, relative")}>
            <Input className='border-none shadow-none focus-visible:ring-0 focus:ring-white' placeholder='Search for anything'/>
            <Button variant="icon">
                <Search/>
            </Button>

            {/* search dropdown */}
            <div className='h-[400px] absolute w-full top-12 bg-white border overflow-auto backdrop-filter shadow-gray-700 shadow-md left-0'>
                <div className='flex flex-col gap-y-6'>
                    <Link href="/" className='flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700'>
                        <Image src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png" width={80} height={80} alt='product image' />
                        <div className='flex flex-col gap-1'>
                            <h3 className='display-5'>product title</h3>
                            <Badge variant="soldOut">test</Badge>
                            <h3 className='label-1'>110$</h3>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};