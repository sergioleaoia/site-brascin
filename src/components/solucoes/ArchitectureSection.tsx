import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Architecture } from "@/data/architectures";

export function ArchitectureSection({
  arch,
  index,
}: {
  arch: Architecture;
  index: number;
}) {
  return (
    <section
      id={arch.id}
      className={index % 2 === 0 ? "bg-background" : "bg-secondary/30"}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Arquitetura
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {arch.label}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {arch.description}
            </p>
            <Link
              to="/servicos"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
            >
              Veja os serviços que sustentam essa arquitetura
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Fabricantes com quem temos parceria
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {arch.partners.map((p) => (
                <div
                  key={p.name}
                  className="flex h-20 items-center justify-center rounded-xl border border-border/60 bg-card px-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm"
                >
                  {p.logoUrl ? (
                    <img
                      src={p.logoUrl}
                      alt={p.name}
                      className="max-h-10 w-auto object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-center text-sm font-semibold text-foreground">
                      {p.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
