"use client";

import Container from "@/components/custom/Container";
import React from "react";
import Heading from "./Heading";
import LeftBanner from "./LeftBanner";
import RightContent from "./RightContent";

export default function BestDeals() {
  return (
    <section className="mt-[72px]">
      <Container>
        <div className="flex flex-col gap-y-[24px]">
          <Heading />
          <div className="mt-[24px] flex flex-wrap lg:flex-nowrap">
            <LeftBanner />
            <RightContent />
          </div>
        </div>
      </Container>
    </section>
  );
}
