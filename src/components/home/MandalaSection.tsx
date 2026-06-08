import { ArchitectureMandala } from "./ArchitectureMandala";

export function MandalaSection() {
  return (
    <section id="arquiteturas" className="relative isolate overflow-hidden bg-secondary/30 py-20 sm:py-28">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 500px at 18% 30%, oklch(0.65 0.20 250 / 0.07), transparent 60%), radial-gradient(600px 400px at 90% 80%, oklch(0.61 0.19 300 / 0.06), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Soluções e fabricantes
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Seis arquiteturas. Dezenas de fabricantes. Uma só integradora.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            A Brascin organiza o ecossistema de TI corporativa em seis arquiteturas — e mantém
            parcerias estratégicas com os fabricantes que lideram cada uma delas.
          </p>
        </div>

        <ArchitectureMandala />
      </div>
    </section>
  );
}
