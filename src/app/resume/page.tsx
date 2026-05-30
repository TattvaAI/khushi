"use client";

import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Non-printable Top Bar */}
      <div className="px-6 md:px-12 max-w-4xl mx-auto pt-12 pb-8 flex justify-between items-center print:hidden animate-fade-in">
        <Link href="/about" className="inline-flex items-center gap-3 text-sm font-sans text-text-muted hover:text-foreground transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to About</span>
        </Link>
        <button 
          onClick={() => typeof window !== 'undefined' && window.print()}
          className="inline-flex items-center gap-3 text-sm font-sans text-foreground hover:text-text-muted transition-colors duration-300"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Printable Resume Container */}
      <article className="px-6 md:px-12 max-w-4xl mx-auto pb-32 pt-8 print:p-0 print:max-w-none print:w-full animate-slide-up">
        
        {/* Header */}
        <header className="border-b-2 border-foreground pb-6 mb-8 text-center print:border-b">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground uppercase tracking-widest mb-4">
            Khushi Bansal
          </h1>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-sm text-foreground">
            <span>New Delhi, India</span>
            <span>+91 87000 12023</span>
            <span>khushi.bansal@example.com</span>
            <a href="https://linkedin.com/in/khushi-bansal" className="underline underline-offset-4">linkedin.com/in/khushi-bansal</a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="font-sans text-sm uppercase tracking-widest text-foreground font-semibold border-b border-border-strong pb-2 mb-4">
            Objective
          </h2>
          <p className="font-serif text-base md:text-lg text-foreground font-light leading-relaxed">
            Equity Research Analyst offering a rigorous fundamental approach to corporate valuation, financial modeling, and sector-specific thesis generation. Proven ability to construct complex 3-statement models, synthesize quantitative market data, and deliver high-conviction, institutional-grade investment insights.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="font-sans text-sm uppercase tracking-widest text-foreground font-semibold border-b border-border-strong pb-2 mb-6">
            Professional Experience
          </h2>
          
          {/* Walford Capitals - Equity Research */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-2">
              <h3 className="font-serif text-xl text-foreground font-medium">Walford Capitals</h3>
              <span className="font-sans text-sm text-text-muted italic">August 2024 &ndash; Present</span>
            </div>
            <div className="flex justify-between items-baseline mb-3">
              <span className="font-sans text-base text-foreground italic">Equity Research Analyst</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2 font-serif text-base text-foreground font-light">
              <li>Published high-conviction initiation coverage on mid-to-large cap Indian equities (Nestle India, Waaree Energies) and thematic industry reports (Semaglutide Patent Cliff).</li>
              <li>Constructed comprehensive 3-statement operating models, DCFs, and Sum-of-the-Parts (SOTP) valuations to derive non-consensus price targets and identify asymmetric risk/reward profiles.</li>
              <li>Conducted rigorous fundamental analysis across FMCG, renewable energy, and pharmaceutical sectors; synthesized competitive dynamics, unit economics, and margin drivers to inform institutional investment strategies.</li>
              <li>Engineered robust financial data templates in Excel, integrating historical financials, management guidance, and macro-economic assumptions to standardize peer comparison frameworks.</li>
            </ul>
          </div>

          {/* Walford Capitals - General Manager */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-3">
              <span className="font-sans text-base text-foreground italic">General Manager</span>
              <span className="font-sans text-sm text-text-muted italic">October 2024 &ndash; June 2025</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2 font-serif text-base text-foreground font-light">
              <li>Spearheaded human capital allocation by structuring the recruitment pipeline and onboarding architecture for a 20+ member cross-functional team.</li>
              <li>Developed institutional-grade investor materials, including executive summaries and pitch decks, successfully deployed to 40+ high-net-worth potential investors.</li>
            </ul>
          </div>

          {/* Agile Capital Services */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-2">
              <h3 className="font-serif text-xl text-foreground font-medium">Agile Capital Services</h3>
              <span className="font-sans text-sm text-text-muted italic">June 2025 &ndash; July 2025</span>
            </div>
            <div className="flex justify-between items-baseline mb-3">
              <span className="font-sans text-base text-foreground italic">Marketing and Finance Intern</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2 font-serif text-base text-foreground font-light">
              <li>Executed fundamental and ratio analysis on leading financial institutions (IFL and SBI Life Insurance) to assess asset quality, capital adequacy, and profitability metrics.</li>
              <li>Structured and analyzed a quantitative market research survey evaluating the correlation between financial literacy and retail investment behavior.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="font-sans text-sm uppercase tracking-widest text-foreground font-semibold border-b border-border-strong pb-2 mb-6">
            Education
          </h2>
          <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-2">
            <h3 className="font-serif text-xl text-foreground font-medium">Bharati Vidyapeeth (BVIMR), New Delhi</h3>
            <span className="font-sans text-sm text-text-muted italic">2023 &ndash; Present</span>
          </div>
          <p className="font-serif text-base text-foreground font-light mb-4">
            Bachelor of Business Administration (BBA) &ndash; CGPA: 8.01
          </p>
          <div className="font-serif text-base text-foreground font-light">
            <span className="font-medium mr-2">Relevant Coursework:</span>
            Financial Modeling, Investment Banking, Financial Markets, Technical Analysis, Corporate Finance, Behavioral Finance, Python &amp; Statistics for Financial Analysis.
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="font-sans text-sm uppercase tracking-widest text-foreground font-semibold border-b border-border-strong pb-2 mb-6">
            Technical &amp; Analytical Skills
          </h2>
          <ul className="space-y-3 font-serif text-base text-foreground font-light">
            <li><span className="font-medium mr-2">Financial Modeling:</span> DCF, Comparable Company Analysis (CCA), 3-Statement Modeling, SOTP Valuation.</li>
            <li><span className="font-medium mr-2">Analytical Skills:</span> Equity Valuation, Sector/Industry Research, Competitive Analysis, Financial Statement Analysis.</li>
            <li><span className="font-medium mr-2">Tools &amp; Technical:</span> Advanced Excel, Python (pandas, NumPy), Data Interpretation, Google Workspace.</li>
          </ul>
        </section>

      </article>

      {/* Global Print Styles specific to this page */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          header, footer {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
}
