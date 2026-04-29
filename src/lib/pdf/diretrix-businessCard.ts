/**
 * DIRETRIX — Business Card PDF Generator
 * --------------------------------------------
 * Design exclusivo Diretrix: "manila folder digital" — lombada gold
 * vertical à esquerda (mesma metáfora do email signature + OG image).
 *
 *  - 85 × 55 mm (formato internacional)
 *  - Opcional: sangria de 3 mm (total 91 × 61 mm)
 *  - Opcional: marcas de corte nos 4 cantos
 *  - 2 páginas: frente + verso
 *  - Vetor puro — texto + retângulos + arcos via jsPDF
 */
import { jsPDF } from 'jspdf'

export interface BusinessCardData {
  name: string
  role: string
  email: string
  phone: string
  location: string
  website: string
}

export interface PDFOptions {
  bleed?: boolean
  cropMarks?: boolean
}

const COLORS = {
  azulProfundo: '#0A1F44',
  preto: '#05070D',
  verde: '#00A86B',
  gold: '#D4AF37',
  branco: '#FFFFFF',
  whiteAlpha70: '#B3B3B3',
  whiteAlpha40: '#666666',
} as const

const CARD_W = 85 // mm
const CARD_H = 55 // mm
const BLEED = 3 // mm

function drawCropMarks(
  doc: jsPDF,
  pageW: number,
  pageH: number,
  cardW: number,
  cardH: number,
  bleed: number,
) {
  const markLength = 3
  const offset = 1
  const lineWidth = 0.15

  doc.setLineWidth(lineWidth)
  doc.setDrawColor(0, 0, 0)

  const cardX = (pageW - cardW) / 2
  const cardY = (pageH - cardH) / 2

  // Top-left
  doc.line(cardX, cardY - bleed - offset, cardX, cardY - bleed - offset - markLength)
  doc.line(cardX - bleed - offset, cardY, cardX - bleed - offset - markLength, cardY)

  // Top-right
  doc.line(cardX + cardW, cardY - bleed - offset, cardX + cardW, cardY - bleed - offset - markLength)
  doc.line(
    cardX + cardW + bleed + offset,
    cardY,
    cardX + cardW + bleed + offset + markLength,
    cardY,
  )

  // Bottom-left
  doc.line(cardX, cardY + cardH + bleed + offset, cardX, cardY + cardH + bleed + offset + markLength)
  doc.line(
    cardX - bleed - offset,
    cardY + cardH,
    cardX - bleed - offset - markLength,
    cardY + cardH,
  )

  // Bottom-right
  doc.line(
    cardX + cardW,
    cardY + cardH + bleed + offset,
    cardX + cardW,
    cardY + cardH + bleed + offset + markLength,
  )
  doc.line(
    cardX + cardW + bleed + offset,
    cardY + cardH,
    cardX + cardW + bleed + offset + markLength,
    cardY + cardH,
  )
}

/**
 * FRENTE — fundo azul profundo + lombada gold + DIRETRIX. + tagline pillars
 */
function drawFrente(doc: jsPDF, cardX: number, cardY: number, bleedFill: number) {
  // Fundo (com sangria) — azul profundo
  doc.setFillColor(COLORS.azulProfundo)
  doc.rect(
    cardX - bleedFill,
    cardY - bleedFill,
    CARD_W + bleedFill * 2,
    CARD_H + bleedFill * 2,
    'F',
  )

  // Lombada gold à esquerda — assinatura visual da Diretrix (1.5mm wide)
  doc.setFillColor(COLORS.gold)
  doc.rect(cardX - bleedFill, cardY - bleedFill, 1.5, CARD_H + bleedFill * 2, 'F')

  // Hairline gold horizontal sutil ao longo do topo
  doc.setFillColor(COLORS.gold)
  doc.rect(cardX + 6, cardY + 8, 16, 0.2, 'F')

  // ─── DIRETRIX. wordmark ───
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(16)
  doc.setTextColor(COLORS.branco)
  doc.text('DIRETRIX', cardX + 6, cardY + 16)

  const dxWidth = doc.getTextWidth('DIRETRIX')
  doc.setTextColor(COLORS.verde)
  doc.text('.', cardX + 6 + dxWidth, cardY + 16)

  // ─── Tagline pillars ───
  doc.setFont('courier', 'bold')
  doc.setFontSize(5)
  doc.setTextColor(COLORS.gold)
  doc.text('CONSULTORIA · TREINAMENTO · ESTRATÉGIA', cardX + 6, cardY + 21)

  // ─── Bloco central: claim editorial ───
  doc.setFont('times', 'italic')
  doc.setFontSize(11)
  doc.setTextColor(COLORS.gold)
  doc.text('Não vendemos esperança.', cardX + 6, cardY + 36)
  doc.setTextColor(COLORS.branco)
  doc.text('Vendemos critério.', cardX + 6, cardY + 41)

  // ─── Coordenadas Manaus no rodapé ───
  doc.setFont('courier', 'normal')
  doc.setFontSize(4.5)
  doc.setTextColor(COLORS.whiteAlpha40)
  doc.text('03°06′S · 60°01′W · MANAUS', cardX + 6, cardY + CARD_H - 4)

  // ─── URL canto inferior direito ───
  doc.setFont('courier', 'bold')
  doc.setFontSize(5.5)
  doc.setTextColor(COLORS.gold)
  const siteText = 'DIRETRIX.COM.BR'
  const siteWidth = doc.getTextWidth(siteText)
  doc.text(siteText, cardX + CARD_W - 6 - siteWidth, cardY + CARD_H - 4)
}

/**
 * VERSO — fundo preto + lombada gold + dados da pessoa
 */
function drawVerso(
  doc: jsPDF,
  cardX: number,
  cardY: number,
  bleedFill: number,
  data: BusinessCardData,
) {
  // Fundo preto
  doc.setFillColor(COLORS.preto)
  doc.rect(
    cardX - bleedFill,
    cardY - bleedFill,
    CARD_W + bleedFill * 2,
    CARD_H + bleedFill * 2,
    'F',
  )

  // Lombada gold à direita (espelhada da frente — fechamento do "folder")
  doc.setFillColor(COLORS.gold)
  doc.rect(cardX + CARD_W - 1.5, cardY - bleedFill, 1.5 + bleedFill, CARD_H + bleedFill * 2, 'F')

  // ─── Nome em Playfair italic GIGANTE — "assinatura editorial" ───
  doc.setFont('times', 'italic')
  doc.setFontSize(15)
  doc.setTextColor(COLORS.gold)
  doc.text(data.name, cardX + 6, cardY + 14)

  // ─── Cargo mono caps verde ───
  doc.setFont('courier', 'bold')
  doc.setFontSize(5.5)
  doc.setTextColor(COLORS.verde)
  doc.text(data.role.toUpperCase(), cardX + 6, cardY + 19)

  // ─── Linha divisória sutil gold ───
  doc.setFillColor(COLORS.gold)
  doc.setLineWidth(0.15)
  doc.setDrawColor(COLORS.gold)
  doc.line(cardX + 6, cardY + 22, cardX + CARD_W - 12, cardY + 22)

  // ─── Bloco de contatos em 2x2 grid com micro-labels ───
  const labelColor = COLORS.gold
  const valColor = COLORS.branco
  const labelSize = 4
  const valSize = 7

  // E-mail (top-left)
  doc.setFont('courier', 'bold')
  doc.setFontSize(labelSize)
  doc.setTextColor(labelColor)
  doc.text('E-MAIL', cardX + 6, cardY + 28)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(valSize)
  doc.setTextColor(valColor)
  doc.text(data.email, cardX + 6, cardY + 32)

  // Telefone (top-right)
  doc.setFont('courier', 'bold')
  doc.setFontSize(labelSize)
  doc.setTextColor(labelColor)
  doc.text('TEL', cardX + CARD_W / 2 + 2, cardY + 28)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(valSize)
  doc.setTextColor(valColor)
  doc.text(data.phone, cardX + CARD_W / 2 + 2, cardY + 32)

  // Sede (bottom-left)
  doc.setFont('courier', 'bold')
  doc.setFontSize(labelSize)
  doc.setTextColor(labelColor)
  doc.text('SEDE', cardX + 6, cardY + 39)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(valSize)
  doc.setTextColor(valColor)
  doc.text(data.location, cardX + 6, cardY + 43)

  // Web (bottom-right)
  doc.setFont('courier', 'bold')
  doc.setFontSize(labelSize)
  doc.setTextColor(labelColor)
  doc.text('WEB', cardX + CARD_W / 2 + 2, cardY + 39)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(valSize)
  doc.setTextColor(valColor)
  doc.text(data.website, cardX + CARD_W / 2 + 2, cardY + 43)

  // ─── Logo D. ghost no canto inferior direito ───
  doc.setFont('times', 'italic')
  doc.setFontSize(28)
  doc.setTextColor('#0E1017')
  doc.text('D.', cardX + CARD_W - 14, cardY + CARD_H - 4)
}

export async function generateBusinessCardPDF(
  data: BusinessCardData,
  options: PDFOptions = {},
): Promise<void> {
  const { bleed = true, cropMarks = true } = options

  const bleedFill = bleed ? BLEED : 0
  const cropMargin = cropMarks ? 6 : 0
  const margin = bleedFill + cropMargin

  const pageW = CARD_W + margin * 2
  const pageH = CARD_H + margin * 2

  const doc = new jsPDF({
    unit: 'mm',
    format: [pageW, pageH],
    orientation: 'landscape',
    compress: true,
  })

  const cardX = margin
  const cardY = margin

  // ═══ Página 1 — Frente ═══
  drawFrente(doc, cardX, cardY, bleedFill)
  if (cropMarks) drawCropMarks(doc, pageW, pageH, CARD_W, CARD_H, bleedFill)

  if (cropMarks) {
    doc.setFont('courier', 'normal')
    doc.setFontSize(4)
    doc.setTextColor(120, 120, 120)
    doc.text(
      `DIRETRIX BUSINESS CARD · 85x55mm · ${bleed ? 'BLEED 3mm' : 'NO BLEED'} · FRENTE`,
      margin / 2,
      pageH - 1.5,
    )
  }

  // ═══ Página 2 — Verso ═══
  doc.addPage([pageW, pageH], 'landscape')
  drawVerso(doc, cardX, cardY, bleedFill, data)
  if (cropMarks) drawCropMarks(doc, pageW, pageH, CARD_W, CARD_H, bleedFill)

  if (cropMarks) {
    doc.setFont('courier', 'normal')
    doc.setFontSize(4)
    doc.setTextColor(120, 120, 120)
    doc.text(
      `DIRETRIX BUSINESS CARD · 85x55mm · ${bleed ? 'BLEED 3mm' : 'NO BLEED'} · VERSO`,
      margin / 2,
      pageH - 1.5,
    )
  }

  // Metadata
  doc.setProperties({
    title: `Cartão Diretrix — ${data.name}`,
    subject: 'Cartão de visita pronto para gráfica',
    author: 'Diretrix Soluções Corporativas',
    keywords: '85x55mm, business card, diretrix, brand',
    creator: 'diretrix.com.br/brandbook',
  })

  const safeName = data.name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  doc.save(`diretrix-cartao-${safeName || 'sem-nome'}.pdf`)
}
