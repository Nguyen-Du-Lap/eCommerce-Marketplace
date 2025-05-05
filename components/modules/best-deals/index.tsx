'use client';

import Container from '@/components/custom/Container';
import React from 'react';
import Heading from './Heading';
import LeftBanner from './LeftBanner';
import RightContent from './RightContent';

export default function BestDeals(){
    return (
        <section className='mt-[72px]'>
            <Container>
                <div className='flex flex-col gap-y-[24px]'>
                    <Heading />
                    <div className='flex mt-[24px] flex-wrap'>
                        <LeftBanner />
                        <RightContent />
                    </div>
                </div>
            </Container>
        </section>
    );
};