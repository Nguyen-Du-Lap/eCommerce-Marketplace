"use client";

import { Badge } from "@/components/custom/Badge";
import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";
import { RectangleButton } from "@/components/custom/RectangleButton";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export default function LeftBanner({className}: {className?: string}) {
  return (
    <div className={cn("border border-gray-100 w-full lg:w-[328px] p-4 flex flex-col gap-4 sm:flex-row lg:flex-col", className)}>
      {/* image */}
      <div className="relative flex justify-center items-start">
        <Image
          src={"./images/products/LeftBanner.svg"}
          height={268}
          width={280}
          alt="image banner"
        />
        <div className="absolute left-0 -top-1 flex flex-col gap-2">
          <Badge variant="discount" className="px-[10px] py-[5px]">
            32% Off
          </Badge>
          <Badge variant="hot" className="px-[10px] py-[5px]">
            hot
          </Badge>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col p-1 gap-2">
        <div className="flex items-center">
          <Rating
            name="hover-feedback"
            defaultValue={4}
            precision={0.5}
            readOnly
            size="large"
          />
          <span className="body-S-400 text-gray-500"> (52,677)</span>
        </div>
        <h1 className="body-M-400 text-gray-950 line-clamp-2">Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...</h1>
        <div className="flex items-center gap-1 my-2">
            <span className="body-L-400 line-through text-gray-300">$865.99</span>
            <span className="body-L-600 text-secondary-500">$442.12</span>
        </div>
        <p className="body-S-400 text-gray-600">Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.</p>
        <div className="mt-4">
            <RectangleButton variant="primary" icon="none" className="w-full flex gap-2 py-6">
                <div className="flex items-center gap-1 text-white">
                    <ShoppingCartSimple size={20} weight="regular" />
                    ADD TO CART
                </div>
            </RectangleButton>
        </div>
      </div>
    </div>
  );
}
