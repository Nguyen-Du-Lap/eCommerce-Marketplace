"use client";

import React from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import { CreditCard, Headphones, Package, Trophy } from "@phosphor-icons/react";

export default function Payments() {
  return (
    <section className="mt-[24px]">
      <Container>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination]}
          navigation={false}
          pagination={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 28,
            },
            575: {
              slidesPerView: 1,
              spaceBetween: 28,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 28,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
          }}
          className="border border-gray-100 flex items-center p-[16px]"
        >
          <SwiperSlide className="py-[16px]">
            <div className="flex flex-row items-center justify-center gap-[8px] p-[16px] lg:after:h-10 lg:after:w-[1px] after:translate-x-14 after:bg-gray-100">
              <Package size={40} weight="light"/>
              <div className="flex flex-col gap-1">
                <h6 className="label-3 text-gray-900 uppercase">Fasted Delivery</h6>
                <p className="body-S-400 text-gray-600">Delivery in 24/H</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-[16px]">
            <div className="flex flex-row items-center justify-center gap-[8px] p-[16px] lg:after:h-10 lg:after:w-[1px] after:translate-x-14 after:bg-gray-100">
              <Trophy size={40} weight="light" />
              <div className="flex flex-col gap-1">
                <h6 className="label-3 text-gray-900 uppercase">Fasted Delivery</h6>
                <p className="body-S-400 text-gray-600">Delivery in 24/H</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-[16px]">
            <div className="flex flex-row items-center justify-center gap-[8px] p-[16px] lg:after:h-10 lg:after:w-[1px] after:translate-x-14 after:bg-gray-100">
              <CreditCard  size={40} weight="light"/>
              <div className="flex flex-col gap-1">
                <h6 className="label-3 text-gray-900 uppercase">Fasted Delivery</h6>
                <p className="body-S-400 text-gray-600">Delivery in 24/H</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-[16px]">
            <div className="flex flex-row items-center justify-center gap-[8px] p-[16px] lg:after:h-10 lg:after:w-[1px] after:translate-x-14 after:bg-gray-100">
              <Headphones size={40} weight="light"/>
              <div className="flex flex-col gap-1">
                <h6 className="label-3 text-gray-900 uppercase">Fasted Delivery</h6>
                <p className="body-S-400 text-gray-600">Delivery in 24/H</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}
