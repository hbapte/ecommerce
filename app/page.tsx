// import Incentive from "@/components/products/Incentive";
// import Hero from '@/components/Hero';
import ProductCollection from "@/components/products/ProductCollection";
// import Card from "@/components/products/Card";
// import ProductRecommendation from "@/components/products/Recommendation";
// import Hero2 from "@/components/products/Hero";
import Footer from "@/components/common/Footer";

// import ProductShowcase from "@/components/Hero3";
// import FashionLandingPage from "@/components/Hero4";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/Hero2";
import CategoriesHeader from "@/components/products/Categories";
// import BrandComponent from "@/components/products/Brand";
import BannerComponent from "@/components/products/Banner";
import NewArrivals from "@/components/products/NewArrivals";
// import SearchComponent from "@/components/form/search2";
// import HeroComponent from "@/components/Hero5";
// import ProductPage from "@/components/products/ProductPage";

export default function Home() {
  return (
    <>
    {/* <FashionLandingPage /> */}
    <Navbar />
    <Hero />
    {/* <ProductShowcase /> */}

{/* <Hero /> */}
{/* <Hero2 /> */}

{/* <Card /> */}
{/* <ProductRecommendation /> */}

<CategoriesHeader />
{/* <HeroComponent /> */}
{/* <SearchComponent /> */}

{/* <BrandComponent /> */}

<ProductCollection />
<BannerComponent />
<NewArrivals />
{/* <Incentive /> */}
<Footer />

{/* <ProductPage /> */}


    </>
  );
}
