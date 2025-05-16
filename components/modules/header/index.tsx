import React from "react";
import SocialMenu from "./SocialMenu";
import MainMenu from "./MainMenu";
import Menus from "./Menus";
import CategoryService from "@/services/category.service";

export default async function Header() {
  const categories = await CategoryService.getCategories();
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
