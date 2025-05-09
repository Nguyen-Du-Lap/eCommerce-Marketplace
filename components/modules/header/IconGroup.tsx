"use client";

import { cn } from "@/lib/utils";
import { Heart, ShoppingCart, User } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Login from "../login";
import ShoppingCard from "@/components/custom/ShoppingCard";

export default function IconGroup({className}: {className?: string}) {
  const [showLogin, setShowLogin] = useState(false);
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

  const handleUserClick = () => {
    if (isMobile) {
      router.push('/login');
    } else {
      setShowLogin(!showLogin);
    }
  };
  return (
    <div className={cn(className)}>
      <div className="relative text-white cursor-pointer">
        <ShoppingCart size={32} weight="regular" /> 
        <span className="flex items-center justify-center rounded-full place-content-center text-gray-700 h-6 w-6 absolute -top-2 left-5 bg-white font-bold">0</span>   
        {
          !isMobile && <ShoppingCard className="absolute z-50 -top-[54px] right-0" />
        }
      </div>
      <div className="relative text-white cursor-pointer">
        <Heart size={32} weight="regular" /> 
        <span className="flex items-center justify-center rounded-full place-content-center text-gray-700 h-6 w-6 absolute -top-2 left-5 bg-white font-bold">0</span>   
      </div>
      <div className=" text-white relative cursor-pointer">
        <User size={32} weight="regular" onClick={handleUserClick}/>
        {!isMobile && (
          <Login 
            className={cn(
              "absolute z-50 top-[36px] right-0", 
              !showLogin && "hidden"
            )}
          /> 
        )} 
      </div>
    </div>
    
  );
}
