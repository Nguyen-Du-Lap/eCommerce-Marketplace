'use client';

import Container from '@/components/custom/Container';
import React from 'react';
import SocialIcons from './SocialIcon';
import LanguageCurrency from './LanguageCurrency';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default function SocialMenu({ className }: { className?: string }){
    return (
        <div className={cn("bg-secondary-700 h-[52px]", className)}>
            <Container>
                <div className='flex items-center justify-between h-full'>
                    {/* left content */}
                    <div>
                        <p className='text-white'>Welcome to Orion online eCommerce store. </p>
                    </div>
                    {/* right content */}
                    <div className='flex items-center space-x-4 h-5'>
                        <SocialIcons className='text-white'/>
                        <Separator className="bg-white/10 w-1"  orientation="vertical"  />
                        <LanguageCurrency className='text-white'/>

                    </div>
                </div>
                
            </Container>
        </div>
    );
};