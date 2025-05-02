import React from "react";
import SocialMenu from "./SocialMenu";
import MainMenu from "./MainMenu";
import Menus from "./Menus";
import { getCategory } from "@/actions/category";
import { getProducts } from "@/actions/product";
import { getCampaigns } from "@/actions/campaigns";

export default async function Header() {
  const categories = await getCategory();
  const products = await getProducts();
  const campaigns = await getCampaigns("homepage-product-best-deals-section");
  return (
    <header>
      <SocialMenu className="hidden lg:block" />
      <MainMenu />
      <Menus
        className="hidden lg:block"
        categories={categories}
        products={products}
        campaigns={campaigns}
      />
    </header>
  );
}
