"use client";

import { TypeCategoryModel } from "@/types";
import {
} from "@/types/models";
import Link from "next/link";
import React from "react";

export default function CategoryList({
  categories,
}: {
  categories: TypeCategoryModel[];
}) {

  return (
    <div className="absolute bg-white h-[420px] w-[240px] shadow-xl top-[64px] border border-zinc-300 py-1.5 z-100">
      <ul>
        {categories.map((item: TypeCategoryModel, idx) => (
          <li
            key={idx}
            className="h-[36px]  capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            <Link href={`/products/category/${item.id}`}>
              <span className="body-S-400 group-hover:font-medium">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
