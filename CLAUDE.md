# DIRETRIX — Manual de Marca + Site Institucional

## Contexto rápido

Site institucional B2B premium da DIRETRIX SOLUÇÕES CORPORATIVAS LTDA (Manaus/AM). 3 linhas de serviço — Consultoria em TI, Treinamento Profissional & Gerencial, Treinamento em Informática. Stack: React 18 + Vite 5 + TS 5 + wouter (sem Tailwind, CSS puro).

## Comandos

```bash
pnpm dev          # dev server (porta 5000 — ver vite.config.ts)
pnpm build        # tsc -b && vite build
pnpm preview      # vite preview --host 0.0.0.0
pnpm typecheck    # tsc --noEmit
```

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Site institucional (8 sessões) |
| `/brandbook` | Manual de marca completo (9 sessões) |
| `/consultoria-ti` | Página interna · móvel pesado: Mapa de Maturidade interativo |
| `/treinamentos-profissionais` | Página interna · móvel pesado: Dossiê Editorial dos formadores |
| `/treinamentos-informatica` | Página interna · móvel pesado: Graph Técnico de skills |
| `/suitedocumental.html` | Tool interno (gerador de Contratos/Ofícios/Orçamentos via jspdf) — preservado como estático |

Roteamento via `wouter`. Catch-all volta para `Home`.

## Estrutura de pastas

```
src/
├── App.tsx                            # <Switch> wouter, 5 rotas + 404
├── main.tsx                           # imports tokens + brand + institutional
├── styles/
│   ├── tokens.css                     # SHARED (vars, fonts, reset, .reveal, footer)
│   ├── brand.css                      # BRANDBOOK ONLY
│   └── institutional.css              # INSTITUTIONAL ONLY
├── pages/
│   ├── Home.tsx                       # institucional
│   ├── Brandbook.tsx                  # manual
│   ├── ConsultoriaTI.tsx
│   ├── TreinamentosProfissionais.tsx
│   └── TreinamentosInformatica.tsx
├── components/
│   ├── shared/Footer.tsx              # ambos os contextos
│   ├── brandbook/                     # nav + 9 sessões manual
│   └── institutional/                 # nav + 7 sessões home + páginas
└── hooks/useReveal.ts                 # IntersectionObserver SHARED
```

## Regra de reuso (não emaranhar)

| Item | Decisão | Razão |
|---|---|---|
| `useReveal`, `Footer`, `tokens.css` | **SHARED** | Mecanismo / institucional / DNA — atravessa contextos |
| `Nav`, primitivas de seção | **DUPLICADO** | IA diferente; forçar shared mata diferenciação visual |
| Componentes do manual (folder, letterhead, envelope) | **NÃO MIGRAR** ao institucional | São prova de marca, não conteúdo |

**Princípio:** compor por infraestrutura, não por componentes de UX.

## Identidade visual (tokens)

- Cores: `--verde #00A86B` · `--azul #0A1F44` · `--gold #D4AF37` · `--preto #05070D`
- Fonts: Poppins (display) · Playfair Display (italic accent) · Inter (body)
- Acento: gold no /treinamentos-profissionais (humano), verde nas outras (técnico)

## Voz e copy

Editorial-declarativa. Sem hype. Headline-tagline travada: **"Não vendemos esperança. Vendemos critério."**

CTAs banidos: `Saiba mais` · `Entre em contato` · `Quer saber mais?` · `Solicite um orçamento`. Use verbos diretos: `Agendar Diagnóstico`, `Ver método em uso`, `Aprofundar`.

## Anti-padrões proibidos

1. Sem grids 3-col `ícone+título+descrição` sem justificativa funcional
2. Sem migrar elementos físicos do manual (envelope 3D, selo de cera) para o institucional
3. Sem sessão chamada "Sobre Nós"

## Antes de fazer mudança

- **Mexer só em `brand.css`** se a mudança for no `/brandbook`
- **Mexer só em `institutional.css`** se a mudança for no site institucional
- **Tokens em `tokens.css`** mudam ambos os contextos
- Cada página interna tem **um móvel pesado único** — manter essa diferenciação

## Reference docs

- Plano original: `C:\Users\user\.claude\plans\meu-amigo-agora-vamos-polished-sunset.md`
- Manual original (HTML): `_legacy/index.html.original` (referência histórica)
