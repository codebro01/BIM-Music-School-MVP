import HeroSection from "@/components/landing/HeroSection";
import AboutUsSection from "@/components/landing/AboutUsSection";
import ProgramsOfferedSection from "@/components/landing/ProgramsOfferedSection";
import WhyChooseUsSection from "@/components/landing/WhyChooseUsSection";
import ContactFooterSection from "@/components/landing/ContactFooterSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutUsSection />
      <ProgramsOfferedSection />
      <WhyChooseUsSection />
      {/* Gallery/Testimonials section could be added here if desired */}
      <ContactFooterSection />
    </main>
  );
}
