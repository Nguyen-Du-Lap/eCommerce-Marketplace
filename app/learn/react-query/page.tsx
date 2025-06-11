"use client";

import Container from "@/components/custom/Container";
import { TypeProductModel } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import { toast } from "sonner";

const fetchProducts = () => axios.get("http://localhost:8080/api/products?page=0&size=10&sort=name");

export default function PageReactQuery() {

  const { isLoading, data, isError, error, isFetching, refetch, isSuccess } = useQuery({
    queryKey: ["page-react-query"],
    queryFn: fetchProducts,
    // refetchOnWindowFocus: true,
    // refetchOnMount: true,
    // gcTime: 1000 * 60 * 5, // 5 minutes
    // staleTime: 1000 * 60 * 5, // 5 minutes
    // refetchInterval: 2000, // 2 seconds
    // refetchIntervalInBackground: true,
    // enabled: false, // Disable query by default
    select: (data) => { 
        const products = data.data.result.content.map((product: TypeProductModel) => product);
        return products;
    }
  });
  
  useEffect(() => {
    if (isSuccess) {
      toast.success("Data fetched successfully!", { duration: 3000 });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(`Error fetching data: ${error.message}`, { duration: 3000 });
    }
  }, [isError, error]);

  if (isLoading || isFetching) {
    return <Container>Loading...</Container>;
  }

  if (isError) {
    return <Container>Error: {error.message}</Container>;
  }


  console.log("isLoading:", isLoading, "isFetching:", isFetching);
  return (
    <Container>
      <h1>Product List</h1>
      <button onClick={() => refetch()} className="bg-blue-500 text-white px-4 py-2 rounded">
        Refetch Products
      </button>
      {data?.map((product: TypeProductModel) => {
        return (
          <Link key={product.id} href={`/learn/react-query/${product.id}`}>
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
          </Link>
        );
      })}
    </Container>
  );
}
