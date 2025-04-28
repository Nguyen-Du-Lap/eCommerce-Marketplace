"use client";

import Container from "@/components/custom/Container";
import { RectangleButton } from "@/components/custom/RectangleButton";
import { cn } from "@/lib/utils";
import { ArrowsCounterClockwise, CaretUp, Headphones, Info, MapPinLine, PhoneCall } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

export default function Menus({className}: { className?: string }) {
  return (
    <div className={cn("h-[80px] bg-white border-b-2 border-b-gray-300/20", className)} >
      <Container>
        <div className="flex items-center justify-between h-full">
          {/* left content */}
          <div className="flex items-center justify-between h-full gap-[24px]">
            {/* category */}
            <RectangleButton className="capitalize flex items-center h-[48px] w-[154px] bg-gray-50 text-gray-900">
                all category
                <CaretUp size={16} />
            </RectangleButton>
            {/* page */}
            <div className="flex items-center gap-[24px] capitalize">
                <Link href="/" className="flex items-center gap-[6px] text-gray-600">
                    <MapPinLine size={24} />
                    <span>Track Order</span>
                </Link>
                <Link href="/" className="flex items-center gap-[6px] text-gray-600">
                    <ArrowsCounterClockwise size={24} />
                    <span>Compare</span>
                </Link>
                <Link href="/" className="flex items-center gap-[6px] text-gray-600">
                    <Headphones size={24} />
                    <span>Customer Support</span>
                </Link>
                <Link href="/" className="flex items-center gap-[6px] text-gray-600">
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
