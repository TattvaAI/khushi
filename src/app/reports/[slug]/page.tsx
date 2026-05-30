import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

// Native Nestle Report Component with elevated copy
function NestleNativeReport() {
  return (
    <div className="w-full text-foreground animate-fade-in pb-12">
      <div className="flex justify-between items-center mb-8 border-b border-[var(--color-border)] pb-4 print:hidden">
        <h2 className="font-serif text-2xl text-foreground">Detailed Analysis</h2>
        <a 
          href="/pdfs/nestle-research-report.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 text-sm font-sans tracking-wide uppercase text-foreground hover:text-text-muted transition-colors duration-300"
        >
          <span>Download Original PDF</span>
          <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
        </a>
      </div>

      <div className="font-serif font-light text-lg space-y-12">
        <section>
          <h3 className="font-sans text-sm uppercase tracking-widest font-semibold border-b border-border-strong pb-2 mb-6">Investment Thesis</h3>
          <p className="mb-4">
            We initiate coverage on Nestle India with a <strong>BUY</strong> rating and a 12-month target price of <strong>INR 2,836</strong> (vs. CMP INR 2,376), implying an upside potential of ~19%. Our conviction is anchored in a dual-engine growth strategy: a pronounced resurgence in rural FMCG consumption coupled with sustained premiumization across urban centers. 
          </p>
          <p>
            Despite near-term margin compression risks from raw material volatility, Nestle's pricing power and dominant market share in the <em>Prepared Dishes and Cooking Aids</em> segment (driving 38% of revenue) position it favorably against domestic peers.
          </p>
        </section>

        <section>
          <h3 className="font-sans text-sm uppercase tracking-widest font-semibold border-b border-border-strong pb-2 mb-6">Valuation &amp; Comparable Company Analysis (CCA)</h3>
          <p className="mb-6">
            Our valuation framework relies on a multiple-based approach, benchmarking Nestle against key domestic FMCG peers (Britannia, Bikaji Foods, Zydus Wellness, Mrs. Bectors). 
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left font-sans text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-foreground">
                  <th className="py-3 px-2">Company</th>
                  <th className="py-3 px-2">TEV/Revenue</th>
                  <th className="py-3 px-2">TEV/EBITDA</th>
                  <th className="py-3 px-2">P/E Ratio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                <tr className="bg-[var(--color-surface)] font-medium">
                  <td className="py-3 px-2">Nestle India</td>
                  <td className="py-3 px-2">11.5x</td>
                  <td className="py-3 px-2">49.0x</td>
                  <td className="py-3 px-2">71.2x</td>
                </tr>
                <tr>
                  <td className="py-3 px-2">Britannia Inds.</td>
                  <td className="py-3 px-2">7.6x</td>
                  <td className="py-3 px-2">42.0x</td>
                  <td className="py-3 px-2">61.5x</td>
                </tr>
                <tr>
                  <td className="py-3 px-2">Bikaji Foods</td>
                  <td className="py-3 px-2">7.3x</td>
                  <td className="py-3 px-2">56.9x</td>
                  <td className="py-3 px-2">92.9x</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>
            While Nestle trades at a premium to the peer median (TEV/EBITDA of 49.0x vs Median 42.0x), we believe this multiple is justified by its superior Return on Equity (ROE of 108.9% in FY25) and unmatched brand equity. However, the implied valuation suggests the stock is currently priced for perfection, necessitating flawless execution of its capacity expansion pipeline.
          </p>
        </section>

        <section>
          <h3 className="font-sans text-sm uppercase tracking-widest font-semibold border-b border-border-strong pb-2 mb-6">Key Risks &amp; Challenges</h3>
          <ul className="list-disc list-outside ml-6 space-y-4">
            <li><strong>Execution Risk in Premiumization Strategy:</strong> The planned rollout of the super-premium Nespresso brand introduces significant execution risks. Sub-optimal distribution strategies or marketing inefficiencies could lead to elevated Customer Acquisition Costs (CAC) and margin dilution, exacerbating current operational cost pressures.</li>
            <li><strong>Deteriorating Working Capital Metrics:</strong> We note a concerning deceleration in the cash conversion cycle. Inventory turnover has declined by 16%, and Trade Receivables Turnover by 23%. This has pushed the company into a negative working capital position, necessitating short-term debt financing and driving a 172% increase in the Debt-Equity ratio.</li>
            <li><strong>Raw Material Inflation:</strong> Persistent volatility in soft commodity prices (milk, coffee, wheat) threatens gross margin stability if the company is unable to fully pass on costs to the end consumer due to competitive pressures.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}


// Mock database
const reportsDB = {
  "nestle-india": {
    title: "Nestle India",
    subtitle: "Capitalizing on Rural Resurgence and Premiumization",
    date: "September 2024",
    target: "INR 2,836",
    recommendation: "BUY",
    pdfPath: "/pdfs/nestle-research-report.pdf",
    isNative: true,
  },
  "waaree-energies": {
    title: "Waaree Energies",
    subtitle: "Riding the Solar Wave with Robust Capacity Expansion",
    date: "October 2024",
    target: "INR 4,374",
    recommendation: "BUY",
    pdfPath: "/pdfs/waaree-energies-research-report.pdf",
    isNative: false,
  },
  "semaglutide-patent-cliff": {
    title: "Semaglutide & The Patent Cliff",
    subtitle: "Navigating the Future of GLP-1 and Weight Loss Drugs",
    date: "2024",
    target: "Industry",
    recommendation: "ANALYSIS",
    pdfPath: "/pdfs/semaglutide-patent-cliff-report.pdf",
    isNative: false,
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
      <div className="px-6 md:px-12 max-w-7xl mx-auto pt-12 pb-8 print:hidden">
        <Link href="/reports" className="inline-flex items-center gap-3 text-sm font-sans text-text-muted hover:text-foreground transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Research</span>
        </Link>
      </div>

      <article className="px-6 md:px-12 max-w-7xl mx-auto pb-32 animate-fade-in print:p-0 print:max-w-none print:w-full">
        {/* Editorial Header */}
        <header className="border-b-2 border-foreground pb-12 mb-12 print:pb-6 print:mb-8">
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

        {report.isNative ? (
          <NestleNativeReport />
        ) : (
          <section className="border-t border-[var(--color-border)] pt-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-2xl text-foreground">Original PDF Report</h2>
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

            <div className="w-full h-[80vh] border border-[var(--color-border)] bg-surface flex items-center justify-center p-2 shadow-sm relative group overflow-hidden">
               <iframe 
                 src={`${report.pdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
                 className="w-full h-full object-contain"
                 title={`${report.title} Research Report`}
               />
               <div className="absolute inset-0 bg-transparent pointer-events-none border border-transparent group-hover:border-border-strong transition-colors duration-500"></div>
            </div>
          </section>
        )}
      </article>

      {/* Global Print Styles specific to reports */}
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
