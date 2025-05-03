"use client";

import Container from "@/components/custom/Container";
import Image from "next/image";
import React from "react";

export default function HomeSlide() {
  return (
    <section className="my-[24px]">
      <Container>
        <div className="grid grid-cols-12 gap-x-[24px]">
          <div className="col-span-8 relative aspect-[872/520]">
            <Image
              src="/images/hero/left.png"
              alt="Banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-4 border">
            <div className="flex flex-col gap-y-[24px]">
              <Image
                src="/images/hero/top.png"
                width={424}
                height={248}
                className="w-full h-auto object-cover"
                alt="Banner"
              />
              <Image
                src="/images/hero/bottom.png"
                width={424}
                height={248}
                className="w-full h-auto object-cover"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
