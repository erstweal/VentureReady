const {
  Document, Packer, Paragraph, TextRun, BorderStyle,
  AlignmentType, Header, Footer, SimpleField,
  HeadingLevel, ShadingType, WidthType, Table, TableRow, TableCell
} = require('docx');
const fs = require('fs');

// ── Brand colors ──────────────────────────────────────────────
const NAVY   = "1B2A4A";
const TEAL   = "0D7377";
const ORANGE = "E87722";
const LIGHT_GRAY = "F5F6F8";
const MID_GRAY   = "6B7280";
const DARK_GRAY  = "374151";

// ── Helpers ───────────────────────────────────────────────────
const spacer = (pt = 10) =>
  new Paragraph({ children: [new TextRun("")], spacing: { before: 0, after: pt * 20 } });

const dividerLine = (color = TEAL) =>
  new Paragraph({
    children: [new TextRun("")],
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color, space: 1 } },
    spacing: { before: 0, after: 160 },
  });

// ── Header ────────────────────────────────────────────────────
const pageHeader = new Header({
  children: [
    new Paragraph({
      children: [
        new TextRun({ text: "VentureReady", bold: true, font: "Arial", size: 22, color: NAVY }),
        new TextRun({ text: ".ai", bold: true, font: "Arial", size: 22, color: TEAL }),
        new TextRun({ text: "  |  Investor Readiness Reports", font: "Arial", size: 18, color: MID_GRAY }),
      ],
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: TEAL, space: 1 } },
      spacing: { after: 0 },
    }),
  ],
});

// ── Footer ────────────────────────────────────────────────────
const pageFooter = new Footer({
  children: [
    new Paragraph({
      children: [
        new TextRun({ text: "ventureready.ai", font: "Arial", size: 16, color: TEAL }),
        new TextRun({ text: "   |   Confidential — For Recipient Use Only   |   Page ", font: "Arial", size: 16, color: MID_GRAY }),
        new SimpleField("PAGE"),
      ],
      border: { top: { style: BorderStyle.SINGLE, size: 4, color: NAVY, space: 1 } },
      spacing: { before: 120 },
    }),
  ],
});

// ── Cover / Title block ───────────────────────────────────────
const titleBlock = [
  spacer(24),
  new Paragraph({
    children: [
      new TextRun({ text: "VentureReady", bold: true, font: "Arial", size: 56, color: NAVY }),
      new TextRun({ text: ".ai", bold: true, font: "Arial", size: 56, color: TEAL }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
  }),
  new Paragraph({
    children: [new TextRun({ text: "Investor Readiness Reports", font: "Arial", size: 28, color: MID_GRAY })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 320 },
  }),
  dividerLine(ORANGE),
  spacer(6),
  new Paragraph({
    children: [new TextRun({ text: "DISCLAIMER & TERMS OF USE", bold: true, font: "Arial", size: 36, color: NAVY })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
  }),
  new Paragraph({
    children: [new TextRun({ text: "Please read carefully before using this report", font: "Arial", size: 20, color: MID_GRAY })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 0 },
  }),
  spacer(16),
  dividerLine(NAVY),
  spacer(8),
];

// ── Section helper ────────────────────────────────────────────
const sectionHeading = (text) =>
  new Paragraph({
    children: [new TextRun({ text, bold: true, font: "Arial", size: 24, color: TEAL })],
    spacing: { before: 320, after: 120 },
  });

const bodyPara = (text, options = {}) =>
  new Paragraph({
    children: [new TextRun({ text, font: "Arial", size: 20, color: DARK_GRAY, ...options })],
    spacing: { before: 0, after: 160 },
    alignment: AlignmentType.JUSTIFIED,
  });

const bulletItem = (text) =>
  new Paragraph({
    children: [new TextRun({ text: `\u2022  ${text}`, font: "Arial", size: 20, color: DARK_GRAY })],
    indent: { left: 480 },
    spacing: { before: 0, after: 100 },
  });

// ── Highlighted callout box ───────────────────────────────────
const calloutBox = (text) =>
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 9360, type: WidthType.DXA },
            shading: { fill: "EBF4F5", type: ShadingType.CLEAR },
            margins: { top: 160, bottom: 160, left: 200, right: 200 },
            borders: {
              top:    { style: BorderStyle.SINGLE, size: 4, color: TEAL },
              bottom: { style: BorderStyle.SINGLE, size: 4, color: TEAL },
              left:   { style: BorderStyle.SINGLE, size: 12, color: TEAL },
              right:  { style: BorderStyle.NONE,   size: 0, color: "FFFFFF" },
            },
            children: [
              new Paragraph({
                children: [new TextRun({ text, font: "Arial", size: 20, color: NAVY, italics: true })],
                spacing: { before: 0, after: 0 },
              }),
            ],
          }),
        ],
      }),
    ],
  });

// ── Main disclaimer content ───────────────────────────────────
const disclaimerContent = [

  // 1. Educational purpose
  sectionHeading("1. Educational & Informational Purpose Only"),
  bodyPara(
    "The evaluation report prepared by VentureReady.ai (\"Report\") is provided solely for educational " +
    "and informational purposes. The analysis, observations, commentary, and recommendations contained " +
    "herein are intended to help early-stage founders identify potential strengths and weaknesses in " +
    "their pitch decks and business plans in preparation for investor conversations."
  ),
  calloutBox(
    "This Report does not constitute — and should not be relied upon as — financial, legal, investment, " +
    "securities, accounting, or any other form of professional advice."
  ),
  spacer(8),

  // 2. Not professional advice
  sectionHeading("2. No Professional Advisory Relationship"),
  bodyPara(
    "VentureReady.ai is not a registered investment advisor, broker-dealer, financial planner, attorney, " +
    "or licensed professional of any kind. The delivery of this Report does not create, and should not " +
    "be interpreted as creating, a professional advisory relationship of any kind between VentureReady.ai " +
    "and the recipient."
  ),
  bodyPara(
    "Recipients are strongly encouraged to consult qualified professionals — including but not limited to " +
    "licensed attorneys, certified financial advisors, CPAs, and experienced venture capital advisors — " +
    "before making any decisions related to fundraising, securities offerings, or business strategy."
  ),

  // 3. No guarantees
  sectionHeading("3. No Guarantee of Outcomes"),
  bodyPara(
    "Nothing in this Report constitutes a representation, warranty, or guarantee regarding funding " +
    "outcomes, investor interest, business performance, or the commercial viability of any product, " +
    "service, or business model described in the submitted materials. Results may vary materially based on:"
  ),
  bulletItem("Market conditions and investor sentiment at the time of fundraising"),
  bulletItem("The completeness and accuracy of materials submitted for evaluation"),
  bulletItem("Individual investor preferences, thesis, and due diligence processes"),
  bulletItem("Regulatory, competitive, or macroeconomic factors outside the scope of this analysis"),
  bulletItem("Actions taken or not taken by the founder following receipt of this Report"),
  spacer(4),

  // 4. AI-assisted analysis
  sectionHeading("4. AI-Assisted Analysis"),
  bodyPara(
    "Evaluations produced by VentureReady.ai are generated with the assistance of artificial intelligence " +
    "tools and reviewed against established pitch deck frameworks. While care is taken to ensure quality " +
    "and accuracy, AI-assisted analysis may contain errors, omissions, or assessments that do not reflect " +
    "the specific preferences of any particular investor or investment firm."
  ),
  bodyPara(
    "This Report reflects a structured, framework-based review of the submitted materials as presented. " +
    "VentureReady.ai makes no representation that the analysis reflects current market conditions, " +
    "industry-specific investor expectations, or the views of any individual investor or fund."
  ),

  // 5. Confidentiality
  sectionHeading("5. Confidentiality & Intended Use"),
  bodyPara(
    "This Report is prepared for the exclusive use of the individual or entity that commissioned it. " +
    "Recipient agrees not to share, distribute, reproduce, or publish the contents of this Report " +
    "without the prior written consent of VentureReady.ai. The Report may not be represented as an " +
    "endorsement, certification, or validation of any business, product, or investment opportunity."
  ),

  // 6. Submitted materials
  sectionHeading("6. Reliance on Submitted Materials"),
  bodyPara(
    "The analysis contained in this Report is based entirely on the materials provided by the recipient " +
    "at the time of submission. VentureReady.ai has not independently verified the accuracy, completeness, " +
    "or legality of any claims, projections, or statements contained in the submitted documents. The " +
    "quality and depth of the evaluation is directly dependent on the quality of the materials submitted."
  ),

  // 7. Limitation of liability
  sectionHeading("7. Limitation of Liability"),
  bodyPara(
    "To the maximum extent permitted by applicable law, VentureReady.ai, its principals, contractors, " +
    "and affiliates shall not be liable for any direct, indirect, incidental, consequential, or special " +
    "damages arising from the use of or reliance on this Report, including but not limited to lost profits, " +
    "lost investment opportunities, or business interruption."
  ),
  calloutBox(
    "By accepting and using this Report, the recipient acknowledges that they have read, understood, and " +
    "agreed to the terms set forth in this Disclaimer."
  ),
  spacer(8),

  // Closing
  dividerLine(ORANGE),
  spacer(6),
  new Paragraph({
    children: [
      new TextRun({ text: "Questions? Contact us at ", font: "Arial", size: 18, color: MID_GRAY }),
      new TextRun({ text: "info@ventureready.ai", font: "Arial", size: 18, color: TEAL, bold: true }),
      new TextRun({ text: "  |  ", font: "Arial", size: 18, color: MID_GRAY }),
      new TextRun({ text: "ventureready.ai", font: "Arial", size: 18, color: TEAL, bold: true }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
  }),
  new Paragraph({
    children: [new TextRun({
      text: `\u00A9 ${new Date().getFullYear()} VentureReady.ai. All rights reserved.`,
      font: "Arial", size: 16, color: MID_GRAY,
    })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 0 },
  }),
];

// ── Assemble document ─────────────────────────────────────────
const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Arial", size: 20 } },
    },
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1080, right: 1260, bottom: 1080, left: 1260 },
        },
      },
      headers: { default: pageHeader },
      footers: { default: pageFooter },
      children: [
        ...titleBlock,
        ...disclaimerContent,
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("/home/claude/VentureReady_Disclaimer.docx", buffer);
  console.log("Done: VentureReady_Disclaimer.docx");
});
