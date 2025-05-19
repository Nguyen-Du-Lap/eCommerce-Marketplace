"use client";

import {
  EmptyState,
  ErrorDisplay,
  Loading,
} from "@/components/custom/DataStates";
import ProductCard from "@/components/custom/ProductCard";
import { cn } from "@/lib/utils";
import { apiGet } from "@/services/api";
import { ApiListResponse, TypeProductModel } from "@/types";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => apiGet<ApiListResponse<TypeProductModel>>(url);
export default function ListProduct({ className }: { className?: string }) {
  const { data, error, isLoading } = useSWR(
    "/api/products?page=0&size=8&sort=name",
    fetcher
  );

  if (isLoading) return <Loading />;
  if (error)
    return (
      <ErrorDisplay message="Failed to load products. Please try again later." />
    );
  if (!data || !data.result || data.result.content.length === 0)
    return <EmptyState />;  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {data.result.content.map((product: TypeProductModel) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          className="w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] text-center"
        />
      ))}
    </div>
  );
}
