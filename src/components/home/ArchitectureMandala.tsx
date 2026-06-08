import { useState, useRef, useEffect, useId } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Server,
  ShieldCheck,
  Cloud,
  Network,
  Users,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { architectures, type Architecture, type ArchitectureId } from "@/data/architectures";

/**
 * Geometry: 6 wedges of 60°, centered at clockwise-from-north angles
 * Data Center 330°, Segurança 30°, Redes 90°, Colaboração 150°,
 * Comp. Pessoal 210°, Nuvem 270°.
 */
const VIEW = 640;
const CX = VIEW / 2;
const CY = VIEW / 2;
const R_OUTER = 280;
const R_INNER = 96;
const R_ICON = 222;
const R_LABEL = 176;

const WEDGE_DEG = 60;

const ORDER: { id: ArchitectureId; centerDeg: number }[] = [
  { id: "data-center", centerDeg: 330 },
  { id: "seguranca", centerDeg: 30 },
  { id: "redes", centerDeg: 90 },
  { id: "colaboracao", centerDeg: 150 },
  { id: "computacao-pessoal", centerDeg: 210 },
  { id: "nuvem", centerDeg: 270 },
];

/**
 * Per-architecture identity: a distinct icon and a hue that flows around the
 * wheel. `from`/`to` paint the wedge gradient, `accent` is the readable solid
 * used on the light panel.
 */
type Meta = { icon: LucideIcon; from: string; to: string; accent: string };

const META: Record<ArchitectureId, Meta> = {
  "data-center": {
    icon: Server,
    from: "oklch(0.62 0.19 256)",
    to: "oklch(0.46 0.17 260)",
    accent: "oklch(0.50 0.18 258)",
  },
  seguranca: {
    icon: ShieldCheck,
    from: "oklch(0.66 0.15 165)",
    to: "oklch(0.50 0.13 168)",
    accent: "oklch(0.52 0.14 166)",
  },
  redes: {
    icon: Network,
    from: "oklch(0.69 0.14 215)",
    to: "oklch(0.53 0.15 222)",
    accent: "oklch(0.53 0.15 220)",
  },
  colaboracao: {
    icon: Users,
    from: "oklch(0.61 0.19 300)",
    to: "oklch(0.47 0.18 302)",
    accent: "oklch(0.51 0.19 300)",
  },
  "computacao-pessoal": {
    icon: MonitorSmartphone,
    from: "oklch(0.66 0.15 72)",
    to: "oklch(0.52 0.14 60)",
    accent: "oklch(0.50 0.13 64)",
  },
  nuvem: {
    icon: Cloud,
    from: "oklch(0.70 0.13 238)",
    to: "oklch(0.55 0.15 242)",
    accent: "oklch(0.53 0.15 240)",
  },
};

const toRad = (deg: number) => (deg * Math.PI) / 180;
// θ measured clockwise from north (12 o'clock). x = cx + r*sin(θ), y = cy - r*cos(θ).
const pt = (r: number, deg: number) => ({
  x: CX + r * Math.sin(toRad(deg)),
  y: CY - r * Math.cos(toRad(deg)),
});

function wedgePath(centerDeg: number): string {
  const start = centerDeg - WEDGE_DEG / 2;
  const end = centerDeg + WEDGE_DEG / 2;
  const p1 = pt(R_OUTER, start);
  const p2 = pt(R_OUTER, end);
  const p3 = pt(R_INNER, end);
  const p4 = pt(R_INNER, start);
  return [
    `M ${p1.x} ${p1.y}`,
    `A ${R_OUTER} ${R_OUTER} 0 0 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${R_INNER} ${R_INNER} 0 0 0 ${p4.x} ${p4.y}`,
    "Z",
  ].join(" ");
}

// Outer indicator arc drawn just beyond an active wedge.
function arcPath(centerDeg: number, r: number): string {
  const start = centerDeg - WEDGE_DEG / 2 + 4;
  const end = centerDeg + WEDGE_DEG / 2 - 4;
  const a = pt(r, start);
  const b = pt(r, end);
  return `M ${a.x} ${a.y} A ${r} ${r} 0 0 1 ${b.x} ${b.y}`;
}

const ICON_SIZE = 32;

export function ArchitectureMandala() {
  const [activeId, setActiveId] = useState<ArchitectureId | null>(null);
  const wedgeRefs = useRef<Record<string, SVGGElement | null>>({});
  const baseId = useId();

  const activeArch: Architecture | null = activeId
    ? architectures.find((a) => a.id === activeId) ?? null
    : null;

  // keyboard nav between wedges
  const onKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = ORDER[(idx + 1) % ORDER.length];
      setActiveId(next.id);
      wedgeRefs.current[next.id]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = ORDER[(idx - 1 + ORDER.length) % ORDER.length];
      setActiveId(prev.id);
      wedgeRefs.current[prev.id]?.focus();
    } else if (e.key === "Escape") {
      setActiveId(null);
    }
  };

  // close panel when clicking outside the mandala area
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setActiveId(null);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div ref={containerRef} className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
      {/* SVG mandala — desktop & tablet */}
      <div className="relative hidden md:block">
        <svg
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          className="mx-auto w-full max-w-[560px] drop-shadow-[0_24px_48px_rgba(15,23,42,0.16)]"
          role="tablist"
          aria-label="Arquiteturas que a Brascin entrega"
        >
          <defs>
            <radialGradient id={`${baseId}-hub`} cx="50%" cy="42%" r="62%">
              <stop offset="0%" stopColor="oklch(0.30 0.08 255)" />
              <stop offset="100%" stopColor="oklch(0.13 0.04 258)" />
            </radialGradient>
            {ORDER.map(({ id }) => {
              const m = META[id];
              return (
                <linearGradient key={id} id={`${baseId}-${id}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={m.from} />
                  <stop offset="100%" stopColor={m.to} />
                </linearGradient>
              );
            })}
            <filter id={`${baseId}-glow`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="oklch(0.24 0.06 255)" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Decorative slowly-rotating guide ring */}
          <g className="mandala-ring" aria-hidden>
            <circle
              cx={CX}
              cy={CY}
              r={R_OUTER + 22}
              fill="none"
              stroke="oklch(0.24 0.06 255 / 0.18)"
              strokeWidth={1.5}
              strokeDasharray="2 14"
              strokeLinecap="round"
            />
          </g>

          {ORDER.map(({ id, centerDeg }, idx) => {
            const arch = architectures.find((a) => a.id === id)!;
            const meta = META[id];
            const Icon = meta.icon;
            const isActive = activeId === id;
            const isDimmed = activeId !== null && !isActive;
            const iconPos = pt(R_ICON, centerDeg);
            const labelPos = pt(R_LABEL, centerDeg);
            const path = wedgePath(centerDeg);
            const labelText = arch.shortLabel ?? arch.label;
            const isTwoWord = labelText.includes(" ");
            const [w1, w2] = isTwoWord ? labelText.split(" ") : [labelText, ""];

            return (
              <g
                key={id}
                ref={(el) => {
                  wedgeRefs.current[id] = el;
                }}
                tabIndex={0}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${baseId}-panel`}
                aria-label={`Arquitetura ${arch.label}`}
                onClick={() => setActiveId(isActive ? null : id)}
                onMouseEnter={() => setActiveId(id)}
                onFocus={() => setActiveId(id)}
                onKeyDown={(e) => onKeyDown(e, idx)}
                className={cn(
                  "cursor-pointer outline-none transition-opacity duration-200",
                  isDimmed && "opacity-40",
                )}
                style={{
                  transformBox: "view-box",
                  transformOrigin: `${CX}px ${CY}px`,
                  transform: isActive ? "scale(1.035)" : "scale(1)",
                  transition: "transform 220ms cubic-bezier(.2,.7,.2,1), opacity 200ms ease",
                }}
              >
                <path
                  d={path}
                  fill={`url(#${baseId}-${id})`}
                  stroke="white"
                  strokeWidth={4}
                  strokeLinejoin="round"
                  filter={isActive ? `url(#${baseId}-glow)` : undefined}
                />
                {isActive && (
                  <path
                    d={arcPath(centerDeg, R_OUTER + 12)}
                    fill="none"
                    stroke={meta.from}
                    strokeWidth={5}
                    strokeLinecap="round"
                  />
                )}
                <Icon
                  x={iconPos.x - ICON_SIZE / 2}
                  y={iconPos.y - ICON_SIZE / 2}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  color="white"
                  strokeWidth={2}
                  className="pointer-events-none"
                  aria-hidden
                />
                <text
                  x={labelPos.x}
                  y={labelPos.y - (isTwoWord ? 8 : 0)}
                  textAnchor="middle"
                  className="pointer-events-none select-none fill-white font-semibold"
                  style={{ fontSize: 18, letterSpacing: "-0.01em" }}
                >
                  {w1}
                  {isTwoWord && (
                    <tspan x={labelPos.x} dy="1.1em">
                      {w2}
                    </tspan>
                  )}
                </text>
              </g>
            );
          })}

          {/* Hub central */}
          <circle
            cx={CX}
            cy={CY}
            r={R_INNER - 6}
            fill={`url(#${baseId}-hub)`}
            stroke="white"
            strokeWidth={6}
          />
          <circle
            cx={CX}
            cy={CY}
            r={R_INNER - 18}
            fill="none"
            stroke="white"
            strokeOpacity={0.18}
            strokeWidth={1.5}
          />
          <text
            x={CX}
            y={CY - 2}
            textAnchor="middle"
            className="pointer-events-none select-none fill-white font-bold"
            style={{ fontSize: 23, letterSpacing: "0.08em" }}
          >
            BRASCIN
          </text>
          <text
            x={CX}
            y={CY + 20}
            textAnchor="middle"
            className="pointer-events-none select-none fill-white/65 font-semibold"
            style={{ fontSize: 10.5, letterSpacing: "0.22em" }}
          >
            TI CORPORATIVA
          </text>
        </svg>
      </div>

      {/* Panel — desktop & tablet */}
      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-live="polite"
        className="hidden min-h-[340px] md:block"
      >
        {activeArch ? (
          <ArchitectureDetail arch={activeArch} meta={META[activeArch.id]} />
        ) : (
          <MandalaIdleHint onPreview={setActiveId} />
        )}
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden">
        <MobileAccordion />
      </div>
    </div>
  );
}

function MandalaIdleHint({ onPreview }: { onPreview: (id: ArchitectureId) => void }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">
        Arquiteturas Brascin
      </p>
      <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Toda a TI corporativa, em seis arquiteturas integradas.
      </h3>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Passe o mouse na roda (ou use as setas do teclado) para ver os fabricantes com quem temos
        parceria estratégica em cada arquitetura.
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-2.5">
        {ORDER.map(({ id }) => {
          const arch = architectures.find((a) => a.id === id)!;
          const meta = META[id];
          const Icon = meta.icon;
          return (
            <li key={id}>
              <button
                type="button"
                onMouseEnter={() => onPreview(id)}
                onFocus={() => onPreview(id)}
                onClick={() => onPreview(id)}
                className="flex w-full items-center gap-2.5 rounded-lg border border-border/60 bg-secondary/30 px-3 py-2 text-left transition-colors hover:border-border hover:bg-secondary/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-white"
                  style={{ background: `linear-gradient(135deg, ${meta.from}, ${meta.to})` }}
                  aria-hidden
                >
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {arch.shortLabel ?? arch.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ArchitectureDetail({ arch, meta }: { arch: Architecture; meta: Meta }) {
  const Icon = meta.icon;
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_8px_32px_rgba(15,111,212,0.12)]">
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${meta.from}, ${meta.to})` }}
        aria-hidden
      />
      <div className="p-8">
        <div className="flex items-start gap-4">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
            style={{ background: `linear-gradient(135deg, ${meta.from}, ${meta.to})` }}
            aria-hidden
          >
            <Icon className="h-6 w-6" strokeWidth={2} />
          </span>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: meta.accent }}
            >
              Arquitetura
            </p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {arch.label}
            </h3>
          </div>
        </div>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {arch.description}
        </p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {arch.partners.length} fabricantes parceiros
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {arch.partners.map((p) => (
              <span
                key={p.name}
                className="inline-flex items-center rounded-md border bg-secondary/40 px-3 py-1.5 text-sm font-medium text-foreground"
                style={{ borderColor: `color-mix(in oklch, ${meta.accent} 28%, transparent)` }}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>

        <Link
          to="/solucoes"
          hash={arch.id}
          className="mt-7 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          style={{ background: `linear-gradient(135deg, ${meta.from}, ${meta.to})` }}
        >
          Ver detalhes da arquitetura
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function MobileAccordion() {
  const [openId, setOpenId] = useState<ArchitectureId | null>(null);
  return (
    <ul className="space-y-3">
      {architectures.map((arch) => {
        const meta = META[arch.id];
        const Icon = meta.icon;
        const isOpen = openId === arch.id;
        return (
          <li
            key={arch.id}
            className="overflow-hidden rounded-xl border border-border/60 bg-card"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : arch.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-3 px-4 py-4 text-left"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
                style={{ background: `linear-gradient(135deg, ${meta.from}, ${meta.to})` }}
                aria-hidden
              >
                <Icon className="h-4.5 w-4.5" strokeWidth={2} />
              </span>
              <span className="flex-1 text-base font-semibold text-foreground">{arch.label}</span>
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full text-white transition-transform",
                  isOpen && "rotate-90",
                )}
                style={{ background: `linear-gradient(135deg, ${meta.from}, ${meta.to})` }}
                aria-hidden
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-border/60 px-4 py-4">
                <p className="text-sm text-muted-foreground">{arch.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {arch.partners.map((p) => (
                    <span
                      key={p.name}
                      className="inline-flex items-center rounded-md border bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground"
                      style={{ borderColor: `color-mix(in oklch, ${meta.accent} 28%, transparent)` }}
                    >
                      {p.name}
                    </span>
                  ))}
                </div>
                <Link
                  to="/solucoes"
                  hash={arch.id}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: meta.accent }}
                >
                  Ver detalhes
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
