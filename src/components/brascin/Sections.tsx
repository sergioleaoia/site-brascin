import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  ServerCog,
  Network,
  LineChart,
  Headset,
  ShieldCheck,
  ShieldAlert,
  EyeOff,
  Clock,
  Zap,
  FileCheck,
  Cloud,
  DatabaseBackup,
  CalendarCheck,
  MapPin,
  BadgeCheck,
  ServerCrash,
  MessageSquare,
  Handshake,
  Check,
  Star,
} from "lucide-react";
import logo from "@/assets/brascin-logo.png";
import heroImg from "@/assets/hero-datacenter.jpg";

const clientLogos = [
  { src: "/logo-costa-hirota-50anos.png", alt: "Costa Hirota" },
  { src: "/dakhia_novo_logo.png", alt: "Dakhia" },
  { src: "/lakewood-logotipo-01.png", alt: "Lakewood Investment Management" },
  { src: "/NZ_Primary_Purple_RGB_0.png", alt: "Novozymes" },
];

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Brascin";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M19.05 4.91A10 10 0 0 0 12 2a10 10 0 0 0-8.6 15.06L2 22l5.05-1.32A10 10 0 1 0 19.05 4.91zM12 20.18a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3 .78.8-2.92-.2-.3a8.18 8.18 0 1 1 6.86 3.76zm4.49-6.13c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13s-.64.8-.79.97c-.14.17-.29.18-.54.06a6.7 6.7 0 0 1-1.97-1.22 7.4 7.4 0 0 1-1.36-1.7c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17 0-.31-.04-.43-.06-.13-.56-1.34-.76-1.83-.2-.48-.4-.42-.56-.42h-.48a.92.92 0 0 0-.67.31 2.8 2.8 0 0 0-.87 2.07c0 1.22.89 2.4 1.01 2.57.13.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.07-.11-.23-.17-.48-.3z"/>
    </svg>
  );
}
/* ---------- Header ---------- */
export function Header({ onCta }: { onCta: () => void }) {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <a href="#top" aria-label="Brascin" className="flex items-center">
          <img src={logo} alt="Brascin" className="h-5 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a href="#servicos" className="hover:text-white transition">Serviços</a>
          <a href="#diferenciais" className="hover:text-white transition">Por que Brascin</a>
          <a href="#cases" className="hover:text-white transition">Cases</a>
        </nav>
        <Button onClick={onCta} className="bg-accent text-accent-foreground hover:bg-accent/90 hidden md:inline-flex">
          Falar com Especialista
        </Button>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
const partners = ["Microsoft", "Cisco", "Acronis"];

export function Hero({ onPrimary: _onPrimary }: { onPrimary: () => void }) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-gradient-hero text-white">
      <img
        src={heroImg}
        alt="Datacenter corporativo"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50"
      />
      {/* Left-to-right gradient: very dark over text, lighter to the right */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[oklch(0.06_0.02_255)] from-35% via-[oklch(0.10_0.03_255)/0.92] via-70% to-[oklch(0.18_0.05_255)/0.6]"
        aria-hidden
      />
      {/* Vertical reinforcement for legibility */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/25 to-black/60"
        aria-hidden
      />
      {/* Subtle dot grid for depth */}
      <div className="absolute inset-0 -z-10 hero-dotgrid opacity-60" aria-hidden />

      <div className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          <div>
            <div className="reveal reveal-1 mb-7 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 py-1.5 pl-2 pr-4 backdrop-blur-sm">
              <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent-foreground">
                Grátis
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Diagnóstico de TI · 30 min
              </span>
            </div>

            <h1 className="reveal reveal-2 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Sua operação de TI <span className="text-accent">não pode parar.</span>
            </h1>
            <p className="reveal reveal-3 mt-5 max-w-2xl text-lg leading-[1.5] text-white/85 sm:text-xl">
              Em 30 minutos, um especialista Brascin mapeia sua operação, expõe riscos críticos e identifica custos ocultos. <span className="text-white">Sem compromisso.</span>
            </p>

            <div className="reveal reveal-4 mt-9 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 gap-2 bg-[#25D366] px-7 text-base font-semibold text-white shadow-[0_8px_24px_-8px_oklch(0.65_0.18_145/0.55)] hover:bg-[#1ebe57]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5" /> Falar com Especialista
                </a>
              </Button>
            </div>

            {/* Trust stats — clean, no surrounding box */}
            <dl className="reveal reveal-5 mt-12 flex flex-wrap items-start gap-x-12 gap-y-6">
              {[
                { k: "40", s: "anos", l: "sustentando TI crítica" },
                { k: "600", s: "+", l: "ambientes atendidos" },
                { k: "24/7", s: "", l: "monitoramento ativo" },
              ].map((t) => (
                <div key={t.l}>
                  <dt className="flex items-baseline gap-0.5">
                    <span className="text-xl font-bold tracking-tight text-white">{t.k}</span>
                    <span className="text-xs font-semibold text-accent">{t.s}</span>
                  </dt>
                  <dd className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-white/55 leading-tight">{t.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Partners strip — same style as before, refined */}
        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">Parceiros estratégicos</p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {partners.map((p) => (
              <span key={p} className="text-lg font-semibold tracking-tight text-white/65">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Diagnostic (deliverables) ---------- */
const diagnosticItems = [
  {
    n: "01",
    title: "Mapeamento de arquitetura",
    desc: "Levantamento da operação atual e identificação de pontos de risco.",
  },
  {
    n: "02",
    title: "Análise de custos",
    desc: "Diagnóstico de fornecedores redundantes e oportunidades de consolidação.",
  },
  {
    n: "03",
    title: "Segurança e LGPD",
    desc: "Avaliação de aderência regulatória e gaps de segurança da informação.",
  },
  {
    n: "04",
    title: "Plano de ação",
    desc: "Recomendações priorizadas, entregues em até 5 dias úteis.",
  },
];

export function DiagnosticSection() {
  return (
    <section id="diagnostico" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            <span className="live-dot" aria-hidden /> Diagnóstico gratuito · 30 min
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sustentação, segurança e modernização da sua TI.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            40 anos em serviços gerenciados, segurança, backup e cloud. Comece com um diagnóstico de 30 minutos — sem compromisso.
          </p>
        </div>

        <div className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            O que você recebe no diagnóstico
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {diagnosticItems.map((item) => (
            <div
              key={item.n}
              className="flex gap-5 rounded-lg border border-border/60 bg-card p-7 shadow-card"
            >
              <span className="text-2xl font-bold leading-none tracking-tight text-accent">
                {item.n}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/60 pt-8">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Algumas das operações sustentadas
          </p>
          <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
              {clientLogos.map((c) => (
                <img
                  key={c.alt}
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  className="h-9 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
            <Button
              asChild
              size="lg"
              className="h-12 gap-2 bg-[#25D366] px-7 text-base font-semibold text-white shadow-[0_8px_24px_-8px_oklch(0.65_0.18_145/0.55)] hover:bg-[#1ebe57]"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" /> Falar com Especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Problem ---------- */
const problems = [
  { icon: ServerCrash, title: "Indisponibilidade de sistemas" },
  { icon: Network, title: "Dificuldade na gestão de TI" },
  { icon: EyeOff, title: "Falta de monitoramento" },
  { icon: ShieldAlert, title: "Riscos de segurança" },
  { icon: DatabaseBackup, title: "Backups sem validação" },
  { icon: LineChart, title: "Custos elevados com infraestrutura local" },
  { icon: Clock, title: "Lentidão no suporte aos usuários" },
];

const solutions = [
  {
    icon: BadgeCheck,
    title: "Equipe especializada",
    body: "Para operações críticas e ambientes complexos.",
  },
  {
    icon: Zap,
    title: "Senso de urgência",
    body: "Foco na continuidade operacional do seu negócio.",
  },
  {
    icon: Handshake,
    title: "Parceria estratégica",
    body: "Para sustentação, segurança e evolução do seu ambiente de TI.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sua empresa enfrenta esses desafios?
          </h2>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title }) => (
            <Card key={title} className="flex items-center gap-3 p-4 shadow-card border-border/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-sm font-semibold leading-tight text-foreground">{title}</h3>
            </Card>
          ))}
        </div>

        <div className="mt-16 border-t border-border/60 pt-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Para cada um desses desafios
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              A Brascin estrutura, protege e sustenta sua operação de TI.
            </h3>
            <p className="mt-3 text-base text-muted-foreground">
              Com segurança e previsibilidade.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solutions.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-lg border border-border/60 bg-card p-7 shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h4 className="mt-5 text-lg font-semibold text-foreground">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-base text-muted-foreground">
              Comece com um diagnóstico de 30 minutos — sem compromisso.
            </p>
            <Button
              asChild
              size="lg"
              className="h-12 gap-2 bg-[#25D366] px-7 text-base font-semibold text-white shadow-[0_8px_24px_-8px_oklch(0.65_0.18_145/0.55)] hover:bg-[#1ebe57]"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" /> Solicitar avaliação do ambiente
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const managedTiers = [
  {
    icon: Headset,
    tag: "Essencial",
    title: "Brascin Core",
    desc: "Sustentação básica para pequenas operações.",
    bullets: [
      "Suporte técnico remoto",
      "Monitoramento básico",
      "Gestão de usuários",
      "Atendimento em horário comercial",
    ],
    price: "A partir de R$ 700/mês",
    cta: "Falar com Especialista",
    highlight: false,
  },
  {
    icon: ServerCog,
    tag: "Mais escolhido",
    title: "Brascin Prime",
    desc: "Para empresas com maior demanda operacional.",
    bullets: [
      "Equipe especializada (usuários, servidores, redes)",
      "Suporte remoto e presencial",
      "Administração Microsoft 365",
      "Monitoramento proativo",
    ],
    price: "Investimento sob consulta",
    cta: "Solicitar Proposta",
    highlight: true,
  },
  {
    icon: BadgeCheck,
    tag: "Personalizado",
    title: "Brascin Elite",
    desc: "Operação completa para ambientes críticos.",
    bullets: [
      "Service Desk dedicado",
      "Gestão completa de infraestrutura",
      "Segurança e monitoramento contínuo",
      "Atendimento personalizado",
    ],
    price: "Projeto customizado",
    cta: "Falar com Especialista",
    highlight: false,
  },
];

const specificServices = [
  {
    icon: ShieldCheck,
    category: "Segurança da Informação",
    title: "Firewall as a Service",
    desc: "Proteção contínua com gestão especializada.",
    bullets: [
      "Firewall Fortinet incluído",
      "Implantação + monitoramento 24/7",
      "VPN e políticas de segurança",
    ],
    price: "A partir de R$ 890/mês",
    cta: "Falar com Especialista",
  },
  {
    icon: DatabaseBackup,
    category: "Backup e Recuperação",
    title: "Backup Corporativo Acronis | Brascin",
    desc: "Proteja sua operação contra perda de dados, falhas e ransomware.",
    bullets: [
      "Proteção contra ransomware",
      "Continuidade operacional",
      "Recuperação rápida",
      "Proteção do negócio",
    ],
    price: "Pacote mensal com Servidor Físico + VM + Dados em condição especial",
    cta: "Falar com Especialista",
  },
  {
    icon: Cloud,
    category: "Infraestrutura em Nuvem",
    title: "Migração e Sustentação",
    desc: "Modernização com Microsoft Azure.",
    bullets: [
      "Assessment e planejamento",
      "Migração completa para Azure",
      "Sustentação e otimização de custos",
      "Dimensionamento personalizado",
    ],
    price: "Projeto personalizado",
    cta: "Solicitar Assessment",
  },
];

export function ServicesSection({ onCta }: { onCta: () => void }) {
  return (
    <section id="servicos" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Soluções para cada estágio da sua operação de TI.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Escolha o modelo ideal para o tamanho e a criticidade do seu ambiente.
          </p>
        </div>

        {/* Bloco 1: Serviços Gerenciados */}
        <div className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Serviços Gerenciados de TI
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {managedTiers.map(({ icon: Icon, tag, title, desc, bullets, price, cta, highlight }) => (
              <Card
                key={title}
                className={
                  "relative flex flex-col p-8 shadow-card transition hover:-translate-y-1 hover:shadow-elevated " +
                  (highlight ? "border-accent ring-2 ring-accent" : "")
                }
              >
                <div className="flex items-center justify-between">
                  <span
                    className={
                      "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold " +
                      (highlight
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary/10 text-primary")
                    }
                  >
                    {highlight && <Star className="h-3 w-3" />}
                    {tag}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                </div>
                <h4 className="mt-6 text-2xl font-bold text-foreground">{title}</h4>
                <p className="mt-2 text-muted-foreground">{desc}</p>
                <ul className="mt-5 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-base font-semibold text-foreground">{price}</p>
                <Button
                  asChild
                  className="mt-5 w-full bg-[#25D366] text-white hover:bg-[#1ebe57]"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {/* SLA + diferenciais (card deitado) */}
          <Card className="mt-8 p-8 shadow-card md:p-10">
            <div className="grid gap-10 md:grid-cols-[minmax(0,5fr),minmax(0,7fr)] md:items-start md:gap-12">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  <FileCheck className="h-3.5 w-3.5" strokeWidth={2} aria-hidden /> Atendimento sob SLA
                </span>
                <h4 className="mt-5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Compromisso por escrito. Em todos os planos.
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">SLA</span> (Service Level Agreement) é o contrato formal que define, por escrito, prazos de atendimento, disponibilidade e penalidades em caso de descumprimento.{" "}
                  <span className="text-foreground">Sem "melhor esforço". Sem ambiguidade.</span>
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-3 md:border-l md:border-border/60 md:pl-12">
                {solutions.map(({ icon: Icon, title, body }) => (
                  <div key={title}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h5 className="mt-3 text-sm font-semibold text-foreground">{title}</h5>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Bloco 2: Serviços Específicos */}
        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Serviços Específicos
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {specificServices.map(({ icon: Icon, category, title, desc, bullets, price, cta }) => (
              <Card
                key={title}
                className="flex flex-col p-8 shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {category}
                </p>
                <h4 className="mt-1 text-xl font-bold text-foreground">{title}</h4>
                <p className="mt-2 text-muted-foreground">{desc}</p>
                <ul className="mt-5 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-foreground">{price}</p>
                <Button
                  asChild
                  className="mt-5 w-full bg-[#25D366] text-white hover:bg-[#1ebe57]"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-lg text-muted-foreground">Não sabe qual é o ideal?</p>
          <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#1ebe57]">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" /> Fale Agora com um Especialista no Whatsapp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Brascin ---------- */
const pillars = [
  { icon: CalendarCheck, title: "40 anos de mercado", body: "Quatro décadas sustentando ambientes de tecnologia em empresas de todos os portes." },
  { icon: MapPin, title: "Cobertura nacional", body: "Capacidade de atendimento em todo o território nacional, com presença consolidada nos principais centros." },
  { icon: BadgeCheck, title: "Equipe certificada", body: "Time técnico com certificações Microsoft, Cisco e Acronis. Expertise comprovada nas principais tecnologias." },
  { icon: ServerCrash, title: "Operações críticas", body: "Sustentamos ambientes 24/7 de empresas que não podem parar — de pequenas operações a grandes corporações." },
  { icon: MessageSquare, title: "Atuação consultiva", body: "Vamos além da execução técnica. Atuamos como consultores estratégicos no planejamento da sua TI." },
  { icon: Handshake, title: "Parcerias estratégicas", body: "Parceira oficial da Microsoft, Cisco e Acronis. Acesso direto às melhores tecnologias do mercado." },
];

export function WhyBrascinSection() {
  return (
    <section id="diferenciais" className="bg-muted/60 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            40 anos sustentando operações críticas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Não somos um fornecedor a mais. Somos parceiros estratégicos de tecnologia.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-lg border border-border/60 bg-background p-7 shadow-card">
              <Icon className="h-9 w-9 text-primary" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-border/60 pt-10">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Nossos parceiros estratégicos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[
              { src: "/Microsoft-Solution-Partner-.png", alt: "Microsoft Solutions Partner", className: "h-14" },
              { src: "/cisco-partner.png", alt: "Cisco Partner", className: "h-14" },
              { src: "/acronis-partner-logo.webp", alt: "Acronis Partner", className: "h-24" },
            ].map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className={`${p.className} w-auto object-contain`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Cases ---------- */
const cases = [
  { client: "Santander Universidades", sector: "Financeiro / Educação", tag: "Modernização", title: "Espaços Digitais Nacionais", body: "Implantação de espaços digitais em universidades de todo o Brasil. Construção de laboratórios de informática e modernização de infraestrutura para novos modelos de ensino." },
  { client: "Banco Safra", sector: "Financeiro", tag: "Serviços Gerenciados", title: "20 anos de Service Desk", body: "Duas décadas atuando na operação de Service Desk e Field Services. Suporte contínuo a usuários de microinformática e telecom, além de projetos pontuais." },
  { client: "UNIPAR", sector: "Indústria", tag: "Infraestrutura", title: "Migração de 1.200 máquinas", body: "Implementação de Active Directory com migração de aproximadamente 1.200 máquinas e usuários. Projeto complexo de infraestrutura corporativa." },
  { client: "Sistema Galgo", sector: "Financeiro", tag: "Cloud", title: "Operação 100% em Nuvem", body: "Implementação de arquitetura totalmente baseada em Microsoft Azure e Microsoft 365, eliminando dependência de infraestrutura local. Sustentação contínua." },
];
export function CasesSection() {
  return (
    <section id="cases" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Quem confia na Brascin</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mais de 600 empresas atendidas. Cases que falam por si.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-8 border-y border-border/60 py-10">
          {clientLogos.map((c) => (
            <img
              key={c.alt}
              src={c.src}
              alt={c.alt}
              loading="lazy"
              className="h-10 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-12"
            />
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <Card key={c.client} className="p-7 shadow-card">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.sector}</span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{c.tag}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">{c.client}</h3>
              <p className="mt-1 text-xl font-bold text-foreground">{c.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function CtaSection({ onPrimary, onSecondary }: { onPrimary: () => void; onSecondary: () => void }) {
  return (
    <section className="bg-gradient-cta py-20 text-white md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
          Vamos conversar sobre os desafios da sua TI?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
          Um especialista da Brascin pode entender sua operação e indicar o melhor caminho — sem compromisso.
        </p>
        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/85">
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Análise técnica gratuita</li>
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Equipe certificada Microsoft, Cisco e Acronis</li>
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Atendimento em todo o Brasil</li>
        </ul>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={onPrimary} size="lg" className="h-12 bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent/90">
            Falar com Especialista
          </Button>
          <Button
            onClick={onSecondary}
            size="lg"
            variant="outline"
            className="h-12 border-white/30 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            Solicitar Diagnóstico
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-8 px-6 py-12 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <img src={logo} alt="Brascin" className="h-7 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/75">
            Soluções em TI para auxiliar na transformação digital da sua empresa.
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-primary-foreground/75">
            Rua Gama Cerqueira, 486 — Cambuci
          </p>
          <p className="mt-1 text-sm text-primary-foreground/75">
            CEP: 01539-010 — São Paulo, SP
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Sticky mobile CTA ---------- */
export function StickyMobileCta({ onCta }: { onCta: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <Button onClick={onCta} className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
        Falar com Especialista
      </Button>
    </div>
  );
}