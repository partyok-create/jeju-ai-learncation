import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProgramIntro } from "@/components/ProgramIntro";
import { ProjectSelector } from "@/components/ProjectSelector";
import { JejuClassroom } from "@/components/JejuClassroom";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { ExperienceToContent } from "@/components/ExperienceToContent";
import { Journey } from "@/components/Journey";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Audience } from "@/components/Audience";
import { Included } from "@/components/Included";
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
      <ProjectSelector />
      <JejuClassroom />
      <ExperienceGrid />
      <ExperienceToContent />
      <Journey />
      <BeforeAfter />
      <Audience />
      <Included />
      <FoundingCohort />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCta />
    </main>
  );
}
