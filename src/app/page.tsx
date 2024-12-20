import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import ScrollData from "@/components/ScrollData";
import TestimonialCards from "@/components/TestimonialCards";
import TopInstructors from "@/components/TopInstructors";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <main className="bg-black/[0.9] min-h-screen antialiased">
      <HeroSection />
      <FeaturedCourses />
      <ScrollData />
      <TestimonialCards />
      <UpcomingEvents />
      <TopInstructors />
    </main>
  );
}
