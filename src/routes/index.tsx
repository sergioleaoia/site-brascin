import { createFileRoute } from "@tanstack/react-router";
import { HeroInstitutional } from "@/components/home/HeroInstitutional";
import { Pitch } from "@/components/home/Pitch";
import { MandalaSection } from "@/components/home/MandalaSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CaseCarousel } from "@/components/home/CaseCarousel";
import { ClientsLogoWall } from "@/components/home/ClientsLogoWall";
import { AboutBrascin } from "@/components/home/AboutBrascin";
import { ContactCTA } from "@/components/layout/ContactCTA";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroInstitutional />
      <Pitch />
      <MandalaSection />
      <ServicesGrid />
      <CaseCarousel />
      <ClientsLogoWall />
      <AboutBrascin />
      <ContactCTA />
    </>
  );
}
