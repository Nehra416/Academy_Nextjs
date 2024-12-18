import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import ScrollData from "@/components/ScrollData";

export default function Home() {
  return (
    <main className="bg-black/[0.9] min-h-screen antialiased">
      <HeroSection />
      <FeaturedCourses />
      <ScrollData />
    </main>
  );
}
