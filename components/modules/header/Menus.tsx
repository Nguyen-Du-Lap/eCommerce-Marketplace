"use client";

import Container from "@/components/custom/Container";
import { RectangleButton } from "@/components/custom/RectangleButton";
import { cn } from "@/lib/utils";
import {
  ArrowsCounterClockwise,
  CaretUp,
  Headphones,
  Info,
  MapPinLine,
  PhoneCall,
} from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";
import CategoryList from "./CategoryList";
import {
  TypeCategoryModel,
  TypeProductModel,
  TypeSlideModel,
} from "@/types/models";

export default function Menus({
  className,
  categories,
  products,
  campaigns,
}: {
  className?: string;
  categories: TypeCategoryModel[];
  products: TypeProductModel[];
  campaigns: TypeSlideModel[];
}) {

  // state
  const [showCat, setShowCat] = useState(false);
  return (
    <div
      className={cn(
        "h-[80px] bg-white border-b-2 border-b-gray-300/20",
        className
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-full">
          {/* left content */}
          <div className="flex items-center justify-between h-full gap-[24px]">
            {/* category */}
            <div className="relative">
              <RectangleButton onClick={() => setShowCat(!showCat)} className={cn("capitalize flex items-center h-[48px] w-[154px] bg-gray-50 text-gray-900", showCat && "bg-primary-500 text-white")} variant="default" size="default">
                all category
                {
                  showCat ? <CaretUp size={16} /> : <CaretUp size={16} className="rotate-180" />
                }
              </RectangleButton>
              {
                showCat && (<CategoryList categories={categories} products={products} campaigns={campaigns} />)
              }
            </div>

            {/* page */}
            <div className="flex items-center gap-[24px] capitalize">
              <Link
                href="/"
                className="flex items-center gap-[6px] text-gray-600"
              >
                <MapPinLine size={24} />
                <span>Track Order</span>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-[6px] text-gray-600"
              >
                <ArrowsCounterClockwise size={24} />
                <span>Compare</span>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-[6px] text-gray-600"
              >
                <Headphones size={24} />
                <span>Customer Support</span>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-[6px] text-gray-600"
              >
                <Info size={24} />
                <span>Need Help</span>
              </Link>
            </div>
          </div>
          {/* right content */}
          <div className="flex items-center gap-[8px] text-gray-900">
            <PhoneCall size={28} />
            +1-202-555-0104
          </div>
        </div>
      </Container>
    </div>
  );
}
