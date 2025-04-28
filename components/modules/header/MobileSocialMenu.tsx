'use client';

import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Globe } from '@phosphor-icons/react';
import React from 'react';
import LanguageCurrency from './LanguageCurrency';
import SocialIcons from './SocialIcon';

export default function MobileSocialMenu({className}: {className?: string}) {   
    return (
        <div className={cn(className,)}>
            <Sheet>
                <SheetTrigger>
                    <Globe size="32" className='text-white'/>
                </SheetTrigger>
                <SheetContent side='bottom' className='rounded-t-3xl p-4 items-center'>
                    <SheetTitle className='text-base'>Social/Language/Currency</SheetTitle>
                    <SheetDescription className='flex flex-col space-y-4'>
                        <LanguageCurrency className='text-black'/>
                        <SocialIcons/>
                    </SheetDescription>
                </SheetContent>
            </Sheet>
        </div>
    );
};