"use client";

import React from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
          navigation={true}
          pagination={true}
          breakpoints={{
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
        
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          ...
        </Swiper>
      </Container>
    </section>
  );
}
