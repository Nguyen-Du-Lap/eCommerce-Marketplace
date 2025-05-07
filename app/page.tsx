import Header from "@/components/modules/header";
import HomeSlide from "@/components/modules/hero/HomeSlide";
import Payments from "../components/custom/Payments";
import BestDeals from "@/components/modules/best-deals";
import Newsletter from "@/components/modules/newsletter";
import Footer from "@/components/modules/footer";
import ShopCategory from "@/components/modules/shopcategory";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeSlide />
      <Payments />
      <BestDeals />
      <ShopCategory />
      <Newsletter />
      <Footer/>
    </>
  );
}
