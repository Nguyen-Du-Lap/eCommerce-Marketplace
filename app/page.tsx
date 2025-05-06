import Header from "@/components/modules/header";
import HomeSlide from "@/components/modules/hero/HomeSlide";
import Payments from "../components/custom/Payments";
import BestDeals from "@/components/modules/best-deals";
import Newsletter from "@/components/modules/newsletter";
import Footer from "@/components/modules/footer";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeSlide />
      <Payments />
      <BestDeals />
      <Newsletter />
      <Footer/>
    </>
  );
}
