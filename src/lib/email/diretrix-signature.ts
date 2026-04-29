/**
 * DIRETRIX — Email Signature HTML builder
 * --------------------------------------------
 * Gera assinatura HTML pronta para Gmail / Outlook / Apple Mail.
 *  - Table-based (Outlook compatível)
 *  - CSS inline (Gmail strips <style>)
 *  - Web-safe font stack (Poppins/Inter não carregam em clients)
 *  - 2 variantes: dark · light
 *  - Layout 2 colunas: pilar de marca + info pessoal
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
const MONO_STACK = "'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace"

const PALETTE: Record<
  SignatureVariant,
  {
    bg: string
    fg: string
    fgSecondary: string
    fgMuted: string
    verde: string
    gold: string
    border: string
  }
> = {
  dark: {
    bg: '#05070D',
    fg: '#FFFFFF',
    fgSecondary: 'rgba(255,255,255,0.78)',
    fgMuted: 'rgba(255,255,255,0.42)',
    verde: '#00A86B',
    gold: '#D4AF37',
    border: 'rgba(255,255,255,0.10)',
  },
  light: {
    bg: '#FFFFFF',
    fg: '#0A1F44',
    fgSecondary: '#3A3A3A',
    fgMuted: '#888888',
    verde: '#007A4E', // verde mais escuro pra contraste sobre branco
    gold: '#997A00',
    border: '#E5E5E5',
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

interface ContactItem {
  value: string
  highlight?: boolean
}

function buildContactRow(
  item: ContactItem,
  verde: string,
  fg: string,
  fgStrong: string,
): string {
  if (!item.value.trim()) return ''
  return `
        <tr>
          <td valign="top" style="padding: 3px 8px 3px 0; font-family: ${MONO_STACK}; font-size: 11px; line-height: 1.5; font-weight: 800; color: ${verde}; vertical-align: top;">▸</td>
          <td valign="top" style="padding: 3px 0; font-family: ${MONO_STACK}; font-size: 12px; line-height: 1.5; color: ${item.highlight ? fgStrong : fg}; ${item.highlight ? 'font-weight: 700;' : ''} word-break: break-word; vertical-align: top;">${escapeHTML(item.value)}</td>
        </tr>`
}

export function buildSignatureHTML(
  data: SignatureData,
  variant: SignatureVariant = 'dark',
): string {
  const c = PALETTE[variant]

  return `<!--diretrix-signature-start-->
<table width="520" cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse: collapse; background: ${c.bg}; border: 1px solid ${c.border}; border-radius: 6px; max-width: 520px; font-family: ${FONT_STACK};">
  <tr>
    <!-- ═══ COLUNA BRAND (azul ancorado) ═══ -->
    <td width="160" valign="top" style="width: 160px; padding: 24px 22px; border-right: 2px solid ${c.verde}; vertical-align: top;">

      <!-- Logo DIRETRIX. -->
      <div style="font-family: ${FONT_STACK}; font-size: 20px; line-height: 1; font-weight: 800; letter-spacing: -0.5px; color: ${c.fg};">
        DIRETRIX<span style="color: ${c.verde};">.</span>
      </div>

      <!-- Tagline pillars (vertical) -->
      <div style="margin-top: 18px; font-family: ${MONO_STACK}; font-size: 9px; line-height: 1.85; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; color: ${c.fgSecondary};">
        Consultoria<br>Treinamento<br>Estratégia
      </div>

      <!-- Divisor -->
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-collapse: collapse; margin-top: 18px;">
        <tr>
          <td height="1" style="height: 1px; line-height: 1px; font-size: 0; background: ${c.border};">&nbsp;</td>
        </tr>
      </table>

      <!-- Tagline assinatura -->
      <div style="margin-top: 14px; font-family: ${MONO_STACK}; font-size: 9px; line-height: 1.55; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 600; color: ${c.fgMuted};">
        Não vendemos<br>esperança.<br><span style="color: ${c.gold};">Vendemos critério.</span>
      </div>

    </td>

    <!-- ═══ COLUNA PESSOA ═══ -->
    <td valign="top" style="padding: 24px 26px; vertical-align: top;">

      <!-- Nome -->
      <div style="font-family: ${FONT_STACK}; font-size: 18px; line-height: 1.2; font-weight: 700; color: ${c.fg}; letter-spacing: -0.2px;">
        ${escapeHTML(data.name)}
      </div>

      <!-- Cargo -->
      <div style="margin-top: 5px; font-family: ${MONO_STACK}; font-size: 10px; line-height: 1.4; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; color: ${c.verde};">
        ${escapeHTML(data.role)}
      </div>

      <!-- Divisor -->
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-collapse: collapse; margin-top: 14px; margin-bottom: 14px;">
        <tr>
          <td height="1" style="height: 1px; line-height: 1px; font-size: 0; background: ${c.border};">&nbsp;</td>
        </tr>
      </table>

      <!-- Contatos -->
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse: collapse;">
        ${buildContactRow({ value: data.email }, c.verde, c.fgSecondary, c.fg)}
        ${buildContactRow({ value: data.phone }, c.verde, c.fgSecondary, c.fg)}
        ${buildContactRow({ value: data.location }, c.verde, c.fgSecondary, c.fg)}
        ${buildContactRow({ value: data.website, highlight: true }, c.verde, c.fgSecondary, c.fg)}
        ${data.linkedin ? buildContactRow({ value: data.linkedin }, c.verde, c.fgSecondary, c.fg) : ''}
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
    body { margin: 0; padding: 32px; background: ${variant === 'dark' ? '#0E1017' : '#F5F5F5'}; font-family: ${FONT_STACK}; }
    .instructions { max-width: 520px; margin: 0 auto 24px; padding: 16px; background: rgba(0,168,107,0.06); border-left: 3px solid #00A86B; border-radius: 4px; font-size: 13px; line-height: 1.6; color: ${variant === 'dark' ? '#fff' : '#333'}; }
    .instructions h2 { margin: 0 0 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; color: #00A86B; }
    .signature-wrapper { max-width: 520px; margin: 0 auto; }
  </style>
</head>
<body>
  <div class="instructions">
    <h2>Como instalar</h2>
    <strong>Gmail:</strong> Configurações → Geral → Assinatura → cole abaixo (Ctrl+A no preview, Ctrl+C, depois Ctrl+V no campo).<br>
    <strong>Outlook:</strong> Arquivo → Opções → Email → Assinaturas → criar nova → cole abaixo.<br>
    <strong>Apple Mail:</strong> Mail → Preferências → Assinaturas → cole abaixo (desmarque "use system fonts").
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
    `▸ ${data.email}`,
    `▸ ${data.phone}`,
    `▸ ${data.location}`,
    `▸ ${data.website}`,
    data.linkedin ? `▸ ${data.linkedin}` : null,
    '',
    'Não vendemos esperança. Vendemos critério.',
  ].filter(Boolean)
  return lines.join('\n')
}
