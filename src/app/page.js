import FeaturesSection from "@/components/Home/FeaturesSection";
import HeaderSection from "@/components/Home/HeaderSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeaderSection></HeaderSection>
      <FeaturesSection></FeaturesSection>
    </div>
  );
}
