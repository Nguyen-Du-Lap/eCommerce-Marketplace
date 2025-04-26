'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React from 'react';

export default function SearchInput({className}: {className?: string}) {
    return (
        <div className={cn(className, "px-2")}>
            <Input className='border-none shadow-none focus-visible:ring-0 focus:ring-white' placeholder='Search for anything'/>
            <Button variant="icon">
                <Search/>
            </Button>
        </div>
    );
};