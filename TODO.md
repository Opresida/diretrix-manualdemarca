# TODO — DIRETRIX

Lista de pendências, melhorias planejadas e histórico do site institucional + brandbook.

---

## 🔥 Próximo (aprovado)

- [ ] **Substituir placeholders por dados reais** — depoimentos (`Depoimentos.tsx`), nomes da equipe (`Equipe.tsx`), foto/currículo dos formadores
- [ ] **Configurar regra de Rewrite SPA na dashboard do Render** (`/*` → `/index.html`, action: Rewrite) para que `/brandbook` direto funcione
- [ ] **Salvar `og-image.png` em `public/`** — gerar via `/brandbook#opengraph` e fazer upload manual

---

## Alta prioridade

- [ ] **Substituir número de WhatsApp placeholder** (`+55 92 999999999` em `src/components/shared/WhatsAppFAB.tsx:7`) pelo número real Diretrix
- [ ] **Telefone Diretrix** (placeholder `+55 92 ······` no email signature, cartão de visita, contatos institucionais) — substituir pelo número real
- [ ] **Integrar "Agendar Diagnóstico"** com Calendly/Cal.com (hoje é mailto). Embed ou link direto na sessão `DiagnosticoCTA.tsx`
- [ ] **Cases reais autorizados** — substituir os 4 placeholders em `Depoimentos.tsx` (linhas 14-58) com nome real + métrica real + autorização para publicação
- [ ] **Equipe real** — substituir array `PESQUISADORES` em `Equipe.tsx` (linhas 17-72) com 4-6 nomes reais + curadores/consultores efetivos da casa
- [ ] **Currículo Lattes da Júlia Ribeiro** — atualmente placeholder `4128376598234561` em `Equipe.tsx`. Quando houver curriculum real, atualizar `lattesId` e `lattesUrl`

## Média prioridade

- [ ] **Testes Lighthouse mobile** — validar a11y/performance ≥ 90, ajustar o que aparecer
- [ ] **Cross-browser testing** — Chrome, Firefox, Safari (especialmente Safari iOS, que é mais quirky com SVG/iframe/video)
- [ ] **Print stylesheet dedicado** para a Proposta Comercial (`@media print { ... }`) — esconder nav/FAB, ajustar margens A4, garantir que Gantt não corta entre páginas
- [ ] **Open Graph image** — gerar via `/brandbook#opengraph`, salvar em `public/og-image.png`, criar meta tags `og:image` em `index.html`
- [ ] **Substituir `corporativo@diretrix.com.br`** por endereços reais no domínio quando configurado (`andressa@`, `contato@`, etc)
- [ ] **Foto real dos curadores** (Carlos Veridiano, Renata Bezerra, Eduardo Tassio) na sessão `/treinamentos-profissionais` — hoje só tem nome em Playfair italic
- [ ] **Sessão Downloads no brandbook** com brand kit (logos SVG/PNG, tokens CSS, fonts WOFF, brand book PDF) — placeholder existe em outros projetos, falta no Diretrix

## Baixa prioridade

- [ ] **i18n** (PT-BR → EN) para clientes LatAm — não urgente porque mercado-alvo inicial é Brasil
- [ ] **Página `/cases/<slug>`** com case study completo de cada cliente real
- [ ] **Página `/juntar-se`** (carreiras) com posições em aberto — atualmente "Em breve" é placeholder na sessão Equipe
- [ ] **Blog institucional** — `/insights` com Markdown ou CMS headless
- [ ] **Refatoração da `suitedocumental.html`** (gerador interno de Contratos/Ofícios/Orçamentos) — hoje é HTML+JS vanilla com jspdf via CDN. Migrar para React + sistema de templates editáveis
- [ ] **Cursor custom verde** para desktop (matching brand)
- [ ] **Scroll-spy no Header institucional** — destacar link da sessão visível no scroll

---

## Bugs conhecidos

- Nenhum crítico registrado.
- **Possível**: ao redimensionar a janela rapidamente com o preview de OG aberto, o `ResizeObserver` pode demorar 1-2 frames para reescalar — não bloqueante.
- **Possível**: Safari iOS pode requerer `-webkit-` prefixes em algumas animações CSS (não auditado).

---

## ✅ Concluído

### 2026-04-29 — Documentos obrigatórios + responsividade total
- [x] **Cartão de Visita Gerador** (`/brandbook#cartao`) — design "manila folder digital" com lombada gold, frente azul profundo + verso preto, PDF vetorial 85×55mm via jsPDF (sangria + crop marks opcionais)
- [x] **Proposta Comercial Template** (`/brandbook#proposta`) — 7 sessões expansíveis (capa com cantos L-bracket gold, contexto, escopo 4 fases, cronograma Gantt 12 semanas, investimento, garantias, aceite), copy markdown, print
- [x] **Hamburger menus** full-screen no Institutional + Brandbook (ESC fechar, body scroll-lock, safe-area)
- [x] **Breakpoints intermediários completos** — 480, 768, 900, 1024, 1280px em todo institutional.css + brand.css
- [x] **Responsividade total** — `overflow-x: hidden`, `img/video/svg/iframe { max-width: 100% }` global, touch targets ≥44px
- [x] **Documentos canônicos do projeto** — README, CONTEXT, PROJECT_CONTEXT, ARCHITECTURE, TODO

### 2026-04-29 — Brandbook expandido com geradores
- [x] **Assinatura de Email Editável** (`Digital.tsx`) — form + preview iframe + 3 ações (Copiar Rich-Text, HTML, Baixar .html). Variantes dark/light. Builder em `lib/email/diretrix-signature.ts` (table-based, CSS inline, web-safe fonts)
- [x] **Open Graph Generator** (`OpenGraph.tsx`) — preview escalado responsivo + capture target offscreen 1200×630, download PNG via html2canvas dynamic-imported. Design exclusivo: cantos L-bracket gold + watermark "D" + coordenadas Manaus
- [x] **Iconografia** (`Iconografia.tsx`) — Lucide React adoption, 25 ícones operacionais documentados, specs de containers (sm/md/lg/solid), 6 regras Faça/Evite
- [x] **UI System** (`UISystem.tsx`) — catálogo com 4 abas (Botões/Cards/Badges/Inputs), 14 specs com demo ao vivo
- [x] **Redesign assinatura + OG** com identidade visual EXCLUSIVA Diretrix — abandonando layout 2-col Mazari (lombada gold + Playfair italic + cantos L-bracket gold)

### 2026-04-29 — Polimento institucional
- [x] **Vídeo de fundo no Hero** (`HERO TELA 1090X1080.webm`) com overlay gradient + object-position right
- [x] **Foto real da Andressa** em `LiderancaVisivel.tsx` (substitui inicial "A" Playfair gigante)
- [x] **Sessão Equipe** (carrossel infinito de 8 pesquisadores) entre Liderança e Diagnóstico
- [x] **Sessão Depoimentos** (hero quote + 3 secundários com métricas) e **Sessão FAQ** (8 Q&A 2-col / accordion mobile)
- [x] **WhatsApp FAB** flutuante em todas as rotas com pulse animation
- [x] **Spinner Loader 4s** institucional no boot (`LoadingScreen.tsx`)
- [x] **Favicon SVG** vetorial (D + ponto verde)

### 2026-04-29 — Setup inicial + páginas internas
- [x] **Site institucional** (`/`) com 8 sessões originais — Hero, Manifesto, Pilares (diagrama vetorial), Método Visível (4 frames), Território (Manaus), Liderança Visível (carta da Diretora), Diagnóstico CTA
- [x] **Páginas internas** — `/consultoria-ti` (Mapa de Maturidade), `/treinamentos-profissionais` (Dossiê Editorial gold), `/treinamentos-informatica` (Graph técnico + terminal)
- [x] **Brandbook** preservado em `/brandbook` com 9 sessões originais (Hero, DNA, Cromia, Tipografia, Estacionário, Digital, Premium, Combos, Roadmap)
- [x] **Roteamento via wouter** com 5 rotas + fallback
- [x] **CSS split** em tokens / brand / institutional
- [x] **Migração HTML → React+Vite+TS** preservando 100% do CSS original
- [x] **Suite documental** (`public/suitedocumental.html`) preservada como tool interno estático
- [x] **Deploy Render** configurado — render.yaml, .nvmrc, _redirects, build script simplificado

---

## Decisões adiadas

- **Tailwind CSS** — adia. CSS puro com tokens é suficiente. Migração futura possível mas não traz ganho proporcional ao custo.
- **Framer Motion** — descartado. CSS resolve as animações que precisamos (reveal, hover, carousel infinite).
- **Three.js / WebGL** — descartado. Sem necessidade no momento.
- **Multi-language (i18n)** — adia até ter pipeline real LatAm.
- **CMS headless** — adia até ter blog real ou conteúdo dinâmico.
- **Backend** — site é estático no momento. Backend entra quando "Agendar Diagnóstico" virar feature real (calendly/integração) ou quando blog tiver editor.
