"use client";

import ProductCard from "@/components/custom/ProductCard";
import { cn } from "@/lib/utils";
import React from "react";

export default function RightContent({className}: {className?: string}) {
  const mockProducts = [
    {
      id: 1,
      name: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version",
      price: 6990000,
      image: "/images/products/product_1.svg",
    },
    {
      id: 2,
      name: "PlayStation 5 Digital Edition",
      price: 12990000,
      image: "/images/products/product_1.svg",
    },
    {
      id: 33,
      name: "PlayStation 5 Digital Edition",
      price: 12990000,
      image: "/images/products/product_1.svg",
    },
    {
      id: 44,
      name: "PlayStation 5 Digital Edition",
      price: 12990000,
      image: "/images/products/product_1.svg",
    },
    {
      id: 5,
      name: "PlayStation 5 Digital Edition",
      price: 12990000,
      image: "/images/products/product_1.svg",
    },
  ];

  return (
    <div className={cn("flex flex-wrap w-full", className)}>
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
