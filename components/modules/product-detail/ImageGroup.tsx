"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./style.css";
import { Navigation } from "swiper/modules";

export default function ImageGroup({ className }: { className?: string }) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/categories/category_1.svg",
    "/images/categories/category_2.svg",
    "/images/categories/category_3.svg",
    "/images/categories/category_4.svg",
    "/images/categories/category_5.svg",
    "/images/categories/category_6.svg",
    "/images/categories/category_5.svg",
  ];
  return (
    <div className={cn("space-y-4", className)}>
      <div className="relative aspect-square bg-gray-10 rounded-[4px] overflow-hidden">
        <Image
          src={images[currentImage] || "/images/categories/category_1.svg"}
          alt="MacBook Pro"
          fill
          className="object-contain"
          priority
          placeholder="empty"
          blurDataURL="/images/categories/category_2.svg"
        />
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2"></div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={18}
        slidesPerView={5}
        navigation
        onSlideChange={() => console.log("")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          320: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          575: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide
            key={idx}
            className={cn(
              "relative w-20 h-20 rounded-[2px] overflow-hidden border-2 cursor-pointer",
              currentImage === idx ? "border-primary-500" : "border-transparent"
            )}
            onClick={() => setCurrentImage(idx)}
          >
            <div className="flex flex-col justify-center items-center border border-gray-100">
              <Image
                src={img || "/placeholder.svg"}
                alt={`Thumbnail ${idx + 1}`}
                width={96}
                height={96}
                className="object-center"
                placeholder="empty"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
