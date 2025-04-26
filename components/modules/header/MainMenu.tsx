"use client";

import React from "react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import IconGroup from "./IconGroup";
import Container from "@/components/custom/Container";

export default function MainMenu() {
  return (
    <nav className=" bg-secondary-700 h-[88px] border-t-1 border-t-gray-300/20">
      <Container>
        <div className="flex items-center justify-between h-full">
          <Logo />
          <SearchInput className="hidden lg:flex gap-4 items-center rounded-xs flex-1 max-w-[646px] bg-white h-[48px]"/>
          <IconGroup className="flex items-center gap-6"/>
        </div>
      </Container>
    </nav>
  );
}
