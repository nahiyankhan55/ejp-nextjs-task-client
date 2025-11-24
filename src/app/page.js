import FeaturesSection from "@/components/Home/FeaturesSection";
import HeaderSection from "@/components/Home/HeaderSection";
import ProductsSection from "@/components/Home/ProductsSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeaderSection></HeaderSection>
      <FeaturesSection></FeaturesSection>
      <ProductsSection></ProductsSection>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
}
