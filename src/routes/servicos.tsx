import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { PillarSection } from "@/components/servicos/PillarSection";
import { ContactCTA } from "@/components/layout/ContactCTA";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  component: ServicosPage,
  head: () => ({
    meta: [
      { title: "Serviços — Brascin" },
      {
        name: "description",
        content:
          "Sustentação, Segurança, Cloud e Backup. Os quatro pilares de serviços gerenciados que a Brascin entrega para a TI corporativa.",
      },
    ],
  }),
});

function ServicosPage() {
  return (
    <>
      <section className="bg-foreground pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Serviços
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight text-background sm:text-6xl">
            Quatro pilares para sustentar e evoluir a sua TI corporativa.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-background/70 sm:text-lg">
            A Brascin estrutura sua entrega de serviços em quatro pilares integrados — pensados
            para cobrir o ciclo completo de operação, segurança, modernização e proteção do
            ambiente de tecnologia.
          </p>
          <nav
            aria-label="Pilares"
            className="mt-10 flex flex-wrap gap-2"
          >
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center rounded-full border border-background/20 bg-background/5 px-4 py-2 text-sm font-medium text-background/90 backdrop-blur transition-colors hover:bg-background/10"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {services.map((service, idx) => (
        <PillarSection key={service.id} service={service} index={idx} />
      ))}

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border/60 bg-secondary/30 p-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Quer ver os fabricantes que entregamos nesses serviços?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Conheça as seis arquiteturas Brascin e os parceiros de cada uma.
              </p>
            </div>
            <Link
              to="/solucoes"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/85"
            >
              Ver soluções
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
