import { FaHandPointUp } from "react-icons/fa6";
import HeroSection from "./components/layouts/home/hero";
import CategoriesSection from "./components/layouts/home/categories";
import ProductsSection from "./components/layouts/home/products";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
}
