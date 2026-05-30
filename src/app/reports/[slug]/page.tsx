import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

// Mock database for the redesign
const reportsDB = {
  "nestle-india": {
    title: "Nestle India",
    subtitle: "Capitalizing on Rural Resurgence and Premiumization",
    date: "September 2024",
    target: "INR 2,836",
    recommendation: "BUY",
    pdfPath: "/pdfs/nestle-research-report.pdf",
    executiveSummary: [
      "We initiate coverage on Nestle India with a BUY rating and a Target Price of INR 2,836, implying an upside potential.",
      "The thesis centers on a dual-engine growth strategy: a pronounced resurgence in rural FMCG demand coupled with an ongoing premiumization trend in urban centers.",
      "We project a robust revenue CAGR driven by both volume expansion in tier-2/3 cities and margin accretion from higher-value product categories."
    ]
  },
  "waaree-energies": {
    title: "Waaree Energies",
    subtitle: "Riding the Solar Wave with Robust Capacity Expansion",
    date: "October 2024",
    target: "INR 4,374",
    recommendation: "BUY",
    pdfPath: "/pdfs/waaree-energies-research-report.pdf",
    executiveSummary: [
      "We assign a BUY rating to Waaree Energies with a Target Price of INR 4,374.",
      "As India accelerates its renewable energy transition, Waaree is uniquely positioned as the largest module manufacturer.",
      "Our valuation is underpinned by their aggressive capacity expansion plans and the high visibility of their order book, ensuring sustained revenue growth and margin expansion."
    ]
  },
  "semaglutide-patent-cliff": {
    title: "Semaglutide & The Patent Cliff",
    subtitle: "Navigating the Future of GLP-1 and Weight Loss Drugs",
    date: "2024",
    target: "Industry",
    recommendation: "ANALYSIS",
    pdfPath: "/pdfs/semaglutide-patent-cliff-report.pdf",
    executiveSummary: [
      "An in-depth analysis of the GLP-1 receptor agonist market, focusing on the impending patent cliff for Semaglutide.",
      "We explore the competitive landscape, pipeline developments from major pharmaceutical players, and the long-term pricing implications as generics enter the market.",
      "This report provides a framework for understanding the future margin compression and volume expansion dynamics in the obesity and diabetes treatment sectors."
    ]
  }
};

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const report = reportsDB[resolvedParams.slug as keyof typeof reportsDB];

  if (!report) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Top minimal navigation */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto pt-12 pb-8">
        <Link href="/" className="inline-flex items-center gap-3 text-sm font-sans text-text-muted hover:text-foreground transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Research</span>
        </Link>
      </div>

      <article className="px-6 md:px-12 max-w-7xl mx-auto pb-32 animate-fade-in">
        {/* Editorial Header */}
        <header className="border-b border-[var(--color-border)] pb-12 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-widest text-text-muted mb-6 block">
                {report.date} &mdash; Equity Research
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">
                {report.title}
              </h1>
              <p className="font-serif text-xl md:text-2xl text-text-muted font-light italic">
                {report.subtitle}
              </p>
            </div>

            <div className="flex gap-8 md:text-right pt-4 md:pt-0 border-t md:border-none border-[var(--color-border)] w-full md:w-auto">
              <div className="flex flex-col">
                <span className="font-sans text-xs uppercase tracking-widest text-text-muted mb-1">Target</span>
                <span className="font-sans text-lg text-foreground">{report.target}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xs uppercase tracking-widest text-text-muted mb-1">Rec</span>
                <span className="font-sans text-lg text-foreground font-medium">{report.recommendation}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-3">
            <h2 className="font-sans text-xs uppercase tracking-widest text-text-muted">Executive Summary</h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6">
            {report.executiveSummary.map((paragraph, idx) => (
              <p key={idx} className="font-sans text-lg text-foreground font-light leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* PDF Document Viewer Section */}
        <section className="border-t border-[var(--color-border)] pt-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl text-foreground">Full Report</h2>
            <a 
              href={report.pdfPath} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-sans tracking-wide uppercase text-foreground hover:text-text-muted transition-colors duration-300"
            >
              <span>Download PDF</span>
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
            </a>
          </div>

          {/* Clean, minimalist PDF embed wrapper */}
          <div className="w-full h-[80vh] border border-[var(--color-border)] bg-surface flex items-center justify-center p-2 shadow-sm relative group overflow-hidden">
             <iframe 
               src={`${report.pdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
               className="w-full h-full object-contain"
               title={`${report.title} Research Report`}
             />
             {/* A subtle overlay that fades out on hover to encourage interaction, ensuring the clean aesthetic remains when not focused */}
             <div className="absolute inset-0 bg-transparent pointer-events-none border border-transparent group-hover:border-border-strong transition-colors duration-500"></div>
          </div>
        </section>
      </article>
    </div>
  );
}
