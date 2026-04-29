# DIRETRIX — Site Institucional + Manual de Marca

Site institucional da DIRETRIX SOLUÇÕES CORPORATIVAS LTDA — operação de consultoria em tecnologia da informação, treinamento profissional/gerencial e treinamento em informática, sediada em Manaus/AM. Identidade visual editorial-premium dark com gold como accent principal e Playfair italic como signature flourish.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | **React 18** + **TypeScript 5** |
| Build | **Vite 5** |
| Estilização | **CSS puro** (sem Tailwind) com tokens em `:root` e split por contexto |
| Roteamento | **Wouter 3** (~3KB gzip) |
| Ícones | **Lucide React** (tree-shaken, ~30KB) |
| PDF gen | **jsPDF** (cartão de visita, dynamic-imported) |
| PNG gen | **html2canvas** (OG image, dynamic-imported) |
| Fonts | **Poppins** (display) · **Inter** (body) · **Playfair Display** (italic accent) |
| Hospedagem | **Render** (Static Site, auto-deploy on push) |

---

## Rodar localmente

```bash
pnpm install
pnpm dev          # http://localhost:5000
```

Outros comandos:
```bash
pnpm build        # build produção em dist/
pnpm preview      # serve dist/ na 4173 (testa SPA routing)
pnpm typecheck    # tsc --noEmit
```

---

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | **Site institucional** com 10 sessões |
| `/brandbook` | **Manual de marca completo** com 13 sessões |
| `/consultoria-ti` | Página interna · móvel pesado: Mapa de Maturidade interativo |
| `/treinamentos-profissionais` | Página interna · móvel pesado: Dossiê Editorial dos formadores |
| `/treinamentos-informatica` | Página interna · móvel pesado: Graph técnico de skills |
| `/suitedocumental.html` | Tool interno (gerador de Contratos/Ofícios/Orçamentos) — preservado como estático |

Roteamento via wouter. Catch-all volta para `Home`. SPA fallback configurado via `_redirects` (público) e regra de Rewrite na dashboard do Render.

---

## Site institucional · 10 sessões (Home `/`)

| # | Sessão | Função |
|---|---|---|
| 01 | **Hero** | Tese filosófica em headline monumental + sub posicional + vídeo bg |
| 02 | **Manifesto** | Bloco editorial Playfair, 4 parágrafos, ataca premissa de mercado |
| 03 | **Pilares** | Diagrama vetorial conectando os 3 serviços |
| 04 | **Método Visível** | 4 frames (Assessment → Architecture → Capacity → Optimization) |
| 05 | **Território** | Manaus como diferencial, mapa SVG estilizado |
| 06 | **Liderança Visível** | Carta-declaração da Andressa Silva de Lima |
| 07 | **Equipe** | Carrossel infinito de pesquisadores/curadores |
| 08 | **Depoimentos** | Hero quote + grid 3-col secundários com métricas |
| 09 | **FAQ** | 8 perguntas, 2-col desktop / accordion mobile |
| 10 | **Diagnóstico CTA** | 30 minutos com a equipe técnica |

---

## Brandbook · 13 sessões (`/brandbook`)

| # | Sessão | ID |
|---|---|---|
| 01 | DNA / Filosofia | `#dna` |
| 02 | Cromia / Paleta | `#cromia` |
| 03 | Tipografia | `#tipo` |
| 04 | Iconografia (Lucide) | `#iconografia` |
| 05 | UI System (4 abas: Botões/Cards/Badges/Inputs) | `#componentes` |
| 06 | Estacionário 3D (folder, letterhead, envelope, etc) | `#fisico` |
| 07 | Cartão de Visita Gerador (PDF download) | `#cartao` |
| 08 | Assinatura de Email Editável (HTML copy) | `#digital` |
| 09 | Open Graph Generator (PNG 1200×630) | `#opengraph` |
| 10 | Proposta Comercial Template (7 sessões expansíveis) | `#proposta` |
| 11 | Premium Touchpoints | `#premium` |
| 12 | Combos / Kits de Conversão | `#combos` |
| 13 | Roadmap de Implementação | `#roadmap` |

---

## Sistema de Componentes

### Páginas
- `pages/Home.tsx` — site institucional (10 sessões wired)
- `pages/Brandbook.tsx` — manual de marca (13 sessões wired)
- `pages/ConsultoriaTI.tsx` — Mapa de Maturidade interativo
- `pages/TreinamentosProfissionais.tsx` — Dossiê editorial gold
- `pages/TreinamentosInformatica.tsx` — Graph técnico + terminal motif

### Compartilhados (`components/shared/`)
- `Footer.tsx` — corporate footer (ambos os contextos)
- `WhatsAppFAB.tsx` — botão flutuante WhatsApp (todas as rotas)
- `LoadingScreen.tsx` — spinner 4s no boot

### Hooks (`hooks/`)
- `useReveal.ts` — IntersectionObserver pra reveal-on-scroll

### Libs (`lib/`)
- `email/diretrix-signature.ts` — HTML builder da assinatura (table-based)
- `pdf/diretrix-businessCard.ts` — PDF gen do cartão (jsPDF, 85×55mm + sangria)

---

## Design System

### Tokens (`styles/tokens.css`)
- `--verde` `#00A86B` — accent funcional (verde institucional Diretrix)
- `--azul` `#0A1F44` — secundário institucional
- `--gold` `#D4AF37` — accent premium principal
- `--preto` `#05070D` — bg permanente
- `--font-sans` Inter · `--font-display` Poppins · `--font-serif` Playfair Display

### Split por contexto
- `styles/tokens.css` — vars + reset + body + ambient + .reveal + footer + FAB + loader (SHARED)
- `styles/brand.css` — brandbook-only (swatches, type-blocks, 3D stationery, geradores)
- `styles/institutional.css` — institutional-only (hero, manifesto, pilares, etc)

---

## Responsividade

Otimizado para **375×812 (iPhone X / Galaxy S22)** como baseline. **5 breakpoints**:

| Breakpoint | Aplicação |
|---|---|
| `≤1024px` | Brandbook nav vira hamburger (9+ links) |
| `≤900px` | Institutional nav vira hamburger, grids 3-col → 1-col |
| `≤768px` | Tablet portrait — padding lateral 24→20, hero stacked, grid-4 → 2x2 |
| `≤480px` | Mobile pequeno — padding 16px, stationery 3D miniaturizada |
| `≤375px` | Telas tiny — stationery sem transform, fontes mínimas |

Hamburger menus full-screen com ESC fechar, body scroll-lock e safe-area.

---

## Deploy

Hospedagem: **Render** (Static Site)
- Build: `pnpm install && pnpm build`
- Publish: `dist`
- `NODE_VERSION=20`
- Auto-deploy: push em `main`
- SPA fallback: regra de Rewrite `/* → /index.html` na dashboard
- Arquivos de config: `render.yaml` (blueprint), `.nvmrc`, `public/_redirects`

---

## Docs complementares

- [CONTEXT.md](./CONTEXT.md) — identidade, voz, brandbook, regras de código, regras pra IA
- [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) — negócio Diretrix, 3 frentes, público, restrições
- [ARCHITECTURE.md](./ARCHITECTURE.md) — estrutura de código, fluxo de dados, deps, decisões
- [TODO.md](./TODO.md) — pendências e roadmap
- [CLAUDE.md](./CLAUDE.md) — guia rápido pra AI assistants (Claude Code)
