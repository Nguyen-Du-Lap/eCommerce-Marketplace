import Header from "@/components/modules/header";
import HomeSlide from "@/components/modules/hero/HomeSlide";
import Payments from "../components/custom/Payments";
import BestDeals from "@/components/modules/best-deals";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeSlide />
      <Payments />
      <BestDeals />
      <Payments />
    </>
  );
}
