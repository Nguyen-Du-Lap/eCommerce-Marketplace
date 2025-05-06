"use client";

import Container from "@/components/custom/Container";
import { RectangleButton } from "@/components/custom/RectangleButton";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "@phosphor-icons/react";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-secondary-700 w-full">
      <Container>
        {/* wrap */}
        <div className="w-full flex gap-[32px] flex-col items-center justify-center py-[72px] mt-[72px]">
          <div className="flex flex-col gap-3 items-center text-center w-full">
            <h1 className="text-white heading-1">
              Subscribe to our newsletter
            </h1>
            <p className="text-gray-00 body-M-400 max-w-[536px] opacity-70">
              Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
              libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
            </p>
          </div>

          {/* form */}
          <div className="flex items-center bg-white w-full max-w-[624px] p-3">
            <Input placeholder="Enter your email"
            className="text-black placeholder-gray-500 placeholder:body-M-400 border-none shadow-none focus-visible:ring-0 focus:ring-white"/>
            <RectangleButton variant="primary" className="sm:h-[48px] sm:w-[160px] ">
              <Loader2Icon className="hidden"/>
              <span className="heading-5 text-gray-00 uppercase">Subscribe</span>
              <ArrowRight size={20} />
            </RectangleButton>
          </div>

          {/* logo */}
          <div className="flex items-center gap-12 justify-center opacity-60">
            <Image src="/images/logos/google.png" width={72} height={72} alt="logo"/>
            <Image src="/images/logos/amazon.png" width={72} height={72} alt="logo"/>
            <Image src="/images/logos/philips.png" width={72} height={72} alt="logo"/>
            <Image src="/images/logos/toshiba.png" width={72} height={72} alt="logo"/>
            <Image src="/images/logos/samsung.png" width={72} height={72} alt="logo"/>
          </div>
        </div>
      </Container>
    </section>
  );
}
