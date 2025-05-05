"use client";

import CountDown from "@/components/custom/CountDown";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

export default function Heading() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center flex-wrap gap-[8px]">
        <h3 className="heading-3 text-gray-900 mr-[24px]">Today Best Deals</h3>
        <span className="body-S-400 mr-[12px]">Deals ends in</span>
        <CountDown
          endDate="May 30, 2025 23:59:00"
          className="body-M-400 bg-warning-300 px-[12px] py-[6px] rounded-[2px]"
        />
      </div>
      <div className="py-[8px]">
        <Link href={"/products"} className="flex items-center gap-2 text-secondary-500 body-S-600">
          <span>Browser products</span>
          <ArrowRight size={20} weight="light" />
        </Link>
      </div>
    </div>
  );
}
