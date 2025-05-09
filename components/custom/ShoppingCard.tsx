"use client";

import React from "react";

import Image from "next/image";
import { X } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RectangleButton } from "./RectangleButton";
import { ArrowRight } from "@phosphor-icons/react";

export default function ShoppingCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[376px] flex min-h-screen items-center justify-center",
        className
      )}
    >
      <Card className="w-full max-w-md border-gray-100 rounded-[4px]">
        <CardHeader className="px-6 border-b border-gray-100">
          <h2 className="text-lg font-medium">Shopping Cart (02)</h2>
        </CardHeader>

        <CardContent className="p-0 flex flex-col gap-4">
          {/* First Item */}
          <div className="flex items-start gap-4 px-6">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded border border-gray-100">
              <Image
                src="/images/carts/cart_1.svg"
                alt="Canon EOS 1500D"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="body-S-400">
                Canon EOS 1500D DSLR Camera Body+ 18-55 mm
              </h3>
              <p className="mt-1 body-S-400">
                1 × <span className="text-secondary-500">$1,500</span>
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-[80px] w-8 text-gray-400 flex items-center justify-center"
            >
              <X size={20} />
              <span className="sr-only">Remove</span>
            </Button>
          </div>

          <div className="flex items-start gap-4 px-6">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded border border-gray-100">
              <Image
                src="/images/carts/cart_2.svg"
                alt="Canon EOS 1500D"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="body-S-400">
                Canon EOS 1500D DSLR Camera Body+ 18-55 mm
              </h3>
              <p className="mt-1 body-S-400">
                1 × <span className="text-secondary-500">$1,500</span>
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-[80px] w-8 text-gray-400 flex items-center justify-center"
            >
              <X size={20} />
              <span className="sr-only">Remove</span>
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col border-gray-100 border-t p-6 pb-0">
          <div className="flex w-full justify-between">
            <span className="body-S-400 text-gray-700">Sub-Total:</span>
            <span className="body-S-500 text-gray-900">$2038.00 USD</span>
          </div>

          <div className="mt-4 w-full space-y-2">
            <RectangleButton
              type="submit"
              variant={"primary"}
              className="w-full flex items-center justify-center h-12"
            >
              <span className="heading-5">Checkout now</span>
              <ArrowRight weight="bold" size={20} />
            </RectangleButton>
            <RectangleButton
              type="submit"
              variant={"tertiary"}
              className="w-full flex items-center justify-center h-12"
            >
              <span className="heading-5">View Cart</span>
              <ArrowRight weight="bold" size={20} />
            </RectangleButton>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
