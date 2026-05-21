# Brascin — Landing Page B2B Corporativa

## Objetivo
Construir uma LP perene, sóbria e premium para serviços gerenciados de TI da Brascin, voltada a decisores técnicos (CIO, Diretor de TI). Foco em credibilidade, autoridade e conversão consultiva — sem urgência, sem badges promocionais.

## Identidade visual
- **Paleta** (tokens em `src/styles.css`, formato oklch):
  - `--primary`: azul corporativo profundo (~#0A2540)
  - `--accent`: azul vibrante CTA (~#0066FF)
  - `--background`: branco
  - `--muted`: cinza claro (~#F5F7FA) para alternância de seções
  - `--foreground`: cinza escuro (~#1A202C)
  - `--secondary`: cinza neutro
  - Gradiente sóbrio para hero/CTA final (azul profundo → quase preto)
- **Tipografia**: Inter (sans-serif), pesos 400/600/700, hierarquia H1>H2>H3 generosa
- **Ícones**: lucide-react, line, monocromáticos em primary
- **Espaçamento**: 80px desktop / 60px mobile entre seções
- **Animações**: fade-in sutil ao scroll, hover de elevação nos cards

## Assets
- Logo Brascin → `src/assets/brascin-logo.png` (a partir de `user-uploads://logo-alt.png`)
- Favicon → `public/favicon.png` (a partir de `user-uploads://faviconV2.png`)
- Imagem hero datacenter → gerada via `imagegen` (fotografia corporativa, datacenter com luz azul, overlay escuro)
- Logos parceiros (Microsoft, Cisco, Acronis) e clientes (Santander, Safra, Unipar, etc.) → placeholders SVG/text estilizados em cinza (sem usar marcas reais sem autorização — placeholders neutros com nome)

## Estrutura de rotas (TanStack Start)
LP de página única com âncoras internas é apropriado aqui (uma landing page comercial focada em conversão), mantendo `src/routes/index.tsx` como única rota. SEO via `head()` na index.

```
src/routes/
  __root.tsx           (já existe — adicionar título Brascin e favicon)
  index.tsx            (LP completa orquestrando seções)

src/components/brascin/
  Header.tsx           (logo + nav âncora + CTA)
  Hero.tsx
  ProblemSection.tsx
  ServicesSection.tsx
  WhyBrascinSection.tsx
  CasesSection.tsx
  CtaSection.tsx
  LeadMagnetsSection.tsx
  Footer.tsx
  StickyMobileCta.tsx
  ContactModal.tsx     (Falar com Especialista / Diagnóstico)
  LeadMagnetModal.tsx  (nome+email+empresa para downloads)
  ExitIntentModal.tsx  (detecta mouseleave no topo)
  PartnerLogos.tsx
  ClientLogos.tsx
```

## Seções (resumo)
1. **Hero** — gradiente escuro + imagem datacenter, H1 sobre parceria estratégica, 4 pilares no subtítulo, CTA primário "Falar com Especialista" + secundário outline, selo "40+ anos | 600+ clientes | Atendimento Nacional", logos de parceiros.
2. **Problema** — 4 cards (Sustentação crítica, Falta de especialistas com dado "750 mil", Complexidade crescente, Custos fragmentados). Fundo branco, ícones lucide.
3. **Serviços** — 4 cards 2x2 (TI Gerenciada, Segurança/FaaS, Nuvem, Backup Acronis) com bullets e "Saiba mais →" (abre modal de contato por enquanto, com slot para detalhamento futuro). CTA intermediário centralizado.
4. **Por que Brascin** — 6 pilares 3x2, fundo `muted`, bloco de logos de parceiros abaixo.
5. **Cases & prova social** — headline + grid de logos clientes + 4 cards de cases (Santander, Safra, UNIPAR, Galgo) com tag por setor + 3 cards de depoimento placeholder.
6. **CTA Final** — gradiente escuro, headline consultiva, 3 reforços com ✓, dois botões + formulário inline opcional (Nome, Email corporativo, Empresa, Telefone).
7. **Lead Magnets** — 3 cards (Webinar, Estudo de Caso, Calculadora), cada CTA abre `LeadMagnetModal`.
8. **Footer** — 4 colunas (logo+tagline, links, contato, redes+badges parceiros), linha inferior copyright + LGPD.

## Componentes interativos
- **Sticky mobile CTA**: barra fixa inferior abaixo de `md`, botão "Falar com Especialista".
- **ContactModal**: shadcn `Dialog` com form (Nome, Email corporativo, Empresa, Telefone, Mensagem), validação react-hook-form + zod, toast de sucesso (sem backend — apenas UI; envio real fica como TODO).
- **LeadMagnetModal**: form Nome+Email+Empresa, recebe `assetTitle` por prop.
- **ExitIntentModal**: hook `useExitIntent` (escuta `mouseleave` no topo + sessionStorage para mostrar uma vez), oferece estudo de caso.
- **Smooth scroll** via `scroll-behavior: smooth` no html.

## SEO (head na index)
- title: "Brascin — Serviços Gerenciados de TI, Segurança, Nuvem e Backup"
- description: "Há 40 anos sustentando operações críticas de tecnologia. Parceiro estratégico em TI gerenciada, segurança, nuvem e backup corporativo."
- og:title / og:description equivalentes, og:type website, twitter card summary_large_image.
- H1 único na hero. Alt text em todas as imagens.

## Detalhes técnicos
- shadcn já disponível: usar `Button`, `Card`, `Dialog`, `Input`, `Label`, `Textarea`, `Form`, `Sonner` (toast).
- Tudo via tokens semânticos do design system — zero classes de cor hardcoded em componentes.
- Mobile-first: grids `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` conforme seção.
- Animações: classe utilitária `animate-fade-in` adicionada no styles.css + IntersectionObserver simples ou apenas CSS `@starting-style` para fade leve.
- Acessibilidade: labels nos forms, `aria-label` em ícones decorativos com `aria-hidden`, foco visível.

## Fora de escopo (placeholders explícitos)
- Backend de envio dos formulários (apenas UI + toast).
- Conteúdo real de webinar/estudo/calculadora.
- Detalhamento técnico expandido por serviço (slot pronto, conteúdo futuro).
- Depoimentos com nomes reais.

## Ordem de execução
1. Copiar logo e favicon dos uploads para `src/assets` e `public`.
2. Atualizar tokens em `src/styles.css` (paleta corporativa + gradientes + sombras).
3. Atualizar `__root.tsx` (favicon link, título base).
4. Gerar imagem hero datacenter.
5. Criar componentes em `src/components/brascin/`.
6. Montar `src/routes/index.tsx` com head SEO + composição das seções + modais + sticky CTA + exit intent.
7. Verificar build e responsividade.