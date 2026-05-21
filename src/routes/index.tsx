import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import {
  Header,
  Hero,
  DiagnosticSection,
  ProblemSection,
  ServicesSection,
  WhyBrascinSection,
  CasesSection,
  CtaSection,
  Footer,
  StickyMobileCta,
} from "@/components/brascin/Sections";
import { ContactModal } from "@/components/brascin/ContactModal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactVariant, setContactVariant] = useState<"contact" | "diagnostic">("contact");

  const openContact = () => {
    setContactVariant("contact");
    setContactOpen(true);
  };
  const openDiagnostic = () => {
    setContactVariant("diagnostic");
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCta={openContact} />
      <main>
        <Hero onPrimary={openContact} />
        <DiagnosticSection />
        <ServicesSection onCta={openContact} />
        <ProblemSection />
        <WhyBrascinSection />
        <CasesSection />
        <CtaSection onPrimary={openContact} onSecondary={openDiagnostic} />
      </main>
      <Footer />
      <StickyMobileCta onCta={openContact} />

      <ContactModal
        open={contactOpen}
        onOpenChange={setContactOpen}
        title={contactVariant === "diagnostic" ? "Solicitar Diagnóstico" : "Falar com Especialista"}
        description={
          contactVariant === "diagnostic"
            ? "Receba um diagnóstico técnico inicial da sua operação de TI, sem compromisso."
            : "Conte sobre sua operação. Um especialista da Brascin retornará em até 1 dia útil."
        }
      />

      <Toaster richColors position="top-right" />
    </div>
  );
}
