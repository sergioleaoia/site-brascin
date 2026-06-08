import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section id="servicos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Serviços
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Quatro pilares para sustentar e evoluir a sua TI.
            </h2>
          </div>
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
          >
            Ver todos os serviços
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ id, label, tagline, icon: Icon }) => (
            <Link
              key={id}
              to="/servicos"
              hash={id}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background transition-colors group-hover:bg-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
                {label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tagline}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Saiba mais
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
