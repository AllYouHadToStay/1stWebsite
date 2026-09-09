import HeroSection from "@/components/HeroSection";
import TimelineStory from "@/components/TimelineStory";
import VibesSection from "@/components/VibesSection";
import SkillsWorks from "@/components/SkillsWorks";
import ContactEnvelope from "@/components/ContactEnvelope";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TimelineStory />
      <VibesSection />
      <SkillsWorks />
      <ContactEnvelope />
    </main>
  );
}
