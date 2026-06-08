import portrait from "@/assets/hero-portrait.jpg";

const milestones = [
  { year: "Fundação", body: "Brascin nasce como integradora de TI corporativa em São Paulo." },
  { year: "Parcerias", body: "Conquista de certificações estratégicas com os principais fabricantes do setor." },
  { year: "Serviços", body: "Estruturação da operação de sustentação, segurança, cloud e backup gerenciados." },
  { year: "Hoje", body: "Atende clientes corporativos em todo o Brasil com foco em arquitetura e operação contínua." },
];

export function AboutBrascin() {
  return (
    <section id="sobre" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-[0_12px_32px_-12px_oklch(0.24_0.06_255/0.18)]">
              <img
                src={portrait}
                alt="Equipe Brascin"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Sobre nós
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A história da Brascin é a história de cada cliente que sustentamos.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Construída por um time técnico que viveu projetos de TI corporativa na ponta, a
              Brascin entrega o que aprendeu na prática — arquitetura, fabricantes certos e
              operação que não para.
            </p>

            <ol className="mt-10 space-y-6 border-l border-border/60 pl-6">
              {milestones.map((m) => (
                <li key={m.year} className="relative">
                  <span
                    className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-accent ring-4 ring-secondary/30"
                    aria-hidden
                  />
                  <p className="text-sm font-semibold text-accent">{m.year}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
