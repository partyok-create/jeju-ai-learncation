import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProgramIntro } from "@/components/ProgramIntro";
import { ProjectSelector } from "@/components/ProjectSelector";
import { JejuClassroom } from "@/components/JejuClassroom";
import { PlaceToBuild } from "@/components/PlaceToBuild";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { ExperienceToContent } from "@/components/ExperienceToContent";
import { Journey } from "@/components/Journey";
import { BeforeAfter } from "@/components/BeforeAfter";
import { AIMentors } from "@/components/AIMentors";
import { Audience } from "@/components/Audience";
import { Pricing } from "@/components/Pricing";
import { FoundingCohort } from "@/components/FoundingCohort";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProgramIntro />
      <JejuClassroom />
      <ProjectSelector />
      <PlaceToBuild />
      <ExperienceGrid />
      <ExperienceToContent />
      <Journey />
      <BeforeAfter />
      <AIMentors />
      <Audience />
      <Pricing />
      <FoundingCohort />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCta />
    </main>
  );
}
