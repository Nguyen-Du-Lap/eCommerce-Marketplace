"use client";

import Container from "@/components/custom/Container";
import { TypeProductModel } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
const fetchProducts = (page: number) =>
  axios.get(`http://localhost:8080/api/products?page=${page}&size=5&sort=name`);
export default function PaginatedQueryComponent() {
  const [page, setPage] = useState(0);
  const { data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["page-react-query", page],
    queryFn: () => fetchProducts(page),
    select: (data) => {
      const products = data.data.result.content.map(
        (product: TypeProductModel) => product
      );
      return products;
    },
    placeholderData: keepPreviousData, // This keeps the previous data while loading new data
  });
  return (
    <Container>
      <h1>Paginated Query</h1>
      {data?.map((product: TypeProductModel) => (
        <div key={product.id}>
          <h2 className="text-xl font-bold">{product.name}</h2>
        </div>
      ))}
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
        disabled={page === 0}
        className="mr-2 disabled:opacity-50 disabled:cursor-not-allowed bg-amber-800 p-2"
      >
        Previous
      </button>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="disabled:opacity-50 disabled:cursor-not-allowed bg-amber-800 p-2"
        disabled={isFetching || isPlaceholderData}
      >
        Next
      </button>
      {isFetching ? <span> Loading...</span> : null}
    </Container>
  );
}
