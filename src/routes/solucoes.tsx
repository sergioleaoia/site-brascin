import { createFileRoute, Link } from "@tanstack/react-router";
import { architectures } from "@/data/architectures";
import { ArchitectureSection } from "@/components/solucoes/ArchitectureSection";
import { ContactCTA } from "@/components/layout/ContactCTA";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/solucoes")({
  component: SolucoesPage,
  head: () => ({
    meta: [
      { title: "Soluções — Brascin" },
      {
        name: "description",
        content:
          "Seis arquiteturas Brascin: Data Center, Segurança, Nuvem, Redes, Colaboração e Computação Pessoal. Conheça os fabricantes parceiros em cada uma.",
      },
    ],
  }),
});

function SolucoesPage() {
  return (
    <>
      <section className="bg-foreground pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Soluções
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight text-background sm:text-6xl">
            Seis arquiteturas. Os fabricantes que lideram cada uma.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-background/70 sm:text-lg">
            A Brascin organiza o ecossistema de TI corporativa em seis arquiteturas integradas.
            Para cada uma, mantemos parceria estratégica com os fabricantes que definem o estado
            da arte do mercado.
          </p>
          <nav aria-label="Arquiteturas" className="mt-10 flex flex-wrap gap-2">
            {architectures.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="inline-flex items-center rounded-full border border-background/20 bg-background/5 px-4 py-2 text-sm font-medium text-background/90 backdrop-blur transition-colors hover:bg-background/10"
              >
                {a.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {architectures.map((arch, idx) => (
        <ArchitectureSection key={arch.id} arch={arch} index={idx} />
      ))}

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border/60 bg-secondary/30 p-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Conheça os serviços que sustentam essas arquiteturas.
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Sustentação, Segurança, Cloud e Backup — operação contínua de ponta a ponta.
              </p>
            </div>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/85"
            >
              Ver serviços
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
