
import React from "react";
import SocialMenu from "./SocialMenu";
import MainMenu from "./MainMenu";
import Menus from "./Menus";
import { getCategory } from "@/actions/category";

export default async function Header() {
  const categories = await getCategory();
  return (
    <header>
      <SocialMenu className="hidden lg:block"/>
      <MainMenu />
      <Menus className="hidden lg:block" categories={categories}/>
    </header>
  );
}
