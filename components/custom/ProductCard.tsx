"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./Badge";
import { Rating } from "@mui/material";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="border border-gray-100 w-full sm:w-[216px] md:w-[255px] lg:w-[248px] p-4 overflow-hidden hover:border-primary-500 cursor-pointer"
    >
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={0}
          height={0}
          className="w-full"
        />
        <Badge variant="soldOut" className="absolute top-2 left-2">
          Sold Out
        </Badge>
      </div>
      <div className="">
        <h3 className="body-S-400 text-gray-900 line-clamp-2 h-[40px] overflow-hidden">
          {product.name}
        </h3>
        <p className="mt-1 text-secondary-500 body-S-600">${product.price}</p>
      </div>
    </Link>
  );
}
