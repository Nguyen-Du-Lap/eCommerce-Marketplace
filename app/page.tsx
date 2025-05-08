import HomeSlide from "@/components/modules/hero/HomeSlide";
import Payments from "../components/custom/Payments";
import BestDeals from "@/components/modules/best-deals";
import ShopCategory from "@/components/modules/shopcategory";

export default function Home() {
  return (
    <>
      <HomeSlide />
      <Payments />
      <BestDeals />
      <ShopCategory />
    </>
  );
}
