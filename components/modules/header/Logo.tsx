'use client';

import Image from 'next/image';
import React from 'react';

export default function Logo(){
    return (
        <div>
            <Image src={"/images/logo.svg"} width={160} height={48} alt='logo'/>
        </div>
    );
};