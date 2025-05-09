'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Logo({className}: {className?: string}) {
    const router = useRouter();
    return (
        <div className={cn(className, "cursor-pointer")} onClick={() => router.push('/')}>
            <Image src={"/images/logo.svg"} width={160} height={48} alt='logo'/>
        </div>
    );
};