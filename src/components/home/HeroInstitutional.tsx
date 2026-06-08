import { ArrowRight, ShieldCheck, Server, Cloud } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-datacenter.jpg";

const highlights = [
  { icon: Server, label: "Data Center" },
  { icon: ShieldCheck, label: "Segurança" },
  { icon: Cloud, label: "Cloud & Redes" },
];

export function HeroInstitutional() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 85% -10%, oklch(0.65 0.20 250 / 0.10), transparent 60%), radial-gradient(600px 400px at -10% 110%, oklch(0.24 0.06 255 / 0.08), transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.24 0.06 255 / 0.10) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Integradora de TI corporativa
            </p>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Arquiteturas e serviços para sustentar a{" "}
              <span className="text-accent">TI que move o seu negócio</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Brascin desenha, implanta e opera ambientes de tecnologia corporativa em parceria
              com os principais fabricantes do mercado — do data center ao endpoint, da rede ao
              cloud, da operação contínua à recuperação de desastres.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/solucoes"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                Conheça as soluções
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Nossos serviços
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="font-medium text-foreground/80">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-3xl opacity-60 blur-2xl"
                style={{
                  background:
                    "radial-gradient(closest-side, oklch(0.65 0.20 250 / 0.25), transparent)",
                }}
                aria-hidden
              />
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-elevated">
                <img
                  src={heroImage}
                  alt="Data center corporativo Brascin"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border/70 bg-card px-4 py-3 shadow-card sm:block">
                <div className="flex items-center gap-3">
                  <span className="live-dot" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Operação 24×7
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      SLA monitorado em tempo real
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
