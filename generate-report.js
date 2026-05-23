"use strict";
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, BorderStyle, WidthType, ShadingType,
  VerticalAlign, LevelFormat, SimpleField, PageBreak
} = require("docx");
const fs = require("fs");

// ── Brand colors ───────────────────────────────────────────────
const NAVY       = "1B2A4A";
const TEAL       = "0D7377";
const ORANGE     = "E87722";
const WHITE      = "FFFFFF";
const LIGHT_GRAY = "F5F6F8";
const MID_GRAY   = "6B7280";
const DARK_GRAY  = "374151";
const RED_BG     = "FEE2E2";
const AMBER_BG   = "FEF9C3";
const BLUE_BG    = "DBEAFE";
const RED_TEXT   = "991B1B";
const AMBER_TEXT = "92400E";
const BLUE_TEXT  = "1E40AF";
const GREEN_BG   = "D1FAE5";
const GREEN_TEXT = "065F46";

// ── REPORT DATA ────────────────────────────────────────────────
const REPORT_DATA = {

  companyName:    "VentureReady.ai",
  companyTagline: "Expert-level pitch deck evaluation in 24 hours.",
  founderLine:    "Greg Lavigne, Founder & CEO",
  evaluationDate: "May 2026",
  companyWebsite: "ventureready.ai",

  shortList: [
    {
      number: 1,
      headline: "Framework + Priority Fixes = Differentiated Position",
      detail:   "VentureReady is the only AI evaluation tool combining a named proprietary framework, P1/P2/P3 ranked action plans, and institutional cohort pricing. That three-part combination is the moat — no single competitor replicates all three."
    },
    {
      number: 2,
      headline: "Dual-Channel GTM Is Well-Conceived",
      detail:   "Running accelerator pilots and angel group credibility tracks simultaneously is smart sequencing. Free pilots lower institutional sales friction; angel endorsement creates inbound founder pull. Both channels converge on the Phase 2 Screener."
    },
    {
      number: 3,
      headline: "Financial Model Needs Internal Consistency",
      detail:   "The slide calls out \u201cBreak-even Year 3\u201d while the appendix P&L shows break-even in Year 4. The discrepancy is a P1 credibility issue \u2014 an investor who reads both pages will flag it immediately."
    },
    {
      number: 4,
      headline: "Pre-Revenue Status Is Handled Transparently",
      detail:   "Disclosing no paid customers while citing 100% positive reception and unsolicited testimonials is the right approach. Reframing traction as \u201cpre-revenue, post-validation\u201d is credible and appropriate for a seed-stage raise."
    },
    {
      number: 5,
      headline: "The Ask Slide Requires Use-of-Funds Milestone Clarity",
      detail:   "The $500K raise and fund allocation percentages are present, but the milestones lack specific ARR or customer-count targets tied to each phase. Investors need to see what the money buys in measurable terms."
    },
  ],

  executiveSummary: [
    "VentureReady.ai is an AI-powered pitch deck evaluation platform targeting startup founders, accelerator programs, and angel networks. The deck was submitted for the ClawCon audience and follows the 15-slide VentureReady Investor Pitch Framework with a 16th closing slide. At 16 slides including the Thank You, the deck is within acceptable range and structurally complete. Design quality is polished and consistent with institutional-level execution. The problem, solution, and competitive landscape slides are strong. The financial model is present and detailed.",
    "The deck\u2019s primary vulnerabilities are two: first, a break-even inconsistency between the financial projections slide and the appendix P&L that a careful investor will spot and question; second, the Ask slide milestones are framed in qualitative terms (\u201cteam hired & onboarded\u201d) rather than quantitative targets that create accountability. The go-to-market strategy is well-sequenced and the dual-channel approach is appropriate for the stage. Traction is honestly presented as pre-revenue with unsolicited testimonials and active SPARK conversations.",
    "The team slide is unconventional and intentionally so \u2014 listing Claude and ClaudeCode as Fractional CIO and CTO is a bold creative choice that communicates the AI-native operating model clearly. Whether an investor finds it charming or concerning depends on the audience. For a ClawCon context the choice is likely well-calibrated; for a traditional angel group it may require verbal framing. The exit slide is present and credible. Overall the deck is in the top quartile of pre-revenue seed decks reviewed through the VentureReady framework."
  ],

  bottomLine: "VentureReady.ai is a fundable seed-stage concept with a clear moat thesis, transparent traction, and institutional GTM logic. Fix the break-even inconsistency, sharpen the Ask slide milestones with measurable targets, and add one sentence of verbal framing for the AI team slide before presenting to traditional angel audiences. At that point the deck is investor-meeting-ready.",

  slideAnalysis: [
    {
      number: 1,
      title: "Title Slide",
      verdict: "KEEP",
      analysis: "Clean, on-brand, and complete. Company name, tagline, founder name, title, and contact information are all present. The ClawCon event label in the orange badge is a smart contextual touch that signals the deck is tailored for this specific audience. The rocket-and-chart logo is distinctive."
    },
    {
      number: 2,
      title: "Hook / Problem Statistics",
      verdict: "STRENGTHEN",
      analysis: "The 90% stat, 15+ slides, <4 min investor read time, and $0 actionable feedback trio land well as visual anchors. However, the source for the 90% figure is not cited. At a minimum, add a footnote or source reference. One experienced investor asking \u201cwhere does 90% come from?\u201d without a source creates a credibility dip that is easy to prevent."
    },
    {
      number: 3,
      title: "The Problem",
      verdict: "KEEP",
      analysis: "The dual-audience framing (founder pain and accelerator pain) is excellent and differentiating. Most pitch decks address only one customer and leave the institutional buyer unstated. The two-column layout is clean and the personal quote from Greg grounds the slide in lived experience. This is a strong slide."
    },
    {
      number: 4,
      title: "The Solution",
      verdict: "STRENGTHEN",
      analysis: "Framework, priority fixes, and 24-hour delivery are the right three pillars to lead with. The copy is clear. What is missing is any visual of the actual product \u2014 a report preview, a screenshot of the evaluation interface, or a sample PDF page. The Sample slide (slide 5) picks up some of that load, but solution slides should show the product rather than describe it."
    },
    {
      number: 5,
      title: "What the Report Looks Like (Sample)",
      verdict: "KEEP",
      analysis: "This is effectively a product demo slide and it works well. The mock slide-by-side grading column and priority action plan column communicate the output format clearly. The Sample: TechCo label makes it clear this is illustrative. Strong execution. The footnote listing additional report sections is a useful value-add signal."
    },
    {
      number: 6,
      title: "Market Opportunity",
      verdict: "STRENGTHEN",
      analysis: "TAM/SAM/SOM structure is correctly formatted with the telescoping box layout. The $180M TAM, $22M SAM, and $850K SOM are credible at a glance. However, the pricing tiers shown at the bottom of the slide show $97\u2013$297 while the financial model appendix shows $97 Basic and no $297 line \u2014 the live site has $49/$149 pricing per project knowledge. Confirm which price set is current and make it consistent across all slides."
    },
    {
      number: 7,
      title: "Product Roadmap",
      verdict: "KEEP",
      analysis: "The four-phase timeline is logical and appropriately scoped. Phase 1 (live), Phase 2 (this round), Phase 3 (roadmap), Phase 4 (post-funding) creates a clean funding narrative. IdeaReady at Phase 3 is a credible product extension. The disclaimer at the bottom that Phases 3 and 4 are funded by revenue growth is good transparency."
    },
    {
      number: 8,
      title: "Early Traction",
      verdict: "STRENGTHEN",
      analysis: "The pre-revenue, post-validation framing is strong and the three testimonials are specific and attributable to contexts (Ann Arbor pitch coaching session, shared with founding team). Active SPARK conversations is a meaningful institutional signal. The only gap is that 20+ evaluations conducted through volunteer coaching is not the same as 20+ paying customers \u2014 and the slide could be misread. The small print at the bottom handles this but it is easily missed. Consider moving the \u201cno paid customers yet\u201d disclosure to a more prominent position within the stat block."
    },
    {
      number: 9,
      title: "Go-to-Market Strategy",
      verdict: "KEEP",
      analysis: "The two-channel parallel motion (accelerator programs and angel group credibility) is well-conceived and each channel has a clear three-step progression: in progress, next step, roadmap. The convergence on the Phase 2 Screener as the revenue inflection point for both channels ties the GTM narrative together effectively. This is one of the stronger GTM slides seen in seed-stage pitches."
    },
    {
      number: 10,
      title: "Competitive Landscape",
      verdict: "KEEP",
      analysis: "The five-competitor matrix is clean and the differentiators are well-chosen. VentureReady sweeps all four strategic differentiators and the pricing is competitively positioned between free tools and expensive consultants. The moat statement at the bottom is clear and memorable. The only refinement worth considering: PitchBob.io shares the \u201cpriority ranked fixes\u201d check \u2014 if that is debatable, tighten the differentiator language."
    },
    {
      number: 11,
      title: "The Team",
      verdict: "STRENGTHEN",
      analysis: "Greg\u2019s credentials are strong and well-presented. The ClaudeCode and Claude team cards are a creative and intentionally unconventional choice that communicates AI-native operations. For the ClawCon context this likely reads as clever and self-aware. For traditional angel audiences, prepare a one-sentence verbal bridge explaining the AI team concept before they ask. Consider adding a brief line about advisor relationships or ecosystem connections to reinforce the human network."
    },
    {
      number: 12,
      title: "Technology & Defensibility",
      verdict: "KEEP",
      analysis: "The three-layer technology stack (Framework IP, AI Evaluation Engine, Delivery & Platform Layer) followed by three defensibility theses (Framework IP, Data advantage, Network effect) is well-structured. The data advantage and network effect arguments are stage-appropriate claims \u2014 early-stage, not yet proven, but plausible and grounded."
    },
    {
      number: 13,
      title: "Financial Projections",
      verdict: "STRENGTHEN",
      analysis: "Year 1 ($120K), Year 3 ($764K), and Year 5 ($1.57M) headline figures are present. The stacked bar chart communicates channel mix evolution clearly. The key assumptions box is appropriately detailed. The critical issue: the slide text states \u201cBreak-even Y3\u201d in the subtitle and one callout box labels the break-even as \u201cYear 3,\u201d but the appendix P&L shows break-even at Year 4 with Year 3 net profit of $336K. This discrepancy must be resolved before any investor meeting. Decide which number is correct, update both locations, and ensure the assumption table matches."
    },
    {
      number: 14,
      title: "The Ask",
      verdict: "STRENGTHEN",
      analysis: "$500K seed round with 18-month runway is present. Use-of-funds breakdown (65% staff, 25% advertising & travel, 10% legal & operations) is clear and credible. The 18-month milestones are present but expressed as activity milestones (team hired, pilot complete) rather than outcome milestones (X customers, $Y ARR). Replace at least two milestone entries with specific, measurable targets that an investor can underwrite against. Example: \u201c$200K+ ARR\u201d in Q3\u2013Q4 is the right format \u2014 apply that pattern throughout."
    },
    {
      number: 15,
      title: "The Exit",
      verdict: "KEEP",
      analysis: "Strategic acquisition and strategic partnership/licensing paths are both documented with named acquirers and partners. The lifestyle business note at the bottom is a mature and transparent addition that signals founder self-awareness. The 5\u201310x revenue multiple within 3\u20135 years is a reasonable exit thesis for the platform."
    },
    {
      number: 16,
      title: "Thank You / Closing",
      verdict: "KEEP",
      analysis: "Clean closing slide with full contact information, tagline callback, and ecosystem affiliations. Greg\u2019s headshot on this slide is a professional touch. This slide functions well as both a closing beat and a leave-behind reference."
    },
  ],

  missingElements: [
    {
      severity: "P1",
      element:  "Break-Even Consistency Resolution",
      impact:   "The deck states break-even at Year 3 in the financial projections slide but the appendix P&L shows break-even at Year 4. An investor who reads both pages will flag this immediately. This must be corrected before any investor meeting."
    },
    {
      severity: "P1",
      element:  "Measurable Outcome Milestones in the Ask Slide",
      impact:   "Current 18-month milestones are activity-based (team hired, pilot complete). Investors underwrite outcomes, not activities. Add specific customer-count and ARR targets to at least two of the six milestone bullets."
    },
    {
      severity: "P2",
      element:  "Pricing Consistency Across Slides",
      impact:   "The market opportunity slide shows $97\u2013$297 pricing tiers. Ensure this matches current live pricing and is consistent with every pricing reference in the deck and appendix."
    },
    {
      severity: "P2",
      element:  "Stat Source Citations",
      impact:   "The 90% figure on slide 2 and the <4 min reading time figure have no source cited. Add footnote citations. An investor unfamiliar with these statistics will ask, and having a source ready \u2014 on the slide or in an appendix \u2014 is better than answering verbally."
    },
    {
      severity: "P2",
      element:  "Product Visual on Solution Slide",
      impact:   "The solution slide describes the product in words. Adding a single screenshot or report preview image would make the value proposition tangible and reduce cognitive load on the investor."
    },
    {
      severity: "P3",
      element:  "Advisor or Strategic Relationship Disclosure",
      impact:   "Greg has ecosystem connections to Ann Arbor SPARK, New Enterprise Forum, and 1 Million Cups. If any of those relationships have produced formal advisor agreements or letters of support, naming one or two individuals would strengthen the team slide."
    },
  ],

  redFlags: [
    {
      title: "Break-Even Date Contradiction",
      body:  "The financial projections slide and one callout box both state break-even in Year 3. The appendix 5-year pro forma shows Year 3 net profit of $336K (i.e., already profitable) but also labels break-even as Year 4 in the assumption table. An investor will stop at this discrepancy. Resolve it before the first meeting."
    },
    {
      title: "AI Team Slide Risk with Traditional Audiences",
      body:  "Listing Claude and ClaudeCode as Fractional CIO and CTO is a creative and bold choice. In a ClawCon context it is likely well-received. In a traditional Michigan angel group setting, it may generate skepticism about team depth or founder self-awareness. Have a verbal bridge ready: one sentence that explains the AI operating model and pivots to the human network and advisor relationships."
    },
    {
      title: "Volunteer Traction vs. Paid Traction Ambiguity",
      body:  "The traction slide leads with 20+ decks evaluated and 100% positive reception. The disclosure that these were conducted through volunteer pitch coaching and no paid customers yet is buried in small print. A fast-reading investor may form a false impression. Move the disclosure to a more prominent position within the slide."
    },
    {
      title: "Phase 2 Screener Is Unfunded and Unpromised",
      body:  "The GTM strategy converges both channels on the Angel Group Screener as the Phase 2 paid product. But Phase 2 is explicitly labeled \u201cThis Round\u201d on the roadmap slide \u2014 meaning it is not yet built. The risk is that an investor commits expecting a Phase 2 product that is 6\u201312 months away from revenue. Set expectations clearly in the Ask slide milestones."
    },
  ],

  competitorGrid: {
    companyName:   "VentureReady.ai",
    competitors:   ["PitchLeague.ai", "OpenVC", "Slidebean", "Consultants ($300\u2013$1K/hr)"],
    differentiators: [
      {
        label:   "Named proprietary framework",
        company: true,
        scores:  [false, false, false, false],
        notes:   [null, null, null, null],
      },
      {
        label:   "P1/P2/P3 ranked action plan",
        company: true,
        scores:  [false, false, false, false],
        notes:   [null, null, null, null],
      },
      {
        label:   "Institutional / cohort pricing",
        company: true,
        scores:  [false, false, false, false],
        notes:   [null, null, null, null],
      },
      {
        label:   "Founder + institutional dual market",
        company: true,
        scores:  [false, false, false, false],
        notes:   [null, null, null, null],
      },
      {
        label:   "24-hour branded PDF delivery",
        company: true,
        scores:  [false, false, false, false],
        notes:   [null, "Partial", null, null],
      },
    ],
  },

  moatLayers: [
    {
      layer:       "Proprietary Framework IP",
      description: "The VentureReady Investor Pitch Framework is a named, versioned, 15-slide evaluation standard. Every competitor would need to build their own framework from scratch and establish market recognition for it. That is a meaningful barrier at this stage of the market."
    },
    {
      layer:       "Data Compounding Advantage",
      description: "Every evaluation submitted improves prompt calibration and sector-specific pattern recognition. At 20+ evaluations today across 6+ verticals, the data advantage is nascent. At 500+ evaluations across 15+ verticals, it becomes a meaningful moat that new entrants cannot replicate without time and volume."
    },
    {
      layer:       "Institutional Stickiness",
      description: "Once embedded in an accelerator cohort workflow or angel group screening process, VentureReady becomes part of the institutional infrastructure. Switching costs are high: the alternative requires rebuilding an evaluation workflow, retraining program staff, and replacing the consistent standard that institutional partners rely on."
    },
    {
      layer:       "Brand Positioning in Startup Ecosystem",
      description: "Greg\u2019s personal credibility as a Ross MBA, pitch coach at New Enterprise Forum and Rice Business, and active ecosystem participant in Ann Arbor creates a founder-to-platform trust transfer that a new entrant cannot replicate with a website alone."
    },
  ],

  storylineArc: [
    { slide: 1,  title: "Title",                    purpose: "Who are you and why are you here? Establish identity and set audience expectations for a 15-minute conversation." },
    { slide: 2,  title: "Hook",                     purpose: "What is the scale of the problem? Lead with the sharpest statistic to earn the audience\u2019s attention before you\u2019ve earned their trust." },
    { slide: 3,  title: "The Problem",              purpose: "Who feels the pain and how badly? Establish both buyer personas (founder and accelerator) and the specific friction each experiences." },
    { slide: 4,  title: "The Solution",             purpose: "What do you do and how does it work? Describe the product at the 30,000-foot level before showing it." },
    { slide: 5,  title: "Product Demo (Sample Report)", purpose: "Show the product in action. What does the investor get when they use VentureReady? Make the value tangible before discussing the market." },
    { slide: 6,  title: "Market Opportunity",       purpose: "How large is the prize? Frame TAM/SAM/SOM with a bottom-up penetration model that shows the math is credible." },
    { slide: 7,  title: "Product Roadmap",          purpose: "Where are you going and how does this funding stage fit in the journey? Four phases that scale from solo founder to platform." },
    { slide: 8,  title: "Early Traction",           purpose: "Have you proven this works? Pre-revenue validation, testimonials, and institutional conversations show demand before the check clears." },
    { slide: 9,  title: "Go-to-Market Strategy",    purpose: "How will you acquire customers at scale? Two parallel channels, each with a defined progression from free pilot to paid contract." },
    { slide: 10, title: "Competitive Landscape",    purpose: "Why can\u2019t the investor just use an existing tool? The matrix shows the three-way differentiation that no competitor replicates." },
    { slide: 11, title: "The Team",                 purpose: "Why are you the right team to win this market? Founder credentials plus AI operating model as a structural cost advantage." },
    { slide: 12, title: "Technology & Defensibility", purpose: "What makes this hard to copy? Three-layer stack and three-layer moat thesis from IP through network effects." },
    { slide: 13, title: "Financial Projections",    purpose: "What does the economic model look like over five years? Channel-by-channel build from $120K to $1.57M with break-even in sight." },
    { slide: 14, title: "The Ask",                  purpose: "What do you need and what will you do with it? $500K, 18-month runway, three allocation buckets, and milestone targets." },
    { slide: 15, title: "The Exit",                 purpose: "How does the investor make money? Strategic acquisition paths and partnership/licensing options with named counterparties." },
  ],

  customerDiscovery: {
    intro: "Customer discovery is evaluated across three dimensions: evidence quality, validation depth, and commercial signal. At seed stage the standard is 15\u201320 structured interviews, at least 3\u20135 price validation conversations, and at least one LOI or pilot commitment.",
    sections: [
      {
        heading: "Evidence Quality",
        body:    "Three testimonials are presented, all from real ecosystem interactions (pitch coaching sessions, post-report follow-up). They are specific, contextually grounded, and unsolicited \u2014 a meaningful quality signal. The origin story explaining how evaluations were conducted through volunteer pitch coaching in Ann Arbor is appropriately transparent. No fabricated or solicited endorsements."
      },
      {
        heading: "Validation Depth",
        body:    "20+ evaluations across 6+ sectors is a meaningful interaction base for a pre-revenue product. However, the deck does not disclose whether structured customer discovery interviews were conducted alongside the evaluations. The distinction matters: delivering a product to someone is not the same as asking them how much they would pay for it. If price validation conversations have been conducted, that evidence should be surfaced. If not, that is the next 30-day priority."
      },
      {
        heading: "Commercial Signal",
        body:    "Active SPARK conversations underway is a meaningful institutional signal that an accelerator is interested. No signed LOI, pilot agreement, or paid transaction has occurred yet. The deck handles this with appropriate transparency. For the next investor meeting, converting one SPARK conversation to a signed free pilot agreement \u2014 even at $0 \u2014 would provide a contractual anchor that strengthens the traction narrative significantly."
      },
      {
        heading: "Recommendation",
        body:    "Conduct 5\u201310 structured price validation conversations with accelerator program directors before the next institutional investor meeting. The question to ask: \u201cIf VentureReady ran your next cohort evaluation for free and you found it valuable, what would you pay for the second cohort?\u201d The answers will either validate the $1,000\u2013$1,500/cohort price point or reveal the real number. Either outcome is more valuable than the current absence of data."
      },
    ],
  },

  priorityMap: [
    {
      tier:   "P1",
      rank:   1,
      action: "Resolve the break-even date inconsistency between the financial projections slide and the appendix P&L",
      effort: "30 minutes \u2014 update one number and verify all references match",
      impact: "Eliminates the single highest-probability investor objection in the deck"
    },
    {
      tier:   "P1",
      rank:   2,
      action: "Replace activity milestones in the Ask slide with measurable outcome targets (customer count and ARR)",
      effort: "1\u20132 hours \u2014 requires selecting the right targets and updating two to three milestone bullets",
      impact: "Transforms the Ask slide from a task list into an investment thesis investors can underwrite"
    },
    {
      tier:   "P2",
      rank:   3,
      action: "Confirm and standardize pricing across all slides (Market slide, Ask slide, appendix)",
      effort: "30 minutes \u2014 audit every price reference and align to the current live pricing",
      impact: "Eliminates a second category of investor credibility questions about financial model consistency"
    },
    {
      tier:   "P2",
      rank:   4,
      action: "Add source citations for the 90% statistic and <4 min investor read time on the Hook slide",
      effort: "1 hour \u2014 find the primary sources and add footnote references",
      impact: "Eliminates a common investor objection for data-driven claims; builds credibility before the conversation begins"
    },
    {
      tier:   "P2",
      rank:   5,
      action: "Add one product visual (screenshot or report page preview) to the Solution slide",
      effort: "2 hours \u2014 export a page from a real report and embed it in the slide",
      impact: "Makes the solution tangible before the product demo slide; reduces investor imagination gap"
    },
    {
      tier:   "P2",
      rank:   6,
      action: "Move the no-paid-customers disclosure to a more prominent position in the Traction slide stat block",
      effort: "30 minutes \u2014 layout adjustment only",
      impact: "Prevents investor misread of the traction metrics; demonstrates founder transparency proactively"
    },
    {
      tier:   "P3",
      rank:   7,
      action: "Prepare a one-sentence verbal bridge for the AI team slide for traditional angel group audiences",
      effort: "30 minutes \u2014 write and rehearse one sentence",
      impact: "Neutralizes a potential audience-specific concern without changing the slide itself"
    },
    {
      tier:   "P3",
      rank:   8,
      action: "Add one named advisor or ecosystem contact to the Team slide if a formal relationship exists",
      effort: "1 hour \u2014 conditional on whether a formal advisor relationship has been established",
      impact: "Strengthens the human network signal alongside the AI operating model"
    },
  ],

}; // end REPORT_DATA

// ═══════════════════════════════════════════════════════════════
// DOCUMENT BUILDER
// ═══════════════════════════════════════════════════════════════

// ── Helpers ────────────────────────────────────────────────────
const spacer = (pt = 10) =>
  new Paragraph({ children: [new TextRun("")], spacing: { before: 0, after: pt * 20 } });

const divider = (color = TEAL) =>
  new Paragraph({
    children: [new TextRun("")],
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color, space: 1 } },
    spacing: { before: 0, after: 160 },
  });

const sectionHeading = (text) =>
  new Paragraph({
    children: [new TextRun({ text, bold: true, font: "Arial", size: 28, color: NAVY })],
    spacing: { before: 480, after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: TEAL, space: 1 } },
    pageBreakBefore: false,
  });

const subHeading = (text, color = TEAL) =>
  new Paragraph({
    children: [new TextRun({ text, bold: true, font: "Arial", size: 22, color })],
    spacing: { before: 240, after: 100 },
  });

const bodyPara = (text) =>
  new Paragraph({
    children: [new TextRun({ text, font: "Arial", size: 20, color: DARK_GRAY })],
    spacing: { before: 0, after: 160 },
    alignment: AlignmentType.JUSTIFIED,
  });

const bCell = (text, fill, textColor, w, bold = false) =>
  new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: { fill, type: ShadingType.CLEAR },
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    verticalAlign: VerticalAlign.CENTER,
    borders: {
      top:    { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
      left:   { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
      right:  { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
    },
    children: [new Paragraph({
      children: [new TextRun({ text, font: "Arial", size: 18, color: textColor, bold })],
      alignment: AlignmentType.CENTER,
    })],
  });

const hdrCell = (text, fill, w) =>
  new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: { fill, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    verticalAlign: VerticalAlign.CENTER,
    borders: {
      top:    { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
      bottom: { style: BorderStyle.SINGLE, size: 2, color: NAVY },
      left:   { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
      right:  { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
    },
    children: [new Paragraph({
      children: [new TextRun({ text, font: "Arial", size: 18, color: WHITE, bold: true })],
      alignment: AlignmentType.CENTER,
    })],
  });

const lCell = (text, fill, textColor, w) =>
  new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: { fill, type: ShadingType.CLEAR },
    margins: { top: 80, bottom: 80, left: 160, right: 120 },
    verticalAlign: VerticalAlign.CENTER,
    borders: {
      top:    { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
      left:   { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
      right:  { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
    },
    children: [new Paragraph({
      children: [new TextRun({ text, font: "Arial", size: 18, color: textColor })],
    })],
  });

// ── Header & Footer ────────────────────────────────────────────
const pageHeader = new Header({
  children: [new Paragraph({
    children: [
      new TextRun({ text: "VentureReady", bold: true, font: "Arial", size: 20, color: NAVY }),
      new TextRun({ text: ".ai", bold: true, font: "Arial", size: 20, color: TEAL }),
      new TextRun({ text: "  |  Investor Readiness Report  |  " + REPORT_DATA.companyName, font: "Arial", size: 18, color: MID_GRAY }),
    ],
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: TEAL, space: 1 } },
    spacing: { after: 0 },
  })],
});

const pageFooter = new Footer({
  children: [new Paragraph({
    children: [
      new TextRun({ text: "ventureready.ai  |  Confidential \u2014 For Recipient Use Only  |  Page ", font: "Arial", size: 16, color: MID_GRAY }),
      new SimpleField("PAGE"),
    ],
    border: { top: { style: BorderStyle.SINGLE, size: 4, color: NAVY, space: 1 } },
    spacing: { before: 120 },
  })],
});

// ── Cover Page ─────────────────────────────────────────────────
function coverPage() {
  return [
    spacer(40),
    new Paragraph({
      children: [
        new TextRun({ text: "VentureReady", bold: true, font: "Arial", size: 72, color: NAVY }),
        new TextRun({ text: ".ai", bold: true, font: "Arial", size: 72, color: TEAL }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
    }),
    new Paragraph({
      children: [new TextRun({ text: "Investor Readiness Report", font: "Arial", size: 32, color: MID_GRAY })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
    }),
    divider(ORANGE),
    spacer(8),
    new Paragraph({
      children: [new TextRun({ text: REPORT_DATA.companyName, bold: true, font: "Arial", size: 56, color: NAVY })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: REPORT_DATA.companyTagline, font: "Arial", size: 24, color: MID_GRAY, italics: true })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: REPORT_DATA.founderLine, font: "Arial", size: 22, color: DARK_GRAY })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
    }),
    new Paragraph({
      children: [new TextRun({ text: REPORT_DATA.companyWebsite, font: "Arial", size: 20, color: TEAL })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
    }),
    divider(NAVY),
    spacer(8),
    new Paragraph({
      children: [new TextRun({ text: "Evaluation Date: " + REPORT_DATA.evaluationDate, font: "Arial", size: 20, color: MID_GRAY })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
    }),
    new Paragraph({
      children: [new TextRun({ text: "Prepared by VentureReady.ai  |  Confidential", font: "Arial", size: 18, color: MID_GRAY })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 0 },
    }),
    spacer(20),
    // Page break
    new Paragraph({ children: [new TextRun({ break: 1 })], pageBreakBefore: true }),
  ];
}

// ── Short List ─────────────────────────────────────────────────
function shortListSection() {
  const rows = REPORT_DATA.shortList.map(item =>
    new TableRow({
      children: [
        new TableCell({
          width: { size: 600, type: WidthType.DXA },
          shading: { fill: NAVY, type: ShadingType.CLEAR },
          margins: { top: 120, bottom: 120, left: 120, right: 120 },
          verticalAlign: VerticalAlign.CENTER,
          borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
          },
          children: [new Paragraph({
            children: [new TextRun({ text: String(item.number), bold: true, font: "Arial", size: 24, color: ORANGE })],
            alignment: AlignmentType.CENTER,
          })],
        }),
        new TableCell({
          width: { size: 8760, type: WidthType.DXA },
          shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
          margins: { top: 100, bottom: 100, left: 160, right: 160 },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
          },
          children: [
            new Paragraph({
              children: [new TextRun({ text: item.headline, bold: true, font: "Arial", size: 20, color: NAVY })],
              spacing: { after: 60 },
            }),
            new Paragraph({
              children: [new TextRun({ text: item.detail, font: "Arial", size: 18, color: DARK_GRAY })],
              spacing: { after: 0 },
            }),
          ],
        }),
      ],
    })
  );

  return [
    sectionHeading("At a Glance"),
    spacer(4),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [600, 8760],
      rows,
    }),
  ];
}

// ── Executive Summary ──────────────────────────────────────────
function execSummarySection() {
  const paras = REPORT_DATA.executiveSummary.map(p => bodyPara(p));
  return [
    sectionHeading("Executive Summary"),
    ...paras,
    spacer(4),
    // Bottom line callout
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [9360],
      rows: [new TableRow({
        children: [new TableCell({
          width: { size: 9360, type: WidthType.DXA },
          shading: { fill: "EBF4F5", type: ShadingType.CLEAR },
          margins: { top: 160, bottom: 160, left: 200, right: 200 },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 4, color: TEAL },
            bottom: { style: BorderStyle.SINGLE, size: 4, color: TEAL },
            left: { style: BorderStyle.SINGLE, size: 12, color: ORANGE },
            right: { style: BorderStyle.NONE, size: 0, color: WHITE },
          },
          children: [
            new Paragraph({
              children: [new TextRun({ text: "Bottom Line", bold: true, font: "Arial", size: 20, color: NAVY })],
              spacing: { after: 80 },
            }),
            new Paragraph({
              children: [new TextRun({ text: REPORT_DATA.bottomLine, font: "Arial", size: 20, color: DARK_GRAY, italics: true })],
              spacing: { after: 0 },
            }),
          ],
        })],
      })],
    }),
  ];
}

// ── Slide Analysis ─────────────────────────────────────────────
function slideAnalysisSection() {
  const verdictColor = { KEEP: GREEN_TEXT, STRENGTHEN: AMBER_TEXT, ADD: RED_TEXT };
  const verdictBg    = { KEEP: GREEN_BG,   STRENGTHEN: AMBER_BG,   ADD: RED_BG    };

  const rows = REPORT_DATA.slideAnalysis.map(slide => {
    const bg = verdictBg[slide.verdict] || LIGHT_GRAY;
    const tc = verdictColor[slide.verdict] || DARK_GRAY;
    return new TableRow({
      children: [
        new TableCell({
          width: { size: 600, type: WidthType.DXA },
          shading: { fill: NAVY, type: ShadingType.CLEAR },
          margins: { top: 100, bottom: 100, left: 100, right: 100 },
          verticalAlign: VerticalAlign.CENTER,
          borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
          },
          children: [new Paragraph({
            children: [new TextRun({ text: String(slide.number), bold: true, font: "Arial", size: 20, color: WHITE })],
            alignment: AlignmentType.CENTER,
          })],
        }),
        new TableCell({
          width: { size: 1800, type: WidthType.DXA },
          shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
          margins: { top: 100, bottom: 100, left: 140, right: 100 },
          verticalAlign: VerticalAlign.CENTER,
          borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
          },
          children: [new Paragraph({
            children: [new TextRun({ text: slide.title, bold: true, font: "Arial", size: 19, color: NAVY })],
          })],
        }),
        new TableCell({
          width: { size: 1200, type: WidthType.DXA },
          shading: { fill: bg, type: ShadingType.CLEAR },
          margins: { top: 100, bottom: 100, left: 100, right: 100 },
          verticalAlign: VerticalAlign.CENTER,
          borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
          },
          children: [new Paragraph({
            children: [new TextRun({ text: slide.verdict, bold: true, font: "Arial", size: 18, color: tc })],
            alignment: AlignmentType.CENTER,
          })],
        }),
        new TableCell({
          width: { size: 5760, type: WidthType.DXA },
          shading: { fill: WHITE, type: ShadingType.CLEAR },
          margins: { top: 100, bottom: 100, left: 140, right: 120 },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
          },
          children: [new Paragraph({
            children: [new TextRun({ text: slide.analysis, font: "Arial", size: 18, color: DARK_GRAY })],
          })],
        }),
      ],
    });
  });

  const headerRow = new TableRow({
    tableHeader: true,
    children: [
      hdrCell("#",        NAVY, 600),
      hdrCell("Slide",    NAVY, 1800),
      hdrCell("Verdict",  NAVY, 1200),
      hdrCell("Analysis", NAVY, 5760),
    ],
  });

  return [
    sectionHeading("Slide-by-Slide Analysis"),
    spacer(4),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [600, 1800, 1200, 5760],
      rows: [headerRow, ...rows],
    }),
  ];
}

// ── Missing Elements ───────────────────────────────────────────
function missingSection() {
  const sevColor = { P1: RED_TEXT, P2: AMBER_TEXT, P3: BLUE_TEXT };
  const sevBg    = { P1: RED_BG,   P2: AMBER_BG,   P3: BLUE_BG  };

  const rows = REPORT_DATA.missingElements.map(el => {
    const bg = sevBg[el.severity] || LIGHT_GRAY;
    const tc = sevColor[el.severity] || DARK_GRAY;
    return new TableRow({
      children: [
        bCell(el.severity, bg, tc, 800, true),
        lCell(el.element, LIGHT_GRAY, NAVY, 2800),
        lCell(el.impact,  WHITE, DARK_GRAY, 5760),
      ],
    });
  });

  const headerRow = new TableRow({
    tableHeader: true,
    children: [
      hdrCell("Priority", NAVY, 800),
      hdrCell("Missing Element", NAVY, 2800),
      hdrCell("Investor Impact", NAVY, 5760),
    ],
  });

  return [
    sectionHeading("Missing Elements"),
    spacer(4),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [800, 2800, 5760],
      rows: [headerRow, ...rows],
    }),
  ];
}

// ── Red Flags ──────────────────────────────────────────────────
function redFlagsSection() {
  const blocks = REPORT_DATA.redFlags.flatMap(rf => [
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [9360],
      rows: [new TableRow({
        children: [new TableCell({
          width: { size: 9360, type: WidthType.DXA },
          shading: { fill: RED_BG, type: ShadingType.CLEAR },
          margins: { top: 140, bottom: 140, left: 200, right: 200 },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 4, color: RED_TEXT },
            bottom: { style: BorderStyle.SINGLE, size: 4, color: RED_TEXT },
            left: { style: BorderStyle.SINGLE, size: 12, color: RED_TEXT },
            right: { style: BorderStyle.NONE, size: 0, color: WHITE },
          },
          children: [
            new Paragraph({
              children: [new TextRun({ text: "\u26A0  " + rf.title, bold: true, font: "Arial", size: 20, color: RED_TEXT })],
              spacing: { after: 80 },
            }),
            new Paragraph({
              children: [new TextRun({ text: rf.body, font: "Arial", size: 19, color: DARK_GRAY })],
              spacing: { after: 0 },
            }),
          ],
        })],
      })],
    }),
    spacer(6),
  ]);

  return [sectionHeading("Red Flags"), spacer(4), ...blocks];
}

// ── Competitor Grid ────────────────────────────────────────────
function competitorGridSection() {
  const { companyName, competitors, differentiators } = REPORT_DATA.competitorGrid;
  const colWidths = [2700, 1332, 1332, 1332, 1332, 1332];

  const headerRow = new TableRow({
    tableHeader: true,
    children: [
      hdrCell("Differentiator", NAVY, 2700),
      hdrCell(companyName, TEAL, 1332),
      ...competitors.map(c => hdrCell(c, NAVY, 1332)),
    ],
  });

  const dataRows = differentiators.map(d => {
    const compScore = d.company ? "\u2713" : "\u2717";
    const compBg    = d.company ? GREEN_BG : RED_BG;
    const compTc    = d.company ? GREEN_TEXT : RED_TEXT;

    const scoreCells = d.scores.map((score, i) => {
      const note = d.notes && d.notes[i];
      const label = note || (score ? "\u2713" : "\u2717");
      const bg = note ? AMBER_BG : (score ? GREEN_BG : RED_BG);
      const tc = note ? AMBER_TEXT : (score ? GREEN_TEXT : RED_TEXT);
      return bCell(label, bg, tc, 1332, false);
    });

    return new TableRow({
      children: [
        lCell(d.label, LIGHT_GRAY, DARK_GRAY, 2700),
        bCell(compScore, compBg, compTc, 1332, true),
        ...scoreCells,
      ],
    });
  });

  return [
    sectionHeading("Competitive Landscape"),
    spacer(4),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: colWidths,
      rows: [headerRow, ...dataRows],
    }),
    spacer(8),
    subHeading("Moat Articulation"),
    ...REPORT_DATA.moatLayers.flatMap(ml => [
      new Paragraph({
        children: [new TextRun({ text: ml.layer, bold: true, font: "Arial", size: 20, color: TEAL })],
        spacing: { before: 160, after: 60 },
      }),
      bodyPara(ml.description),
    ]),
  ];
}

// ── Storyline Arc ──────────────────────────────────────────────
function storylineSection() {
  const colWidths = [600, 3000, 5760];
  const headerRow = new TableRow({
    tableHeader: true,
    children: [
      hdrCell("#", NAVY, 600),
      hdrCell("Slide Title", NAVY, 3000),
      hdrCell("Investor Question to Answer", NAVY, 5760),
    ],
  });

  const rows = REPORT_DATA.storylineArc.map((s, i) => {
    const rowBg = i % 2 === 0 ? WHITE : LIGHT_GRAY;
    return new TableRow({
      children: [
        bCell(String(s.slide), NAVY, WHITE, 600, true),
        lCell(s.title, rowBg, NAVY, 3000),
        lCell(s.purpose, rowBg, DARK_GRAY, 5760),
      ],
    });
  });

  return [
    sectionHeading("Recommended 15-Slide Storyline Arc"),
    spacer(4),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: colWidths,
      rows: [headerRow, ...rows],
    }),
  ];
}

// ── Customer Discovery ─────────────────────────────────────────
function customerDiscoverySection() {
  const { intro, sections } = REPORT_DATA.customerDiscovery;
  return [
    sectionHeading("Customer Discovery Assessment"),
    bodyPara(intro),
    ...sections.flatMap(s => [
      subHeading(s.heading),
      bodyPara(s.body),
    ]),
  ];
}

// ── Priority Map ───────────────────────────────────────────────
function priorityMapSection() {
  const tiers = ["P1", "P2", "P3"];
  const tierLabels = { P1: "P1 \u2014 Critical (Fix Now)", P2: "P2 \u2014 Significant (Fix Before Next Meeting)", P3: "P3 \u2014 Polish (Fix Before Demo Day)" };
  const tierBg     = { P1: RED_BG,  P2: AMBER_BG, P3: BLUE_BG };
  const tierTc     = { P1: RED_TEXT, P2: AMBER_TEXT, P3: BLUE_TEXT };

  const colWidths = [600, 4160, 2300, 2300];
  const blocks = tiers.flatMap(tier => {
    const items = REPORT_DATA.priorityMap.filter(p => p.tier === tier);
    if (!items.length) return [];

    const headerRow = new TableRow({
      tableHeader: true,
      children: [
        hdrCell("#",      tierTc[tier] === RED_TEXT ? "991B1B" : (tierTc[tier] === AMBER_TEXT ? "92400E" : "1E40AF"), 600),
        hdrCell("Action", tierTc[tier] === RED_TEXT ? "991B1B" : (tierTc[tier] === AMBER_TEXT ? "92400E" : "1E40AF"), 4160),
        hdrCell("Effort", tierTc[tier] === RED_TEXT ? "991B1B" : (tierTc[tier] === AMBER_TEXT ? "92400E" : "1E40AF"), 2300),
        hdrCell("Impact", tierTc[tier] === RED_TEXT ? "991B1B" : (tierTc[tier] === AMBER_TEXT ? "92400E" : "1E40AF"), 2300),
      ],
    });

    const dataRows = items.map(p => new TableRow({
      children: [
        bCell(String(p.rank), tierBg[tier], tierTc[tier], 600, true),
        lCell(p.action, WHITE, DARK_GRAY, 4160),
        lCell(p.effort, LIGHT_GRAY, DARK_GRAY, 2300),
        lCell(p.impact, WHITE, DARK_GRAY, 2300),
      ],
    }));

    return [
      subHeading(tierLabels[tier], tier === "P1" ? RED_TEXT : (tier === "P2" ? AMBER_TEXT : BLUE_TEXT)),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: colWidths,
        rows: [headerRow, ...dataRows],
      }),
      spacer(6),
    ];
  });

  return [sectionHeading("Strategic Priority Map"), spacer(4), ...blocks];
}

// ── Disclaimer ─────────────────────────────────────────────────
function disclaimerSection() {
  const dSecHeading = (text) =>
    new Paragraph({
      children: [new TextRun({ text, bold: true, font: "Arial", size: 22, color: TEAL })],
      spacing: { before: 280, after: 100 },
    });

  const dBody = (text) =>
    new Paragraph({
      children: [new TextRun({ text, font: "Arial", size: 19, color: DARK_GRAY })],
      spacing: { before: 0, after: 140 },
      alignment: AlignmentType.JUSTIFIED,
    });

  const dBullet = (text) =>
    new Paragraph({
      children: [new TextRun({ text: "\u2022  " + text, font: "Arial", size: 19, color: DARK_GRAY })],
      indent: { left: 480 },
      spacing: { before: 0, after: 80 },
    });

  const dCallout = (text) =>
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [9360],
      rows: [new TableRow({
        children: [new TableCell({
          width: { size: 9360, type: WidthType.DXA },
          shading: { fill: "EBF4F5", type: ShadingType.CLEAR },
          margins: { top: 160, bottom: 160, left: 200, right: 200 },
          borders: {
            top:    { style: BorderStyle.SINGLE, size: 4, color: TEAL },
            bottom: { style: BorderStyle.SINGLE, size: 4, color: TEAL },
            left:   { style: BorderStyle.SINGLE, size: 12, color: TEAL },
            right:  { style: BorderStyle.NONE,   size: 0,  color: WHITE },
          },
          children: [new Paragraph({
            children: [new TextRun({ text, font: "Arial", size: 19, color: NAVY, italics: true })],
            spacing: { before: 0, after: 0 },
          })],
        })],
      })],
    });

  return [
    // Page break before disclaimer
    new Paragraph({ children: [new TextRun({ break: 1 })], pageBreakBefore: true }),
    spacer(10),
    // Title block
    new Paragraph({
      children: [
        new TextRun({ text: "VentureReady", bold: true, font: "Arial", size: 40, color: NAVY }),
        new TextRun({ text: ".ai", bold: true, font: "Arial", size: 40, color: TEAL }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
    }),
    new Paragraph({
      children: [new TextRun({ text: "Investor Readiness Reports", font: "Arial", size: 22, color: MID_GRAY })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 280 },
    }),
    divider(ORANGE),
    spacer(4),
    new Paragraph({
      children: [new TextRun({ text: "DISCLAIMER & TERMS OF USE", bold: true, font: "Arial", size: 32, color: NAVY })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
    }),
    new Paragraph({
      children: [new TextRun({ text: "Please read carefully before using this report", font: "Arial", size: 19, color: MID_GRAY })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 0 },
    }),
    spacer(8),
    divider(NAVY),
    spacer(6),

    // 1. Educational purpose
    dSecHeading("1. Educational & Informational Purpose Only"),
    dBody(
      "The evaluation report prepared by VentureReady.ai (\u201cReport\u201d) is provided solely for educational " +
      "and informational purposes. The analysis, observations, commentary, and recommendations contained " +
      "herein are intended to help early-stage founders identify potential strengths and weaknesses in " +
      "their pitch decks and business plans in preparation for investor conversations."
    ),
    dCallout(
      "This Report does not constitute \u2014 and should not be relied upon as \u2014 financial, legal, investment, " +
      "securities, accounting, or any other form of professional advice."
    ),
    spacer(6),

    // 2. No advisory relationship
    dSecHeading("2. No Professional Advisory Relationship"),
    dBody(
      "VentureReady.ai is not a registered investment advisor, broker-dealer, financial planner, attorney, " +
      "or licensed professional of any kind. The delivery of this Report does not create, and should not " +
      "be interpreted as creating, a professional advisory relationship of any kind between VentureReady.ai " +
      "and the recipient."
    ),
    dBody(
      "Recipients are strongly encouraged to consult qualified professionals \u2014 including but not limited to " +
      "licensed attorneys, certified financial advisors, CPAs, and experienced venture capital advisors \u2014 " +
      "before making any decisions related to fundraising, securities offerings, or business strategy."
    ),

    // 3. No guarantee of outcomes
    dSecHeading("3. No Guarantee of Outcomes"),
    dBody(
      "Nothing in this Report constitutes a representation, warranty, or guarantee regarding funding outcomes, " +
      "investor interest, business performance, or the commercial viability of any product, service, or " +
      "business model described in the submitted materials. Results may vary materially based on:"
    ),
    dBullet("Market conditions and investor sentiment at the time of fundraising"),
    dBullet("The completeness and accuracy of materials submitted for evaluation"),
    dBullet("Individual investor preferences, thesis, and due diligence processes"),
    dBullet("Regulatory, competitive, or macroeconomic factors outside the scope of this analysis"),
    dBullet("Actions taken or not taken by the founder following receipt of this Report"),
    spacer(4),

    // 4. AI-assisted analysis
    dSecHeading("4. AI-Assisted Analysis"),
    dBody(
      "Evaluations produced by VentureReady.ai are generated with the assistance of artificial intelligence " +
      "tools and reviewed against established pitch deck frameworks. While care is taken to ensure quality " +
      "and accuracy, AI-assisted analysis may contain errors, omissions, or assessments that do not reflect " +
      "the specific preferences of any particular investor or investment firm."
    ),
    dBody(
      "This Report reflects a structured, framework-based review of the submitted materials as presented. " +
      "VentureReady.ai makes no representation that the analysis reflects current market conditions, " +
      "industry-specific investor expectations, or the views of any individual investor or fund."
    ),

    // 5. Confidentiality
    dSecHeading("5. Confidentiality & Intended Use"),
    dBody(
      "This Report is prepared for the exclusive use of the individual or entity that commissioned it. " +
      "Recipient agrees not to share, distribute, reproduce, or publish the contents of this Report " +
      "without the prior written consent of VentureReady.ai. The Report may not be represented as an " +
      "endorsement, certification, or validation of any business, product, or investment opportunity."
    ),

    // 6. Reliance on submitted materials
    dSecHeading("6. Reliance on Submitted Materials"),
    dBody(
      "The analysis contained in this Report is based entirely on the materials provided by the recipient " +
      "at the time of submission. VentureReady.ai has not independently verified the accuracy, completeness, " +
      "or legality of any claims, projections, or statements contained in the submitted documents. The " +
      "quality and depth of the evaluation is directly dependent on the quality of the materials submitted."
    ),

    // 7. Limitation of liability
    dSecHeading("7. Limitation of Liability"),
    dBody(
      "To the maximum extent permitted by applicable law, VentureReady.ai, its principals, contractors, " +
      "and affiliates shall not be liable for any direct, indirect, incidental, consequential, or special " +
      "damages arising from the use of or reliance on this Report, including but not limited to lost profits, " +
      "lost investment opportunities, or business interruption."
    ),
    dCallout(
      "By accepting and using this Report, the recipient acknowledges that they have read, understood, and " +
      "agreed to the terms set forth in this Disclaimer."
    ),
    spacer(8),

    // Closing
    divider(ORANGE),
    spacer(4),
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
        text: "\u00A9 " + new Date().getFullYear() + " VentureReady.ai. All rights reserved.",
        font: "Arial", size: 16, color: MID_GRAY,
      })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 0 },
    }),
  ];
}

// ── Assemble Document ──────────────────────────────────────────
const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
    ],
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 20 } } },
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1080, right: 1260, bottom: 1080, left: 1260 },
      },
    },
    headers: { default: pageHeader },
    footers: { default: pageFooter },
    children: [
      ...coverPage(),
      ...shortListSection(),
      ...execSummarySection(),
      ...slideAnalysisSection(),
      ...missingSection(),
      ...redFlagsSection(),
      ...competitorGridSection(),
      ...storylineSection(),
      ...customerDiscoverySection(),
      ...priorityMapSection(),
      ...disclaimerSection(),
    ],
  }],
});

const filename = "/home/claude/VentureReady_ai_ClawCon_Evaluation.docx";
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(filename, buffer);
  console.log("SUCCESS: " + filename);
});
