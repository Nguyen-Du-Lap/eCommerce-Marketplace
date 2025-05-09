"use client";

import React from "react";
import ImageGroup from "./ImageGroup";
import Details from "./Details";
import Container from "@/components/custom/Container";

export default function ProductDetail() {
  return (
    <section className="py-[32px]">
      <Container>
        {/* wrap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[56px]">
          {/* Product Images */}
          <ImageGroup />

          {/* Product Details */}
          <Details />
        </div>
      </Container>
    </section>
  );
}
