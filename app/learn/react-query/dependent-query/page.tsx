'use client';

import Container from '@/components/custom/Container';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchProduct = (productId: string) => axios.get(`http://localhost:8080/api/products/${productId}`);
const fetchCategory = (categoryId: string) => axios.get(`http://localhost:8080/api/categories/${categoryId}`);

export default function DependentQueryPage(){
    const {data: product } = useQuery({
        queryKey: ['product'],
        queryFn: () => fetchProduct("b7cd24cb-316b-11f0-8e43-e2740ae364af"),
    })
    const categoryId = product?.data.result.categoryId;

    const {data: category } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetchCategory(categoryId),
        enabled: !!categoryId,
    })
    return (
        <Container>
            <h1>{product?.data.result.name}</h1>
            <h2>{category?.data.result.name}</h2>
        </Container>
    );
};