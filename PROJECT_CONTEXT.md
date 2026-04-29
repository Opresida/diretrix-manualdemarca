# PROJECT_CONTEXT — DIRETRIX

Contexto do negócio Diretrix e relação deste projeto com a estratégia comercial. Leia para entender as motivações por trás das decisões de copy, escopo e visual.

---

## O que é a Diretrix

**DIRETRIX SOLUÇÕES CORPORATIVAS LTDA**
- **CNPJ**: 45.529.299/0001-04
- **Sede**: Av. André Araújo, 2721 · Bairro Aleixo · Manaus/AM · CEP 69.060-000
- **Diretora Executiva**: Andressa Silva de Lima
- **E-mail institucional**: corporativo@diretrix.com.br
- **Domínio**: diretrix.com.br

Operação **B2B premium** com atuação em 3 frentes paralelas, todas vendidas com peso igual:

### 1. Consultoria em Tecnologia da Informação
Diagnóstico técnico, blueprint estratégico, arquitetura defensável, governança e operação. Vende-se pela qualidade do **diagnóstico** antes da venda — o método é a peça-chave. Buyers típicos: CTO, Diretor de TI, Sponsor executivo de transformação digital.

### 2. Treinamento em Desenvolvimento Profissional & Gerencial
Formação executiva de líderes e gestores. **3 programas curatoriais** (Decisão Executiva, Comunicação sob Pressão, Construção de Times de Alta Confiança) + 1 Trilha Executiva de 6 meses. Buyers: CHRO, Diretor de Pessoas, Conselho.

### 3. Treinamento em Informática
Trilhas técnicas densas em ferramentas e linguagens. **8 competências** organizadas em 3 níveis (Fundamento / Intermediário / Avançado) — Lógica, Office, Redes, Banco de Dados, Web, Cloud, DevOps, Segurança. **4 formatos**: Individual, Corporativa, Bootcamp Intensivo, Mentoria Técnica. Buyers: Coordenador de TI, RH, Líder técnico.

---

## Este projeto: Site Institucional + Manual de Marca

É o **front institucional público** da Diretrix. Não é produto, é canal de aquisição premium e prova de método:

- Demonstrar capacidade técnica e seriedade institucional
- Apresentar os 3 pilares com peso igual
- Provar a operação Manaus como diferencial (não esconder território)
- Capturar leads qualificados via "Agendar Diagnóstico" (30 min sem custo)
- Servir de link canônico em propostas, e-mails e LinkedIn da equipe
- O `/brandbook` é também ferramenta interna: gera assinatura de email, cartão de visita PDF, OG image e proposta comercial sob demanda

---

## Cases / Clientes apresentados

Atualmente os depoimentos no site são **placeholders plausíveis** (Roberto Mendes/Indústrias Verena, Carla Lima/Holding Norte Capital, Eduardo Sousa/Cooperativa Bracoop, Luiz Felipe Almeida/Grupo Atena) com métricas concretas. A copy é representativa do que clientes reais diriam após contratar a Diretrix.

**Quando houver cases reais autorizados**, substituir em `src/components/institutional/sections/Depoimentos.tsx` (linhas 14-58). Manter o padrão: nome + cargo + empresa + citação editorial + métrica mensurável específica.

---

## Equipe apresentada no carrossel

8 cards no carrossel infinito (`Equipe.tsx`), com mix de nomes reais e placeholders:

- **Andressa Silva de Lima** — Diretora Executiva (real, dado oficial do CNPJ)
- **Carlos Veridiano, Renata Bezerra, Eduardo Tassio** — Curadores dos 3 programas profissionais (placeholders plausíveis)
- **Júlia Ribeiro, Marcelo Fontes** — Pesquisadora Cloud/DevOps + Consultor Arquitetura TI (placeholders)
- **2 posições "Em breve"** — Dados & Analytics + Programa Internacional (estruturação ativa)

Quando a equipe real estiver consolidada, substituir o array `PESQUISADORES` em `src/components/institutional/sections/Equipe.tsx`.

---

## Território como diferencial competitivo

A Diretrix **opera em Manaus** e isso aparece explícito no site:
- Coordenadas geográficas `03°06′S · 60°01′W` no cartão de visita e OG image
- Sessão "Território" na home com mapa SVG estilizado da Amazônia
- Stats institucionais: PIM movimenta R$ 169 bi/ano, 450+ empresas, 100% equipe local
- Carta da Diretora menciona "construir aqui" como decisão estratégica

**Não é detalhe geográfico — é tese de posicionamento.** O Polo Industrial de Manaus exige tecnologia de classe global mas é mal-atendido pelas grandes praças (SP/Rio). A Diretrix preenche essa lacuna sem o overhead corporativo do eixo Sudeste.

Atendimento: Brasil + LatAm em modelo híbrido (workshops e diagnósticos críticos presenciais; sprints remotos com sync semanal).

---

## Público-alvo do site

Travado em **B2B — empresas** (não setor público nem cursos abertos):

1. **Decisor técnico senior** (CTO, Diretor de TI) — quer ver método, blueprint, governança, hand-off limpo
2. **Sponsor executivo** (CEO, Presidente, Diretor) — quer ver liderança, território, proof social com métricas
3. **CHRO / Diretor de Pessoas** — quer ver formadores titulares, programas estruturados, ROI mensurável
4. **Coordenador de TI** — quer ver trilhas técnicas, formatos in-company, capacidade pós-treinamento

Tom premium porque o **ticket é alto**: contratos típicos R$ 80k+ em consultoria, R$ 30k+ em programa de formação executiva. Não é venda transacional — é construção de relacionamento de 6-18 meses.

---

## Restrições explícitas

### Posicionamento
- **3 frentes equilibradas** — nenhuma é destaque, nenhuma é secundária. Hero apresenta os 3 com peso igual.
- **Multi-page** — Home + 3 páginas dedicadas (`/consultoria-ti`, `/treinamentos-profissionais`, `/treinamentos-informatica`). Cada uma com **móvel pesado único** (Mapa de Maturidade, Dossiê Editorial, Graph Técnico) — proibido virarem irmãs visuais.
- **Manual fica em `/brandbook`** — não na home. Brandbook é ferramenta institucional, não conteúdo de marketing.

### Voz
- **Editorial-declarativa, sem hype**. Argumentação por contraste.
- **Frases banidas** já listadas no [CONTEXT.md](./CONTEXT.md#regras-para-a-ia).
- **Tagline "Vendemos critério"** é assinatura imutável.

### Visual
- **Dark only** (sem light mode no site institucional)
- **Verde + Gold + Azul + Preto** — paleta fechada, **sem outros accents**
- **Lombada gold + cantos L-bracket gold + Playfair italic** = vocabulário visual próprio do Diretrix (não copiar de outros projetos)

### Operação
- **Sigilo absoluto**: NDA disponível desde o primeiro contato
- **IP 100% do cliente**: tudo o que a Diretrix produz pertence ao cliente desde o commit 1
- **Zero vendor-lock**: stack escolhida pensando em hand-off
- **Conformidade LGPD**: mapeamento de dados pessoais, base legal, DPA disponível

---

## Tool interno preservado: Suite Documental

Em `public/suitedocumental.html` existe um gerador interno (Contratos · Ofícios · Orçamentos) usado pela Diretrix para a operação dela mesma. **Não é produto, é infraestrutura operacional.** Acessível via `/suitedocumental.html` mas não linkado no nav. Stack: HTML/CSS/JS vanilla com jspdf+html2canvas via CDN. Roda independente do React do site.

---

## Métricas de sucesso

- **Bundle inicial < 100KB gzip** (atual: ~95KB) — pra carregar rápido em conexões 3G no PIM
- **Lighthouse mobile a11y/performance ≥ 90**
- **Mobile 375×812 totalmente funcional** (baseline)
- **Zero scroll horizontal** em qualquer viewport
- **Hamburger menu** acessível por touch ≥44×44 tap target
- **Tempo do primeiro click no "Agendar Diagnóstico"** — métrica futura, sem analytics ainda

---

## Deploy e hospedagem

- **Repositório**: `github.com/Opresida/diretrix-manualdemarca` (branch `main`)
- **Hospedagem**: **Render Static Site** (auto-deploy no push)
- **Domínio**: diretrix.com.br (a configurar quando registrado)
- **SPA fallback**: regra de Rewrite na dashboard Render (`/* → /index.html`)

Ver [README.md](./README.md#deploy) para configuração completa.

---

## Próximos produtos / evolução

Registrado para contexto, **não está no escopo deste deploy inicial**:

- Página de cada caso real quando autorizados (`/cases/<slug>`) — substituir placeholders
- Blog institucional (CMS headless ou Markdown) — possivelmente em `/insights`
- Integração do "Agendar Diagnóstico" com Calendly/Cal.com (hoje é mailto)
- Formulário de contato real com backend (a Diretrix vai virar full-stack futuramente)
- Página de carreiras (`/juntar-se`) com posições em aberto
- Brand kit ZIP para download (logos, tokens, fonts, templates) na sessão Downloads do brandbook
- Internacionalização (PT-BR → EN) para clientes LatAm
