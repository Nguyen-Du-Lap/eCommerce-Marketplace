'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export default function Logo({className}: {className?: string}) {
    return (
        <div className={cn(className)}>
            <Image src={"/images/logo.svg"} width={160} height={48} alt='logo'/>
        </div>
    );
};