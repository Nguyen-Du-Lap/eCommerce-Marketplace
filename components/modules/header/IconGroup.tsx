"use client";

import { cn } from "@/lib/utils";
import { Heart, ShoppingCart, User } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ShoppingCard from "@/components/custom/ShoppingCard";

export default function IconGroup({className}: {className?: string}) {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className={cn(className)}>
      <div className="relative text-white cursor-pointer group">
        <ShoppingCart size={32} weight="regular" /> 
        <span className="flex items-center justify-center rounded-full place-content-center text-gray-700 h-6 w-6 absolute -top-2 left-5 bg-white font-bold">0</span>   
        {
          !isMobile && <ShoppingCard className="absolute z-50 top-[42px] right-0 hidden group-hover:block before:w-20 before:absolute before:h-20 before:z-51 before:-top-12 before:right-0" />
        }
      </div>
      <div className="relative text-white cursor-pointer">
        <Heart size={32} weight="regular" /> 
        <span className="flex items-center justify-center rounded-full place-content-center text-gray-700 h-6 w-6 absolute -top-2 left-5 bg-white font-bold">0</span>   
      </div>
      <div className=" text-white relative cursor-pointer">
        <User size={32} weight="regular" onClick={() => router.push('/login')} />
      </div>
    </div>
    
  );
}
