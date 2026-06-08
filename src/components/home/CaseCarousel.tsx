import { ArrowRight } from "lucide-react";
import { cases } from "@/data/cases";
import { architectureById } from "@/data/architectures";
import { serviceById } from "@/data/services";

export function CaseCarousel() {
  return (
    <section id="casos-de-sucesso" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Casos de sucesso
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Histórias reais de clientes que escolheram a Brascin.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.id}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.industry}
                </p>
              </div>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                {c.client}
              </h3>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-foreground">Desafio</dt>
                  <dd className="mt-0.5 text-muted-foreground">{c.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Solução</dt>
                  <dd className="mt-0.5 text-muted-foreground">{c.solution}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-accent">Resultado</dt>
                  <dd className="mt-0.5 text-muted-foreground">{c.outcome}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                {c.tags.architectures?.map((id) => (
                  <a
                    key={id}
                    href={`/solucoes#${id}`}
                    className="rounded-md bg-secondary/70 px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {architectureById(id).label}
                  </a>
                ))}
                {c.tags.services?.map((id) => (
                  <a
                    key={id}
                    href={`/servicos#${id}`}
                    className="rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/15"
                  >
                    {serviceById(id).label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            Quer contar a sua história ao lado da Brascin?
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
