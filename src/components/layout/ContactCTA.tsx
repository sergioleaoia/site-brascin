import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-foreground py-20 sm:py-28">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(800px 400px at 80% 20%, oklch(0.34 0.09 255 / 0.4), transparent 60%), radial-gradient(600px 300px at 10% 90%, oklch(0.65 0.20 250 / 0.25), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-background sm:text-5xl">
          Vamos desenhar a TI que sustenta o seu negócio.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-background/70 sm:text-lg">
          Conte para a Brascin o seu cenário. Em uma conversa de 30 minutos mapeamos arquitetura,
          serviços e fabricantes que fazem sentido para a sua operação.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:contato@brascin.com.br"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3 text-base font-semibold text-foreground shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            Falar com um especialista
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+551100000000"
            className="inline-flex items-center justify-center rounded-md border border-background/30 px-6 py-3 text-base font-semibold text-background transition-colors hover:bg-background/10"
          >
            (11) 0000-0000
          </a>
        </div>
      </div>
    </section>
  );
}
