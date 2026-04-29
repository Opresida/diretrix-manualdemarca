# ARCHITECTURE — DIRETRIX

Mapa de código, fluxo de dados e decisões técnicas.

---

## Visão geral

```
diretrix-manualdemarca/                ← projeto único, NÃO monorepo
├── _legacy/                           ← HTML original preservado (referência histórica)
│   └── index.html.original
├── public/
│   ├── _redirects                     ← SPA fallback (Netlify-style; Render usa via dashboard)
│   ├── favicon.svg                    ← favicon SVG vetorial (D + ponto verde)
│   ├── suitedocumental.html           ← tool interno preservado (jspdf+html2canvas via CDN)
│   ├── images/
│   └── videos/
│       └── HERO TELA 1090X1080.webm   ← vídeo bg do hero institucional
├── src/                               ← (estrutura detalhada abaixo)
├── index.html                         ← Vite entry minimalista
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── render.yaml                        ← blueprint declarativo do Render
├── .nvmrc                             ← Node 20
├── .gitignore
└── [docs: README, CONTEXT, etc]
```

Site é **SPA React puro**, servido via Vite dev em porta 5000, deploy estático no **Render**.

---

## Estrutura de pastas (`src/`)

```
src/
├── main.tsx                           ← bootstrap React + imports CSS
├── App.tsx                            ← LoadingScreen + Switch wouter (5 rotas) + WhatsAppFAB
│
├── styles/                            ← CSS split por contexto
│   ├── tokens.css                     ← SHARED: vars, fonts, reset, body, ambient,
│   │                                    .reveal, .diretrix-footer, .wa-fab, .dx-loader
│   ├── brand.css                      ← BRANDBOOK ONLY: nav, hero, sections, swatches,
│   │                                    type-blocks, 3D stationery, geradores
│   └── institutional.css              ← INSTITUTIONAL ONLY: hero, manifesto, pilares,
│                                        método, território, liderança, equipe, etc
│
├── pages/
│   ├── Home.tsx                       ← Site institucional (10 sessões wired)
│   ├── Brandbook.tsx                  ← Manual de marca (13 sessões wired)
│   ├── ConsultoriaTI.tsx              ← Mapa de Maturidade interativo
│   ├── TreinamentosProfissionais.tsx  ← Dossiê editorial gold
│   └── TreinamentosInformatica.tsx    ← Graph técnico de skills
│
├── components/
│   ├── shared/
│   │   ├── Footer.tsx                 ← corporate footer (ambos os contextos)
│   │   ├── WhatsAppFAB.tsx            ← botão flutuante (todas as rotas)
│   │   └── LoadingScreen.tsx          ← spinner 4s no boot
│   │
│   ├── brandbook/
│   │   ├── BrandbookNav.tsx           ← nav + hamburger menu mobile
│   │   └── sections/                  ← 13 sections do brandbook
│   │       ├── Hero.tsx
│   │       ├── DNA.tsx                ← Pilares filosóficos
│   │       ├── Cromia.tsx             ← Paleta
│   │       ├── Tipografia.tsx         ← Sistema tipográfico
│   │       ├── Iconografia.tsx        ← Lucide library + regras
│   │       ├── UISystem.tsx           ← 4 abas: Botões/Cards/Badges/Inputs
│   │       ├── Estacionario.tsx       ← Folder, letterhead, envelope, etc (3D)
│   │       ├── CartaoDeVisita.tsx     ← Gerador PDF (manila folder digital)
│   │       ├── Digital.tsx            ← Gerador HTML email signature
│   │       ├── OpenGraph.tsx          ← Gerador PNG 1200×630
│   │       ├── PropostaComercial.tsx  ← Template 7 sessões expansíveis
│   │       ├── Premium.tsx            ← Touchpoints luxury
│   │       ├── Combos.tsx             ← Kits de conversão
│   │       └── Roadmap.tsx            ← Fases de implementação
│   │
│   └── institutional/
│       ├── InstitutionalNav.tsx       ← nav + hamburger menu mobile
│       └── sections/                  ← 8 sections da home + 1 carousel + 2 social proof
│           ├── Hero.tsx               ← Tese filosófica + vídeo bg
│           ├── Manifesto.tsx          ← 4 parágrafos editoriais
│           ├── Pilares.tsx            ← Diagrama vetorial conectado
│           ├── MetodoVisivel.tsx      ← 4 frames sequenciais
│           ├── Territorio.tsx         ← Manaus + mapa SVG
│           ├── LiderancaVisivel.tsx   ← Carta da Andressa (com foto)
│           ├── Equipe.tsx             ← Carrossel infinito (8 cards)
│           ├── Depoimentos.tsx        ← Hero quote + 3 secundários
│           ├── FAQ.tsx                ← 8 Q&A (2-col desktop / accordion mobile)
│           └── DiagnosticoCTA.tsx     ← Card final premium
│
├── hooks/
│   └── useReveal.ts                   ← IntersectionObserver pra reveal-on-scroll
│
└── lib/
    ├── email/
    │   └── diretrix-signature.ts      ← HTML builder (table-based, 2 variants dark/light)
    └── pdf/
        └── diretrix-businessCard.ts   ← PDF generator (jsPDF, 85×55mm + sangria + crop marks)
```

---

## Fluxo de dados

```
main.tsx
  ├─► imports tokens.css + brand.css + institutional.css (Vite bundla em 1)
  └─► App.tsx
        ├─► useState(loading=true) inicial
        ├─► LoadingScreen (4s) — desmonta sozinho via useEffect
        ├─► Switch wouter:
        │     ├─► / ────────► Home (institucional)
        │     ├─► /brandbook ► Brandbook
        │     ├─► /consultoria-ti ────► ConsultoriaTI
        │     ├─► /treinamentos-profissionais ► TreinamentosProfissionais
        │     ├─► /treinamentos-informatica ────► TreinamentosInformatica
        │     └─► fallback ─► Home
        └─► WhatsAppFAB (sempre visível em todas as rotas)
```

Cada `<Page />` renderiza Nav (próprio do contexto) + sequência de sections + Footer compartilhado. **Não há estado global** — o site é 100% estático em termos de dados; apenas estado local nas geradoras (form de assinatura, cartão, OG, proposta) e no nav (menu aberto/fechado).

---

## Geradoras — como funcionam

### Email Signature (`Digital.tsx` + `lib/email/diretrix-signature.ts`)
- Form com 7 campos editáveis (nome, cargo, email, telefone, localização, website, linkedin opcional)
- Toggle dark/light
- `useMemo` recalcula HTML quando data ou variant mudam
- Preview em `<iframe>` sandboxed com `srcDoc` (isola CSS do brandbook)
- `useEffect` mede `body.scrollHeight` do iframe e ajusta altura
- 3 ações:
  - **Copiar Rich-Text**: `ClipboardItem` com `text/html` + `text/plain` — cola formatado no Gmail/Outlook
  - **Copiar HTML**: `navigator.clipboard.writeText` com source code
  - **Baixar .html**: Blob standalone com `<!DOCTYPE>` + instruções embedded

### Cartão de Visita (`CartaoDeVisita.tsx` + `lib/pdf/diretrix-businessCard.ts`)
- Form com 6 campos + 2 toggles (sangria + crop marks)
- Preview do verso atualiza em tempo real (componente `CardVersoVisual` reativo a `data`)
- Click em "Baixar PDF": `await import('@/lib/pdf/diretrix-businessCard')` (dynamic, ~130KB chunk)
- jsPDF com unit `mm`, format custom calculado (CARD + bleed + crop margins)
- Frente: fundo azul profundo + lombada gold + DIRETRIX. + claim Playfair italic + coords + URL
- Verso: fundo preto + lombada gold espelhada + nome Playfair italic gold + grid 2x2 contatos

### OG Image (`OpenGraph.tsx`)
- Form com 4 campos editáveis (tag, título, accent, URL)
- `OGImageContent` renderizado 2x: visível (escalado via `ResizeObserver`) + offscreen capture target sempre 1200×630
- Click em "Baixar Imagem": `await import('html2canvas')` (dynamic, ~48KB chunk)
- `html2canvas(captureRef, { width: 1200, height: 630, scale: 1 })` → `canvas.toBlob('image/png')` → download

### Proposta Comercial (`PropostaComercial.tsx`)
- 7 sessões expansíveis via `useState<Set<string>>` para tracking de IDs abertos
- `expandAll` / `collapseAll` mutam o Set
- "Copiar Markdown": `navigator.clipboard.writeText(buildMarkdownProposal())`
- "Imprimir": `window.print()` — flow normal, sem `@page` custom (futuro: print stylesheet dedicado)

---

## Padrões de seção

Toda seção do site institucional segue esta estrutura:

```jsx
<section id="..." className="inst-{nome}">
  {/* 1. Eyebrow / section label */}
  <div className="inst-section-label">N · Categoria</div>

  {/* 2. Headline com accent Playfair italic */}
  <h2>
    Texto principal <br />
    <span className="playfair-italic">accent gold/verde.</span>
  </h2>

  {/* 3. Lede explicativo (max-w 60ch) */}
  <p className="inst-{nome}-lede">...</p>

  {/* 4. Conteúdo: grid de cards / SVG diagrama / lista expansível / etc */}

  {/* 5. CTA opcional ou link "Aprofundar" */}
</section>
```

Brandbook usa estrutura mais flexível mas similar (`.section`, `.section-label`, `.section-title`, `.section-desc` + conteúdo).

---

## Decisões técnicas principais

### CSS puro vs Tailwind
Manter CSS puro porque o brandbook original tinha 700+ linhas de CSS custom (transforms 3D, gradientes elaborados, animações específicas). Tailwind seria overhead pra reescrever cada `.folder`, `.swatch`, `.type-block`. Tokens via `:root` em `tokens.css`.

### Wouter vs React Router
Wouter (~3KB gzip) é a menor abstração determinística pra 5 rotas estáticas sem params. React Router (12KB) seria overkill.

### Ícones via Lucide React
Tree-shaken via ESM imports. ~30KB pro conjunto de ~25 ícones que usamos. Stroke 2px padrão, outline only (nada filled), cores via `style.color` ou CSS class.

### Animação CSS vs Framer Motion
Sem framer-motion. CSS resolve: `useReveal` aplica `.visible` via IntersectionObserver, transitions com `cubic-bezier(0.23, 1, 0.32, 1)`, carrossel infinito via `@keyframes equipe-scroll`. Bundle inicial ~95KB gzip — seria 150KB+ com framer.

### PDF/PNG via dynamic import
`jspdf` (~130KB gzip) e `html2canvas` (~48KB gzip) só carregam quando user clica nos botões "Baixar". Mantém bundle inicial enxuto. Vite faz code-split automático em chunks separados.

### SPA routing no Render
`public/_redirects` (Netlify-style) **NÃO é lido pelo Render**. Precisa configurar regra manual de Rewrite na dashboard: `Source: /*` → `Destination: /index.html` → `Action: Rewrite` (não Redirect). Documentado em README + render.yaml (que só aplica se for criado via Blueprint).

### Hamburger menus por contexto
2 navs com 2 hamburgers separados (institutional + brandbook) porque a IA é diferente — institutional navega **sessões + páginas**, brandbook navega **sessões numeradas**. Compartilhar código forçaria similaridade visual proibida.

### useReveal vs Intersection Observer manual
Hook `useReveal` aplica `.visible` em todos os `.reveal` no mount da página. Funciona porque cada Page tem `useReveal()` no topo. Re-observa quando children mudam? Não — só roda 1x. Para 99% dos casos é suficiente (cards entram em viewport e ganham animação).

---

## Dependências principais

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "wouter": "^3.9.0",
  "lucide-react": "^0.460.0",
  "html2canvas": "^1.4.1",
  "jspdf": "^4.2.1"
}
```

DevDeps: `@types/react` 18.3, `@types/react-dom` 18.3, `@vitejs/plugin-react` 4.3, `typescript` 5.6, `vite` 5.4.

---

## Performance

- **Bundle inicial**: ~95KB gzip (target < 100KB)
- **Chunks separados (lazy)**:
  - `html2canvas.esm-*.js` ~48KB gzip — só ao clicar em "Baixar Imagem" (OG)
  - `diretrix-businessCard-*.js` ~130KB gzip — só ao clicar em "Baixar PDF" (cartão)
  - `purify.es-*.js` + `index.es-*.js` ~62KB gzip — sub-deps de jspdf
- **CSS**: ~18KB gzip (tokens + brand + institutional combinados)
- **First Paint**: ~1-2s em 3G simulado, instantâneo em fibra
- **Lighthouse mobile**: target ≥ 90 a11y/perf (não auditado ainda, fazer antes do go-live oficial)

---

## Deploy

- **Repositório**: `github.com/Opresida/diretrix-manualdemarca` · branch `main`
- **Hospedagem**: Render (Static Site)
- **Build command**: `pnpm install && pnpm build`
- **Publish directory**: `dist`
- **Environment**: `NODE_VERSION=20`
- **Auto-deploy**: ativado no push em main
- **Configuração SPA**: regra de Rewrite manual no dashboard (`/*` → `/index.html`)
- **Arquivos de config**: `render.yaml` (blueprint), `.nvmrc`, `public/_redirects`, `package.json` (engines + packageManager)
