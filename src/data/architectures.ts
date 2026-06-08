export type ArchitectureId =
  | "data-center"
  | "seguranca"
  | "nuvem"
  | "redes"
  | "colaboracao"
  | "computacao-pessoal";

export type Partner = {
  name: string;
  logoUrl?: string;
};

export type Architecture = {
  id: ArchitectureId;
  label: string;
  shortLabel?: string;
  description: string;
  partners: Partner[];
};

export const architectures: Architecture[] = [
  {
    id: "data-center",
    label: "Data Center",
    description:
      "Infraestrutura crítica, servidores, virtualização, storage e energia para sustentar operações 24/7.",
    partners: [
      { name: "Dell" },
      { name: "HPE" },
      { name: "Lenovo" },
      { name: "Cisco" },
      { name: "Red Hat" },
      { name: "Microsoft" },
      { name: "Veeam" },
      { name: "Acronis" },
      { name: "Juniper" },
      { name: "APC" },
    ],
  },
  {
    id: "seguranca",
    label: "Segurança",
    description:
      "Proteção de perímetro, endpoint, identidade e dados — do firewall ao zero trust.",
    partners: [
      { name: "Fortinet" },
      { name: "Cisco" },
      { name: "Trend Micro" },
      { name: "Broadcom" },
      { name: "Microsoft" },
      { name: "Yubico" },
      { name: "Juniper" },
      { name: "Dell" },
      { name: "TeamViewer" },
    ],
  },
  {
    id: "nuvem",
    label: "Nuvem",
    shortLabel: "Nuvem",
    description:
      "Migração, gestão e otimização de cargas em nuvem pública, privada e híbrida.",
    partners: [{ name: "Microsoft" }, { name: "AWS" }],
  },
  {
    id: "redes",
    label: "Redes",
    description:
      "Conectividade corporativa cabeada e Wi-Fi, SD-WAN, switching e roteamento de alta performance.",
    partners: [
      { name: "Cisco" },
      { name: "HPE Aruba" },
      { name: "Juniper" },
      { name: "Fortinet" },
      { name: "Dell" },
    ],
  },
  {
    id: "colaboracao",
    label: "Colaboração",
    description:
      "Salas, headsets, vídeo e voz para times híbridos — Teams, Webex e endpoints certificados.",
    partners: [
      { name: "Microsoft" },
      { name: "Cisco" },
      { name: "Logitech" },
      { name: "Poly" },
      { name: "Jabra GN" },
      { name: "Yealink" },
    ],
  },
  {
    id: "computacao-pessoal",
    label: "Computação Pessoal",
    shortLabel: "Comp. Pessoal",
    description:
      "Notebooks, desktops, workstations, periféricos e software para produtividade corporativa.",
    partners: [
      { name: "Dell" },
      { name: "HP" },
      { name: "Lenovo" },
      { name: "Apple" },
      { name: "Microsoft" },
      { name: "Adobe" },
      { name: "Autodesk" },
      { name: "Samsung" },
      { name: "LG" },
      { name: "Logitech" },
      { name: "Jabra GN" },
      { name: "Kingston" },
      { name: "APC" },
    ],
  },
];

export const architectureById = (id: ArchitectureId) =>
  architectures.find((a) => a.id === id)!;
