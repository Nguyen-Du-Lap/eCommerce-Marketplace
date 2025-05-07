"use client";

import Container from "@/components/custom/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function ShopCategory() {
  return (
    <section className="mt-[72px]">
      <Container>
        <div className="flex flex-col gap-10">
          <h1 className="heading-1 text-gray-900 text-center">
            Shop with Categorys
          </h1>
          <div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={18}
              slidesPerView={6}
              navigation
              onSlideChange={() => console.log("")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 18,
                },
                575: {
                  slidesPerView: 1,
                  spaceBetween: 18,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 18,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 18,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 18,
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 18,
                },
              }}
            >
              <SwiperSlide>
                <div className="flex flex-col justify-center gap-4 items-center px-[14px] py-[24px] border border-gray-100">
                  <Image
                    src={"/images/categories/category_1.svg"}
                    className="object-center"
                    width={148}
                    height={148}
                    alt="category"
                  />
                  <span className="body-M-500 text-gray-900 text-center">
                    Computer & Laptop
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center gap-4 items-center px-[14px] py-[24px] border border-gray-100">
                  <Image
                    src={"/images/categories/category_2.svg"}
                    className="object-center"
                    width={148}
                    height={148}
                    alt="category"
                  />
                  <span className="body-M-500 text-gray-900 text-center">
                    Computer & Laptop
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center gap-4 items-center px-[14px] py-[24px] border border-gray-100">
                  <Image
                    src={"/images/categories/category_3.svg"}
                    className="object-center"
                    width={148}
                    height={148}
                    alt="category"
                  />
                  <span className="body-M-500 text-gray-900 text-center">
                    Computer & Laptop
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center gap-4 items-center px-[14px] py-[24px] border border-gray-100">
                  <Image
                    src={"/images/categories/category_4.svg"}
                    className="object-center"
                    width={148}
                    height={148}
                    alt="category"
                  />
                  <span className="body-M-500 text-gray-900 text-center">
                    Computer & Laptop
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center gap-4 items-center px-[14px] py-[24px] border border-gray-100">
                  <Image
                    src={"/images/categories/category_5.svg"}
                    className="object-center"
                    width={148}
                    height={148}
                    alt="category"
                  />
                  <span className="body-M-500 text-gray-900 text-center">
                    Computer & Laptop
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center gap-4 items-center px-[14px] py-[24px] border border-gray-100">
                  <Image
                    src={"/images/categories/category_6.svg"}
                    className="object-center"
                    width={148}
                    height={148}
                    alt="category"
                  />
                  <span className="body-M-500 text-gray-900 text-center">
                    Computer & Laptop
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center gap-4 items-center px-[14px] py-[24px] border border-gray-100">
                  <Image
                    src={"/images/categories/category_6.svg"}
                    className="object-center"
                    width={148}
                    height={148}
                    alt="category"
                  />
                  <span className="body-M-500 text-gray-900 text-center">
                    Computer & Laptop
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
