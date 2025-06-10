"use client";

import Container from "@/components/custom/Container";
import { TypeProductModel } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchProducts = () => axios.get("http://localhost:8080/api/products?page=0&size=10&sort=name");

export default function PageReactQuery() {
  const { isLoading, data, isError, error, isFetching } = useQuery({
    queryKey: ["page-react-query"],
    queryFn: fetchProducts,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    gcTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (isError) {
    return <Container>Error: {error.message}</Container>;
  }

  console.log("isLoading:", isLoading, "isFetching:", isFetching);
  return (
    <Container>
      <h1>Product List</h1>
      {data?.data.result.content.map((product: TypeProductModel) => {
        return (
          <div key={product.id}>
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        );
      })}
    </Container>
  );
}
