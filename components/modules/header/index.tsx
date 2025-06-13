"use client";

import React from "react";
import SocialMenu from "./SocialMenu";
import MainMenu from "./MainMenu";
import Menus from "./Menus";
import { useCategoryGet } from "@/hooks/useCategoryData";

export default function Header() {
  const { data } = useCategoryGet();
  const categories = data?.data.result.content || [];
  return (
    <header>
      <SocialMenu className="hidden lg:block" />
      <MainMenu />
      <Menus
        className="hidden lg:block"
        categories={categories}
      />
    </header>
  );
}
