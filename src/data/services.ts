import type { LucideIcon } from "lucide-react";
import { ServerCog, ShieldCheck, Cloud, DatabaseBackup } from "lucide-react";

export type ServiceId = "sustentacao" | "seguranca" | "cloud" | "backup";

export type Service = {
  id: ServiceId;
  label: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "sustentacao",
    label: "Sustentação",
    tagline: "Operação contínua da sua TI",
    description:
      "Monitoramento, suporte e manutenção evolutiva da infraestrutura crítica, com SLAs alinhados ao negócio.",
    icon: ServerCog,
    bullets: [
      "NOC 24×7 com SLAs corporativos",
      "Gestão de incidentes e problemas (ITIL)",
      "Manutenção evolutiva de servidores, redes e storage",
      "Suporte multi-fabricante consolidado",
    ],
  },
  {
    id: "seguranca",
    label: "Segurança",
    tagline: "Defesa em camadas, fim a fim",
    description:
      "Arquitetura, implantação e operação de segurança — do firewall ao SOC, do endpoint ao zero trust.",
    icon: ShieldCheck,
    bullets: [
      "Implantação e operação de firewalls, EDR e MFA",
      "Hardening, vulnerability management e patching",
      "Resposta a incidentes e análise forense",
      "Adequação LGPD e frameworks (ISO 27001, NIST)",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    tagline: "Nuvem com governança e custo sob controle",
    description:
      "Migração, modernização e gestão de cargas em Azure, AWS e nuvem privada com FinOps integrado.",
    icon: Cloud,
    bullets: [
      "Discovery, assessment e plano de migração",
      "Landing zones, IaC e automação",
      "FinOps: visibilidade e otimização de custo",
      "Operação contínua e well-architected reviews",
    ],
  },
  {
    id: "backup",
    label: "Backup",
    tagline: "Continuidade e recuperação garantidas",
    description:
      "Estratégia 3-2-1, testes de restore e DR-as-a-Service com Veeam, Acronis e nuvem.",
    icon: DatabaseBackup,
    bullets: [
      "Backup on-prem, cloud e híbrido",
      "Imutabilidade e proteção contra ransomware",
      "Testes periódicos de restore e DRP",
      "RPO/RTO definidos por aplicação",
    ],
  },
];

export const serviceById = (id: ServiceId) =>
  services.find((s) => s.id === id)!;
