'use client';

import Container from '@/components/custom/Container';
import { useQueries } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchCategories = (id: string) => axios.get(`http://localhost:8080/api/categories/${id}`);

export default function DynamicParallelQueryPage(){
    const categoryIds = ["2ca2876b-313f-11f0-8e43-e2740ae364af", "2ca272db-313f-11f0-8e43-e2740ae364af"]
    useQueries({
        queries: categoryIds.map((id) => ({
            queryKey: ['category', id],
            queryFn: () => fetchCategories(id),
            enabled: !!id, // Ensure the query is only run if id is truthy
        }))
    })
    return (
        <Container>
            <h1>Dynamic Parallel Query Example</h1>
        </Container>
    );
};