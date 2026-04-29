# CONTEXT — DIRETRIX

Regras, brandbook, convenções de código e padrões da identidade visual. Leia antes de modificar.

---

## Identidade e Tom

### Quem é a Diretrix
Operação de **consultoria estratégica em TI + formação executiva** sediada em Manaus/AM. Atua em 3 frentes com peso igual: Consultoria em Tecnologia da Informação, Treinamento em Desenvolvimento Profissional & Gerencial, Treinamento em Informática. Clientes típicos: empresas de médio/grande porte do PIM (Polo Industrial de Manaus), holdings, indústrias e operações que exigem padrão institucional. Posicionamento B2B premium.

### Tom de voz
- **Editorial-declarativo**, não corporativo. Frases curtas, ativas, com peso retórico. Tipografia Playfair italic é parte do tom.
- **Técnico-confiante**, sem hype. Demonstra com método e dado, não com promessa. Vocabulário do executivo brasileiro maduro (board, sponsor, hand-off, blueprint, governança).
- **Anti-clichê**. Banidos: "soluções", "inovador", "disruptivo", "excelência", "sinergia", "best-in-class", "líder de mercado", "outside the box", "cutting-edge".
- **Argumentação por contraste**. Frases que negam o senso comum do mercado: "Liderança não se aprende no LinkedIn", "Capacidade técnica é vantagem perene", "O diagnóstico que precede o sistema".
- **Tagline canônica imutável**: *"Não vendemos esperança. Vendemos critério."* Aparece em footer, assinatura de email, OG image, cartão de visita, página final da proposta.

### Copy imutável
Frases institucionais que não mudam sem acordo explícito:
- **Hero**: "Antes da tecnologia, a decisão."
- **Hero sub**: "Consultoria estratégica em TI e formação executiva para empresas que recusam adotar antes de entender."
- **Pilar 01 · Consultoria TI**: "O diagnóstico que precede o sistema."
- **Pilar 02 · Profissional**: "Liderança não se aprende no LinkedIn."
- **Pilar 03 · Informática**: "Capacidade técnica é vantagem perene."
- **Manifesto fechamento**: "Não vendemos esperança. Vendemos critério."
- **Liderança Visível headline**: "Por que escolhi construir aqui."

### CTAs aprovados
- "Agendar Diagnóstico" (primário, todas as rotas)
- "Ver método em uso" (secundário, leva pra sessão Método)
- "Aprofundar" (em pilares, leva pra páginas internas)
- **Banidos**: "Saiba mais", "Entre em contato", "Solicite um orçamento", "Quer saber mais?"

---

## Brandbook

### Paleta
| Token | Hex | Uso |
|---|---|---|
| Verde Diretrix (`--verde`) | `#00A86B` | Accent funcional · ponto da logo · cargo verde · botões primary |
| Azul Profundo (`--azul`) | `#0A1F44` | Secundário institucional · header bar do email signature · gradient bg |
| Gold (`--gold`) | `#D4AF37` | Accent **premium principal** · lombada do cartão · cantos L-bracket OG · destaque editorial |
| Preto (`--preto`) | `#05070D` | Background permanente |

**Regra de ouro:** verde é mecanismo (status, ponto da logo, role tag). Gold é signature flourish (lombada, cantos, accents premium). Azul é institucional (headers, gradient secundário). **Nunca introduzir** vermelho, laranja, roxo como accent. Sempre dark.

### Tipografia
- **Poppins** (400-900) — Display, hero, headlines, logo wordmark
- **Inter** (300-700) — Body, descrições, contatos, formulários
- **Playfair Display** (italic) — Signature flourish: nome em cartão de visita, accent em headlines ("a decisão"), pull-quotes do manifesto, tagline em italic

Contraste tipográfico **trio** (Poppins display + Inter body + Playfair italic accent) é parte central do DNA visual. Remover qualquer uma das 3 descaracteriza.

### Padrões visuais recorrentes — exclusivos Diretrix
Esses elementos aparecem em **múltiplos artefatos** e formam coesão da marca:
- **Lombada gold vertical** — assinatura visual da casa (referência à pasta executiva 3D do brandbook). Aparece em: email signature (esquerda), cartão de visita (frente esquerda + verso direita)
- **Cantos L-bracket gold** — frame editorial premium. Aparece em: OG image (4 cantos), capa da Proposta Comercial (4 cantos)
- **Hairline gold** — linhas decorativas finas. Aparece em: header das peças, divisores entre seções, OG vertical à esquerda
- **Coordenadas Manaus (`03°06′S · 60°01′W`)** — territorial anchor. Aparece em: cartão de visita frente, OG image rodapé direito
- **"D." Playfair italic ghost** — watermark gigante translúcido. Aparece em: verso do cartão, OG image canto direito
- **Headline accent serif italic** — parte da frase em Playfair italic gold/verde. Aparece em: hero, manifesto, todas as page-heads

---

## Padrões de Código

### Imports
- Alias `@/` aponta pra `src/`
- Imports de tipo com `import type`
- Lucide icons via `import { Icon } from 'lucide-react'`

### Componentes
- Funcionais + TypeScript + interfaces locais
- Props bem tipadas (sem `any`)
- Estrutura por contexto:
  - `components/shared/*` — shared (Footer, FAB, Loader)
  - `components/brandbook/*` — só brandbook (Nav, sections)
  - `components/institutional/*` — só institucional (Nav, sections)
  - `lib/*` — builders (HTML, PDF) e utilities
  - `pages/*` — uma por rota

### CSS — split por contexto
- `styles/tokens.css` — vars + reset + body + ambient + .reveal + footer + FAB + loader (SHARED)
- `styles/brand.css` — só `/brandbook` (swatches, type-blocks, 3D stationery, geradores)
- `styles/institutional.css` — só institucional (hero, manifesto, pilares, etc)

**Princípio de reuso:** compor por infraestrutura, não por componentes de UX. Hook `useReveal`, `Footer` corporativo e `tokens.css` cruzam os 2 contextos. Navs e sections **NUNCA** compartilham — IA distinta força similaridade visual proibida.

### Animações
- Animação CSS pura preferida (sem framer-motion no projeto)
- `useReveal` hook aplica `.visible` em `.reveal` quando entra no viewport
- Carrossel infinito (Equipe) via CSS `@keyframes equipe-scroll` com array duplicado
- Transitions sempre cubic-bezier(0.23, 1, 0.32, 1) ou ease-out

### Responsividade
- **Baseline: 375×812 (iPhone X / Galaxy S22)**
- **5 breakpoints**: 1024 (brandbook nav), 900 (institutional nav), 768 (tablet), 480 (mobile pequeno), 375 (tiny)
- Padding lateral: 56px desktop → 24px @900 → 20px @768 → 16px @480
- Headlines: `clamp(...)` adaptativo, com mínimo 26-30px em telas pequenas
- Hamburger menus full-screen com ESC fechar, body scroll-lock e safe-area
- `overflow-x: hidden` global no body
- `img/video/svg/iframe { max-width: 100% }` global (proteção contra overflow)

### Geradores (PDF / PNG / HTML)
- **Lazy via dynamic import**: `jspdf` e `html2canvas` carregam só no clique do botão "Baixar". Mantém bundle inicial enxuto.
- **Builders puros em `lib/`**: `diretrix-signature.ts` retorna string HTML, `diretrix-businessCard.ts` exporta função async que gera PDF.
- **Pixel-perfect**: PNG do OG via offscreen capture target sempre 1200×630.

---

## Decisões Arquiteturais

### Por que CSS puro (sem Tailwind)?
- O CSS original do brandbook era tão custom (transforms 3D, gradientes elaborados, animações) que Tailwind seria overhead
- Preserva fidelidade visual 1:1 com o HTML original
- Pode-se migrar pra Tailwind no futuro sem prejuízo

### Por que wouter em vez de react-router?
- 3KB gzip vs 12KB
- 5 rotas estáticas, zero params, zero nested — wouter é a menor abstração determinística

### Por que sem framer-motion?
- O movimento Diretrix é sutil e CSS resolve (reveal, hover, carousel)
- Bundle inicial 70KB gzip vs 120KB+ se incluísse framer

### Por que split CSS em 3 arquivos?
- `tokens` é DNA atravessável; `brand` e `institutional` são contextos isolados
- Manutenção: mexer em uma rota não afeta a outra acidentalmente

---

## Regras para a IA

- **Nunca** introduzir cor que não seja `--verde`, `--azul`, `--gold` como accent
- **Nunca** usar Tailwind nesse projeto (tem CSS puro)
- **Sempre** preservar a **lombada gold** quando criar variações de cartão/email/peça impressa — é signature
- **Sempre** preservar **cantos L-bracket gold** em peças "documento institucional" (OG, proposta, capa de relatório)
- **Sempre** usar Playfair italic para nomes próprios e accents emocionais — é signature flourish
- **Sempre** testar mobile em 375×812 antes de commitar uma seção nova
- **Nunca** adicionar emojis decorativos em UI institucional. Lucide React é a biblioteca única.
- **Nunca** copiar layouts diretamente do projeto Mazari Corp — cada projeto tem visual exclusivo, mesmo herdando padrões conceituais
- **CTAs banidos**: "Saiba mais", "Entre em contato", "Solicite orçamento". Sempre verbos imperativos diretos.
- **Footer intocado**: corporate footer com CNPJ + endereço + tagline "Não vendemos esperança. Vendemos critério." é assinatura institucional
- **Nunca** commitar `node_modules/`, `dist/` ou `.env` (já no `.gitignore`)
