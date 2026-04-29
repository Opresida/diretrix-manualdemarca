/**
 * DIRETRIX — Email Signature HTML builder
 * --------------------------------------------
 * Design exclusivo: "letterhead executivo com lombada gold".
 *
 * Referência conceitual: a pasta executiva 3D do brandbook (folder com
 * folder-elastic vertical à direita). A assinatura traz a lombada gold
 * à esquerda como uma manila folder digital — diferenciando-a de
 * qualquer outro padrão de mercado.
 *
 * Hierarquia visual:
 *  - Lombada gold vertical (signature da casa)
 *  - Header com DIRETRIX. + tagline pillars em mono caps
 *  - Nome em Playfair italic GIGANTE (verdadeira assinatura)
 *  - Cargo em Inter caps verde
 *  - Contatos em 2x2 grid compacto
 *  - Tagline final em Playfair italic com accent gold/verde
 *
 *  - Table-based (Outlook compatível)
 *  - CSS inline (Gmail strips <style>)
 *  - 2 variantes: dark (azul profundo) · light (creme institucional)
 */

export interface SignatureData {
  name: string
  role: string
  email: string
  phone: string
  location: string
  website: string
  linkedin?: string
}

export type SignatureVariant = 'dark' | 'light'

const FONT_STACK = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const SERIF_STACK = "Georgia, 'Playfair Display', 'Times New Roman', serif"
const MONO_STACK = "'SF Mono', 'Consolas', 'Courier New', monospace"

const PALETTE: Record<
  SignatureVariant,
  {
    bg: string
    headerBg: string
    fg: string
    fgSecondary: string
    fgMuted: string
    nameColor: string
    verde: string
    gold: string
    border: string
    accent: string
  }
> = {
  dark: {
    bg: '#0A1F44', // azul profundo — assinatura institucional Diretrix
    headerBg: '#05070D', // preto puro pro header
    fg: '#FFFFFF',
    fgSecondary: 'rgba(255,255,255,0.82)',
    fgMuted: 'rgba(255,255,255,0.5)',
    nameColor: '#D4AF37', // nome em gold = signature flourish
    verde: '#00D688', // verde mais luminoso pra contraste sobre azul
    gold: '#D4AF37',
    border: 'rgba(255,255,255,0.10)',
    accent: '#00D688',
  },
  light: {
    bg: '#FAFAF8', // creme institucional, não branco frio
    headerBg: '#0A1F44', // header sempre azul (continuidade DNA)
    fg: '#0A1F44',
    fgSecondary: '#3A3A3A',
    fgMuted: '#7A7A7A',
    nameColor: '#0A1F44',
    verde: '#007A4E',
    gold: '#997A00',
    border: '#E5E2D8',
    accent: '#0A1F44',
  },
}

function escapeHTML(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function buildSignatureHTML(
  data: SignatureData,
  variant: SignatureVariant = 'dark',
): string {
  const c = PALETTE[variant]
  const isDark = variant === 'dark'

  return `<!--diretrix-signature-start-->
<table width="540" cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse: collapse; max-width: 540px; font-family: ${FONT_STACK}; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
  <tr>
    <!-- LOMBADA GOLD à esquerda — "folder elastic" digital -->
    <td width="6" valign="top" bgcolor="${c.gold}" style="width: 6px; background: ${c.gold}; padding: 0;">&nbsp;</td>

    <td valign="top" bgcolor="${c.bg}" style="background: ${c.bg};">

      <!-- ═══ HEADER BAR (dark profundo) ═══ -->
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-collapse: collapse;">
        <tr>
          <td bgcolor="${c.headerBg}" style="background: ${c.headerBg}; padding: 16px 28px;">
            <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-collapse: collapse;">
              <tr>
                <td valign="middle" style="font-family: ${FONT_STACK}; font-size: 18px; font-weight: 800; letter-spacing: -0.5px; color: #FFFFFF; line-height: 1;">
                  DIRETRIX<span style="color: ${c.verde};">.</span>
                </td>
                <td valign="middle" align="right" style="font-family: ${MONO_STACK}; font-size: 8px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: ${c.gold}; line-height: 1.4;">
                  Consultoria · Treinamento<br>Estratégia
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- Hairline gold ↓ separa header do body -->
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-collapse: collapse;">
        <tr>
          <td height="2" bgcolor="${c.gold}" style="height: 2px; line-height: 2px; font-size: 0; background: ${c.gold};">&nbsp;</td>
        </tr>
      </table>

      <!-- ═══ BODY ═══ -->
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-collapse: collapse;">
        <tr>
          <td style="padding: 28px 32px 24px;">

            <!-- NOME — Playfair italic GIGANTE (assinatura editorial) -->
            <div style="font-family: ${SERIF_STACK}; font-style: italic; font-size: 28px; font-weight: 700; color: ${c.nameColor}; line-height: 1.05; letter-spacing: -0.01em; margin: 0;">
              ${escapeHTML(data.name)}
            </div>

            <!-- Cargo em verde caps -->
            <div style="margin-top: 6px; font-family: ${MONO_STACK}; font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: ${c.verde}; line-height: 1.4;">
              ${escapeHTML(data.role)}
            </div>

            <!-- Hairline divisor sutil -->
            <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-collapse: collapse; margin-top: 18px; margin-bottom: 18px;">
              <tr>
                <td height="1" style="height: 1px; line-height: 1px; font-size: 0; background: ${c.border};">&nbsp;</td>
              </tr>
            </table>

            <!-- Contatos em 2x2 grid compacto (não 1 coluna nem 1 linha) -->
            <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-collapse: collapse;">
              <tr>
                <td width="50%" valign="top" style="padding: 4px 12px 4px 0; font-family: ${FONT_STACK}; font-size: 12px; line-height: 1.5; color: ${c.fgSecondary};">
                  <span style="font-family: ${MONO_STACK}; font-size: 9px; font-weight: 700; letter-spacing: 1.5px; color: ${c.gold}; text-transform: uppercase; display: block;">E-mail</span>
                  ${escapeHTML(data.email)}
                </td>
                <td width="50%" valign="top" style="padding: 4px 0; font-family: ${FONT_STACK}; font-size: 12px; line-height: 1.5; color: ${c.fgSecondary};">
                  <span style="font-family: ${MONO_STACK}; font-size: 9px; font-weight: 700; letter-spacing: 1.5px; color: ${c.gold}; text-transform: uppercase; display: block;">Telefone</span>
                  ${escapeHTML(data.phone)}
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top" style="padding: 12px 12px 4px 0; font-family: ${FONT_STACK}; font-size: 12px; line-height: 1.5; color: ${c.fgSecondary};">
                  <span style="font-family: ${MONO_STACK}; font-size: 9px; font-weight: 700; letter-spacing: 1.5px; color: ${c.gold}; text-transform: uppercase; display: block;">Sede</span>
                  ${escapeHTML(data.location)}
                </td>
                <td width="50%" valign="top" style="padding: 12px 0 4px; font-family: ${FONT_STACK}; font-size: 12px; line-height: 1.5; color: ${c.fg}; font-weight: 700;">
                  <span style="font-family: ${MONO_STACK}; font-size: 9px; font-weight: 700; letter-spacing: 1.5px; color: ${c.gold}; text-transform: uppercase; display: block;">Web</span>
                  ${escapeHTML(data.website)}
                </td>
              </tr>
              ${data.linkedin
                ? `<tr>
                <td colspan="2" valign="top" style="padding: 12px 0 0; font-family: ${FONT_STACK}; font-size: 12px; line-height: 1.5; color: ${c.fgSecondary};">
                  <span style="font-family: ${MONO_STACK}; font-size: 9px; font-weight: 700; letter-spacing: 1.5px; color: ${c.gold}; text-transform: uppercase; display: block;">LinkedIn</span>
                  ${escapeHTML(data.linkedin)}
                </td>
              </tr>`
                : ''}
            </table>

            <!-- Hairline gold sutil antes da tagline -->
            <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-collapse: collapse; margin-top: 22px;">
              <tr>
                <td height="1" style="height: 1px; line-height: 1px; font-size: 0; background: ${c.gold}; opacity: ${isDark ? '0.4' : '0.5'};">&nbsp;</td>
              </tr>
            </table>

            <!-- Tagline assinatura — Playfair italic com accent gold/verde -->
            <div style="margin-top: 14px; font-family: ${SERIF_STACK}; font-style: italic; font-size: 13px; line-height: 1.5; color: ${c.fgMuted};">
              Não vendemos esperança.
              <span style="color: ${c.gold}; font-weight: 700;">Vendemos critério.</span>
            </div>

          </td>
        </tr>
      </table>

    </td>
  </tr>
</table>
<!--diretrix-signature-end-->`
}

/** HTML completo standalone (com DOCTYPE) — para download como arquivo .html */
export function buildSignatureFile(
  data: SignatureData,
  variant: SignatureVariant = 'dark',
): string {
  const html = buildSignatureHTML(data, variant)
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Assinatura DIRETRIX — ${escapeHTML(data.name)}</title>
  <style>
    body { margin: 0; padding: 40px 20px; background: ${variant === 'dark' ? '#0E1017' : '#F5F2EA'}; font-family: ${FONT_STACK}; }
    .instructions { max-width: 540px; margin: 0 auto 28px; padding: 18px 22px; background: ${variant === 'dark' ? 'rgba(212,175,55,0.08)' : 'rgba(212,175,55,0.12)'}; border-left: 3px solid #D4AF37; border-radius: 4px; font-size: 13px; line-height: 1.6; color: ${variant === 'dark' ? '#fff' : '#0A1F44'}; }
    .instructions h2 { margin: 0 0 10px; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; color: #D4AF37; font-weight: 800; }
    .signature-wrapper { max-width: 540px; margin: 0 auto; }
  </style>
</head>
<body>
  <div class="instructions">
    <h2>Instalação</h2>
    <strong>Gmail:</strong> Configurações → Geral → Assinatura → cole abaixo (Ctrl+A no preview, Ctrl+C, depois Ctrl+V no campo).<br>
    <strong>Outlook:</strong> Arquivo → Opções → Email → Assinaturas → criar nova → cole abaixo.<br>
    <strong>Apple Mail:</strong> Mail → Preferências → Assinaturas → cole e desmarque "always match my default font".
  </div>
  <div class="signature-wrapper">
    ${html}
  </div>
</body>
</html>`
}

/** Plain-text fallback */
export function buildSignaturePlainText(data: SignatureData): string {
  const lines = [
    'DIRETRIX.',
    'Consultoria · Treinamento · Estratégia',
    '─────────────────────────',
    data.name,
    data.role,
    '',
    `E-mail   · ${data.email}`,
    `Telefone · ${data.phone}`,
    `Sede     · ${data.location}`,
    `Web      · ${data.website}`,
    data.linkedin ? `LinkedIn · ${data.linkedin}` : null,
    '',
    'Não vendemos esperança. Vendemos critério.',
  ].filter(Boolean)
  return lines.join('\n')
}
