"use client";

import useSWR from 'swr'
import ProductCard from "@/components/custom/ProductCard";
import { cn } from "@/lib/utils";
import React from "react";
import { ApiListResponse, TypeProductModel } from "@/types";
import { apiGet } from "@/services/api";
import { EmptyState, ErrorDisplay, Loading } from '@/components/custom/DataStates';

const fetcher = (url: string) => apiGet<ApiListResponse<TypeProductModel>>(url);

export default function RightContent({className}: {className?: string}) {
  const { data, error, isLoading } = useSWR('/api/products?page=0&size=8&sort=name', fetcher);

  if (isLoading) return <Loading />;
  if (error) return <ErrorDisplay message="Failed to load products. Please try again later." />;
  if (!data || !data.result || data.result.content.length === 0) return <EmptyState />;
  return (
    <div className={cn("flex flex-wrap w-full", className)}>
      {data.result.content.map((product : TypeProductModel) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
