'use client';

import Container from '@/components/custom/Container';
import { TypeCategoryModel, TypeProductModel } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchProducts = () => axios.get('http://localhost:8080/api/products?page=0&size=10&sort=name');
const fetchCategories = () => axios.get('http://localhost:8080/api/categories?page=0&size=10&sort=name');

export default function ParallelQueryPage(){
    const { data: products, isLoading: isLoadingProducts, isError: isErrorProducts, error: errorProducts, isFetching: isFetchingProducts } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
        select: (data) => data.data.result.content,
        enabled: false
    })

    const { data: categories, isLoading: isLoadingCategories, isError: isErrorCategories, error: errorCategories, isFetching: isFetchingCategories } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
        select: (data) => data.data.result.content,
    })

    console.log('isLoadingProducts:', isLoadingProducts, 'isFetchingProducts:', isFetchingProducts, 'isFetchingCategories:', isFetchingCategories);

    if (isLoadingProducts || isLoadingCategories) {
        return <div>Loading...</div>;
    }
    if (isErrorProducts) {
        return <div>Error loading products: {(errorProducts as Error).message}</div>;
    }
    if (isErrorCategories) {
        return <div>Error loading categories: {(errorCategories as Error).message}</div>;
    }
    return (
        <Container>
            <h1>Parallel Query Example</h1>
            <div>
                <h2>Products</h2>
                <ul>
                    {products?.map((product: TypeProductModel) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Categories</h2>
                <ul>
                    {categories?.map((category: TypeCategoryModel) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};