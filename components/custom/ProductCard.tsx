"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./Badge";
import { Rating } from "@mui/material";
import { TypeProductModel } from "@/types";

export default function ProductCard({ product }: { product: TypeProductModel }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="border border-gray-100 w-full sm:w-[216px] md:w-[255px] lg:w-[248px] p-4 overflow-hidden hover:border-primary-500 cursor-pointer"
    >      <div className="relative">
        <Image
          src={product.images[0]?.imageUrl || "/images/carts/cart_1.png"}
          alt={product.name}
          width={300}
          height={300}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          className="w-full h-auto object-contain"
        />
        <Badge variant="soldOut" className="absolute top-2 left-2">
          Sold Out
        </Badge>
      </div>
      <div className="">
        <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
        <h3 className="body-S-400 text-gray-900 line-clamp-2 h-[40px] overflow-hidden">
          {product.name}
        </h3>
        <p className="mt-1 text-secondary-500 body-S-600">${product.price}</p>
      </div>
    </Link>
  );
}
