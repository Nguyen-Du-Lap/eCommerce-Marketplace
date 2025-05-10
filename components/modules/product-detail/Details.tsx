"use client";

import React from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus } from "@phosphor-icons/react";
import { Rating } from "@mui/material";
import { Badge } from "@/components/custom/Badge";
import { RectangleButton } from "@/components/custom/RectangleButton";
import IconGroup from "./IconGroup";
import Image from "next/image";

export default function Details({ className }: { className?: string }) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className={cn("space-y-6", className)}>
      <div className="mb-4">
        <div className="flex items-center space-x-1 mb-2">
          <Rating
            name="read-only"
            value={4}
            precision={0.5}
            readOnly
            size="large"
          />
          <span className="body-S-600 text-gray-900 ml-1">
            4.7 Star Rating{" "}
            <span className="body-S-400 text-gray-600">
              (21,671 User feedback)
            </span>
          </span>
        </div>
        <h1 className="body-XL-400 text-gray-900">
          2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD
          Storage)-Space Gray
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-600 body-S-400">SKU:</span>{" "}
          <span className="body-S-600 text-gray-900">A264671</span>
        </div>
        <div>
          <span className="text-gray-600 body-S-400">Availability:</span>{" "}
          <span className="text-success-500 body-S-600">In Stock</span>
        </div>
        <div>
          <span className="text-gray-600 body-S-400">Brand:</span>{" "}
          <span className="body-S-600 text-gray-900">Apple</span>
        </div>
        <div>
          <span className="text-gray-500">Category:</span> Electronics Devices
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="heading-3 text-secondary-500">$1699</div>
        <div className="text-gray-500 line-through">$1999.00</div>
        <Badge variant="discount" className="body-S-600">
          21% OFF
        </Badge>
      </div>

      <Separator />

      <div className="space-y-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block body-S-400 text-gray-900 mb-2">Color</label>
          <div className="flex space-x-2">
            <button className="w-8 h-8 rounded-full bg-gray-500 ring-2 ring-offset-2 ring-primary"></button>
            <button className="w-8 h-8 rounded-full bg-gray-200"></button>
          </div>
        </div>

        <div>
          <label className="block body-S-400 text-gray-900 mb-2">Size</label>
          <Select defaultValue="14">
            <SelectTrigger className="w-full rounded-[2px] border-gray-100">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="14">
                14-inch Liquid Retina XDR display
              </SelectItem>
              <SelectItem value="16">
                16-inch Liquid Retina XDR display
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block body-S-400 text-gray-900 mb-2">Memory</label>
          <Select defaultValue="8">
            <SelectTrigger className="w-full rounded-[2px] border-gray-100">
              <SelectValue placeholder="Select memory" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8">8GB unified memory</SelectItem>
              <SelectItem value="16">16GB unified memory</SelectItem>
              <SelectItem value="32">32GB unified memory</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block body-S-400 text-gray-900 mb-2">Storage</label>
          <Select defaultValue="1">
            <SelectTrigger className="w-full rounded-[2px] border-gray-100">
              <SelectValue placeholder="Select storage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="256">256GB SSD Storage</SelectItem>
              <SelectItem value="512">512GB SSD Storage</SelectItem>
              <SelectItem value="1">1TB SSD Storage</SelectItem>
              <SelectItem value="2">2TB SSD Storage</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 items-center gap-4 sm:space-x-4">
        {/* Input số lượng */}
        <div className="flex items-center justify-center border border-gray-100 rounded-[3px] h-[40px] sm:h-[48px] md:h-[56px]">
          <Button
            variant="ghost"
            size="icon"
            className="h-[40px] sm:h-[48px] md:h-[56px] w-8 sm:w-10 rounded-none cursor-pointer"
            onClick={decrementQuantity}
          >
            <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <span className="w-8 sm:w-10 text-center text-sm sm:text-base">
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-[40px] sm:h-[48px] md:h-[56px] w-8 sm:w-10 rounded-none cursor-pointer"
            onClick={incrementQuantity}
          >
            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>

        {/* Nút ADD TO CART */}
        <RectangleButton
          variant="primary"
          className="h-[40px] sm:h-[48px] md:h-[56px] col-span-1 sm:col-span-2 text-xs sm:text-sm"
        >
          ADD TO CART
        </RectangleButton>

        {/* Nút BUY NOW */}
        <RectangleButton
          variant="tertiary"
          className="h-[40px] sm:h-[48px] md:h-[56px] text-xs sm:text-sm"
        >
          BUY NOW
        </RectangleButton>
      </div>

      <IconGroup />

      <Card className="mt-6 border-gray-100 rounded-[3px] shadow-none p-0">
        <CardContent className="p-5">
          <div className="flex flex-col">
            <p className="body-S-400 text-gray-900">
              100% Guarantee Safe Checkout
            </p>
            <div className="flex space-x-2 mt-2">
              <Image
                src="/images/payment_method.png"
                height={18}
                width={312}
                alt="payment method"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
