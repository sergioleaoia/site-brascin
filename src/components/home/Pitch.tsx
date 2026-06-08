import { Building2, Handshake, ShieldCheck, Zap } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Foco corporativo",
    body: "Atendimento dedicado a operações críticas de média e grande empresa.",
  },
  {
    icon: Handshake,
    title: "Parcerias estratégicas",
    body: "Acesso aos roadmaps e certificações dos principais fabricantes globais.",
  },
  {
    icon: ShieldCheck,
    title: "Operação confiável",
    body: "Serviços gerenciados, SLAs claros e governança em todas as entregas.",
  },
  {
    icon: Zap,
    title: "Execução ponta a ponta",
    body: "Desenho, implantação, sustentação e evolução de toda a stack de TI.",
  },
];

export function Pitch() {
  return (
    <section id="o-que-fazemos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            O que fazemos
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tecnologia corporativa entregue como uma parceria, não como um pedido de venda.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
