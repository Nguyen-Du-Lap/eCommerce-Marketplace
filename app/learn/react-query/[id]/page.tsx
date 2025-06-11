'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import Container from '@/components/custom/Container';
import { TypeProductModel } from '@/types';
import { useProductData } from '@/hooks/useProductData';

export default function ProductPage() {
    const params = useParams<{ id: string }>();
    const id = params.id;
    const { data, isLoading, isError, error } = useProductData(id);

    if (isLoading) return <Container>Loading...</Container>;
    if (isError) return <Container>Error: {(error as Error).message}</Container>;
    
    const product = data?.data.result as TypeProductModel;    
    return (
        <Container>
            <h1 className="text-2xl font-bold mb-4">Product Details</h1>
            <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-500 mb-4">Product ID: {id}</p>
                {product && (
                    <>
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="my-2">{product.description}</p>
                        <p className="font-semibold">Price: ${product.price}</p>
                    </>
                )}
            </div>
        </Container>
    );
};