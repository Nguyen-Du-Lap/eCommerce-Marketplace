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
import { Heart, Minus, Plus } from "@phosphor-icons/react";
import { Share2 } from "lucide-react";
import { Rating } from "@mui/material";
import { Badge } from "@/components/custom/Badge";
import { RectangleButton } from "@/components/custom/RectangleButton";

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
        <Badge variant="discount" className="body-S-600">21% OFF</Badge>
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

      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-100 rounded-[3px]">
          <Button
            variant="ghost"
            size="icon"
            className="h-[56px] w-10 rounded-none cursor-pointer"
            onClick={decrementQuantity}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-[56px] w-10 rounded-none cursor-pointer"
            onClick={incrementQuantity}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <RectangleButton variant="primary" className="flex-1 h-[56px]">
          ADD TO CART
        </RectangleButton>
        <RectangleButton variant="tertiary" className="h-[56px]">
          BUY NOW
        </RectangleButton>
      </div>

      <div className="flex items-center space-x-4 text-sm">
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Heart className="h-4 w-4" />
          Add to Wishlist
        </Button>
        <Separator orientation="vertical" className="h-5" />
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Share2 className="h-4 w-4" />
          Share product
        </Button>
      </div>

      <Card className="mt-6">
        <CardContent className="p-4">
          <div className="text-center">
            <p className="font-medium">100% Guarantee Safe Checkout</p>
            <div className="flex justify-center space-x-2 mt-2">
              {["visa", "mastercard", "amex", "paypal", "discover"].map(
                (payment) => (
                  <div
                    key={payment}
                    className="w-10 h-6 bg-gray-200 rounded"
                  ></div>
                )
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
