"use client";

import React from "react";
import SocialMenu from "./SocialMenu";
import MainMenu from "./MainMenu";
import Menus from "./Menus";

export default function Header() {
  return (
    <header>
      <SocialMenu className="hidden lg:block"/>
      <MainMenu />
      <Menus />
    </header>
  );
}
