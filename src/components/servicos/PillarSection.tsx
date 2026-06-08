import { Check } from "lucide-react";
import type { Service } from "@/data/services";

export function PillarSection({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const reverse = index % 2 === 1;
  return (
    <section
      id={service.id}
      className={index % 2 === 0 ? "bg-background" : "bg-secondary/30"}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div
          className={`grid grid-cols-1 gap-12 lg:items-center lg:gap-16 ${
            reverse ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"
          }`}
        >
          <div className={reverse ? "lg:order-2" : ""}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-background">
              <Icon className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent">
              Serviço
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {service.label}
            </h2>
            <p className="mt-3 text-lg font-medium text-foreground/80">{service.tagline}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>

          <div className={reverse ? "lg:order-1" : ""}>
            <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                O que entregamos
              </p>
              <ul className="mt-4 space-y-3">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
