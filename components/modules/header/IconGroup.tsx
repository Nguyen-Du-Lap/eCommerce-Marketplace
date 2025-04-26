"use client";

import { cn } from "@/lib/utils";
import { Heart, ShoppingCart, User } from "@phosphor-icons/react";
import React from "react";

export default function IconGroup({className}: {className?: string}) {
  return (
    <div className={cn(className)}>
      <button className="relative text-white">
        <ShoppingCart size={32} weight="regular" /> 
        <span className="rounded-full place-content-center text-gray-700 h-6 w-6 absolute -top-2 left-5 bg-white font-bold">0</span>   
      </button>
      <button className="relative text-white">
        <Heart size={32} weight="regular" /> 
        <span className="rounded-full place-content-center text-gray-700 h-6 w-6 absolute -top-2 left-5 bg-white font-bold">0</span>   
      </button>
      <button className=" text-white">
        <User size={32} weight="regular" /> 
      </button>
    </div>
    
  );
}
