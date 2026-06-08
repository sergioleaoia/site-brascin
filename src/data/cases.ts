import type { ArchitectureId } from "./architectures";
import type { ServiceId } from "./services";

export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: {
    architectures?: ArchitectureId[];
    services?: ServiceId[];
  };
};

export const cases: CaseStudy[] = [
  {
    id: "costa-hirota-modernizacao",
    client: "Costa Hirota",
    industry: "Indústria",
    challenge:
      "Infraestrutura legada com janelas de manutenção longas e risco operacional crescente.",
    solution:
      "Modernização do data center com virtualização, backup imutável e suporte 24×7.",
    outcome:
      "Redução de 70% no tempo de recuperação e zero downtime não planejado em 12 meses.",
    tags: {
      architectures: ["data-center"],
      services: ["sustentacao", "backup"],
    },
  },
  {
    id: "dakhia-cloud-migration",
    client: "Dakhia",
    industry: "Serviços",
    challenge:
      "Custo de TI crescente com baixa visibilidade e ambiente on-prem subutilizado.",
    solution:
      "Migração para Azure com landing zone, IaC e FinOps integrado.",
    outcome:
      "Economia de 35% no TCO e provisionamento de novos ambientes em horas, não semanas.",
    tags: {
      architectures: ["nuvem"],
      services: ["cloud"],
    },
  },
  {
    id: "lakewood-seguranca",
    client: "Lakewood",
    industry: "Varejo",
    challenge:
      "Exposição a ransomware e ausência de visibilidade de endpoints distribuídos.",
    solution:
      "Implantação de EDR, MFA, hardening e plano de resposta a incidentes.",
    outcome:
      "Detecção e contenção de 100% das tentativas de ataque nos primeiros 6 meses.",
    tags: {
      architectures: ["seguranca"],
      services: ["seguranca"],
    },
  },
];
