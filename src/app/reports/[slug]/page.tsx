import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import ReportControls from "@/components/ReportControls";
import { getReportBySlug } from "@/data/reports";

// ==========================================
// NATIVE REPORT COMPONENTS
// ==========================================

function NestleNativeReport() {
  return (
    <div className="font-serif font-light text-lg space-y-12">
      <section className="print:break-inside-avoid">
        <h3 className="font-sans text-sm uppercase tracking-widest font-semibold border-b border-border-strong pb-2 mb-6">Investment Thesis</h3>
        <p className="mb-4">
          We initiate coverage on Nestle India with a <strong>SELL</strong> rating and a 12-month target price of <strong>INR 1,587.5 to 1,987.5</strong>. Our conviction is anchored in a dual-engine growth strategy: a pronounced resurgence in rural FMCG consumption coupled with sustained premiumization across urban centers. 
        </p>
        <p>
          Despite near-term margin compression risks from raw material volatility, Nestle's pricing power and dominant market share in the <em>Prepared Dishes and Cooking Aids</em> segment (driving 38% of revenue) position it favorably against domestic peers.
        </p>
      </section>

      <section className="print:break-inside-avoid">
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

      <section className="print:break-inside-avoid">
        <h3 className="font-sans text-sm uppercase tracking-widest font-semibold border-b border-border-strong pb-2 mb-6">Key Risks &amp; Challenges</h3>
        <ul className="list-disc list-outside ml-6 space-y-4">
          <li><strong>Execution Risk in Premiumization Strategy:</strong> The planned rollout of the super-premium Nespresso brand introduces significant execution risks. Sub-optimal distribution strategies or marketing inefficiencies could lead to elevated Customer Acquisition Costs (CAC) and margin dilution, exacerbating current operational cost pressures.</li>
          <li><strong>Deteriorating Working Capital Metrics:</strong> We note a concerning deceleration in the cash conversion cycle. Inventory turnover has declined by 16%, and Trade Receivables Turnover by 23%. This has pushed the company into a negative working capital position, necessitating short-term debt financing and driving a 172% increase in the Debt-Equity ratio.</li>
          <li><strong>Raw Material Inflation:</strong> Persistent volatility in soft commodity prices (milk, coffee, wheat) threatens gross margin stability if the company is unable to fully pass on costs to the end consumer due to competitive pressures.</li>
        </ul>
      </section>
    </div>
  );
}

function WaareeNativeReport() {
  return (
    <div className="font-serif font-light text-lg space-y-12">
      <section className="print:break-inside-avoid">
        <h3 className="font-sans text-sm uppercase tracking-widest font-semibold border-b border-border-strong pb-2 mb-6">Investment Thesis</h3>
        <p className="mb-4">
          We assign a <strong>HOLD</strong> rating to Waaree Energies with a Target Price range of <strong>INR 2,656.43 &ndash; 3,288.32</strong>. Waaree is structurally positioned as India's premier solar PV module manufacturer, currently operating at a massive 13.3 GW installed capacity with an integrated 5.4 GW solar cell facility. 
        </p>
        <p>
          The company acts as the apex beneficiary of India's aggressive renewable energy targets (500 GW non-fossil capacity by 2030). Waaree has demonstrated staggering fundamental momentum, compounding net profit at a 108% CAGR over the last 5 years, underscored by strong operating margins (~74%) and substantial export dominance (44% market share of India's export market).
        </p>
      </section>

      <section className="print:break-inside-avoid">
        <h3 className="font-sans text-sm uppercase tracking-widest font-semibold border-b border-border-strong pb-2 mb-6">Valuation &amp; Comparable Company Analysis (CCA)</h3>
        <p className="mb-6">
          Waaree's robust fundamentals are benchmarked against domestic clean-energy peers. The explosive revenue growth justifies premium valuation multiples relative to the sector.
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
                <td className="py-3 px-2">Waaree Energies</td>
                <td className="py-3 px-2">6.5x</td>
                <td className="py-3 px-2">34.7x</td>
                <td className="py-3 px-2">47.0x</td>
              </tr>
              <tr>
                <td className="py-3 px-2">Premier Energies</td>
                <td className="py-3 px-2">7.2x</td>
                <td className="py-3 px-2">26.4x</td>
                <td className="py-3 px-2">50.2x</td>
              </tr>
              <tr>
                <td className="py-3 px-2">Websol Energy</td>
                <td className="py-3 px-2">10.3x</td>
                <td className="py-3 px-2">23.4x</td>
                <td className="py-3 px-2">38.3x</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>
          Waaree's TEV/EBITDA multiple of 34.7x sits slightly above the peer median, accurately reflecting its dominant market share, 6 GW integrated expansion pipeline in Odisha, and aggressive 1.6 GW module footprint scale-up in the United States. The company generated an impressive 529% topline growth from FY20 to FY25, validating its premium valuation.
        </p>
      </section>

      <section className="print:break-inside-avoid">
        <h3 className="font-sans text-sm uppercase tracking-widest font-semibold border-b border-border-strong pb-2 mb-6">Key Risks &amp; Challenges</h3>
        <ul className="list-disc list-outside ml-6 space-y-4">
          <li><strong>Supply Chain Geopolitics (China-Centric):</strong> Waaree exhibits acute concentration risk in its raw material procurement. Nearly 88% of total material costs (polysilicon, wafers, cells) originate from China, Malaysia, and Thailand. This exposes margins directly to geopolitical tariffs, supply disruptions, and freight rate volatility.</li>
          <li><strong>Export Market Concentration:</strong> Export sales constitute over 57% of operational revenue, disproportionately levered to the United States market. Protectionist shifts in U.S. trade policies (e.g., AD/CVD tariffs on Southeast Asian components) pose a structural threat to export volumes.</li>
          <li><strong>Capital Intensity &amp; Zero Dividend Yield:</strong> Management is aggressively reinvesting all operating cash flow into CapEx. While this funds the immense growth trajectory, income-seeking investors will note the complete absence of a dividend yield despite immense profitability.</li>
        </ul>
      </section>
    </div>
  );
}

function SemaglutideNativeReport() {
  return (
    <div className="font-serif font-light text-lg space-y-12">
      <section className="print:break-inside-avoid">
        <h3 className="font-sans text-sm uppercase tracking-widest font-semibold border-b border-border-strong pb-2 mb-6">Executive Summary</h3>
        <p className="mb-4">
          India's semaglutide patent cliff, precipitated by the imminent expiry of Novo Nordisk's final device/formulation patents in March 2026, represents a generational structural inflection point for the domestic pharmaceutical sector. The transition from an innovator monopoly to fierce generic competition is expected to compress GLP-1 treatment costs by 60&ndash;70%.
        </p>
        <p>
          Given India's staggering epidemiological burden (90 million diabetics, 200+ million overweight/obese adults), this pricing compression will unlock vast latent demand. Investment banking consensus indicates the domestic weight-loss drug market could rapidly expand from its current ~$75M baseline to over $1 billion annually.
        </p>
      </section>

      <section className="print:break-inside-avoid">
        <h3 className="font-sans text-sm uppercase tracking-widest font-semibold border-b border-border-strong pb-2 mb-6">Strategic Positioning of Domestic Pharma</h3>
        <p className="mb-6">
          The domestic competitive landscape is sharply defined by three major players, each deploying highly differentiated strategies to capture volume ahead of the March 2026 cliff:
        </p>
        
        <ul className="list-none space-y-6">
          <li className="bg-[var(--color-surface)] p-6 border border-[var(--color-border)]">
            <h4 className="font-sans text-base uppercase tracking-widest font-semibold mb-2">Dr. Reddy's Laboratories</h4>
            <p className="text-base"><strong>Early Mover Advantage:</strong> Securing manufacturing approval early, Dr. Reddy's has already commenced export revenues to patent-free jurisdictions. They are adopting a legally aggressive posture, actively challenging Novo Nordisk's secondary patents as "evergreening" attempts under Section 3(d) of the Indian Patents Act.</p>
          </li>
          <li className="bg-[var(--color-surface)] p-6 border border-[var(--color-border)]">
            <h4 className="font-sans text-base uppercase tracking-widest font-semibold mb-2">Sun Pharmaceutical Industries</h4>
            <p className="text-base"><strong>Disciplined Distribution Scale:</strong> Sun Pharma is avoiding the litigation overhang entirely, respecting the March 2026 domestic restriction while scaling export operations. Their unparalleled tier-1 and tier-2 domestic distribution network provides a massive structural moat for a high-volume launch on day zero.</p>
          </li>
          <li className="bg-[var(--color-surface)] p-6 border border-[var(--color-border)]">
            <h4 className="font-sans text-base uppercase tracking-widest font-semibold mb-2">Zydus Lifesciences</h4>
            <p className="text-base"><strong>Hardware Differentiation:</strong> Rather than competing purely on molecule commoditization, Zydus is innovating on the delivery mechanism. Their development of a reusable multi-dose pen fundamentally alters the per-injection consumable cost, securing critical pricing power in India's highly cost-sensitive retail and clinical channels.</p>
          </li>
        </ul>
      </section>

      <section className="print:break-inside-avoid">
        <h3 className="font-sans text-sm uppercase tracking-widest font-semibold border-b border-border-strong pb-2 mb-6">Key Catalysts &amp; Risk Vectors</h3>
        <ul className="list-disc list-outside ml-6 space-y-4">
          <li><strong>Litigation &amp; Injunction Risk:</strong> Novo Nordisk is expected to fiercely defend its multi-billion-dollar franchise. Any last-minute High Court injunctions regarding delivery device IP could severely disrupt domestic launch timelines for generic manufacturers in Q1 2026.</li>
          <li><strong>Margin Compression via Price Wars:</strong> A simultaneous, multi-brand generic entry inherently triggers a race to the bottom. If pricing drops below the modeled Rs. 5,000/month threshold faster than anticipated, manufacturers may face rapid gross margin degradation.</li>
          <li><strong>Oral Formulations &amp; Pipeline Obsolescence:</strong> The impending arrival of pill-based semaglutide and Eli Lilly's dual-agonist tirzepatide (Mounjaro) threaten to render first-generation injectable generics structurally obsolete for certain patient cohorts in the medium term.</li>
        </ul>
      </section>
    </div>
  );
}


// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const report = getReportBySlug(resolvedParams.slug);

  if (!report) {
    notFound();
  }

  return (
    <div className="w-full bg-background print:bg-white print:min-h-0">
      
      {/* Top minimal navigation */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto pt-12 pb-8 print:hidden">
        <Link href="/reports" className="inline-flex items-center gap-3 text-sm font-sans text-text-muted hover:text-foreground transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Research</span>
        </Link>
      </div>

      <article className="px-6 md:px-12 max-w-4xl mx-auto pb-32 animate-fade-in print:p-0 print:max-w-none print:w-full print:text-black">
        
        {/* Editorial Header */}
        <header className="border-b-2 border-foreground pb-12 mb-12 print:pb-6 print:mb-8 print:border-black">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-widest text-text-muted print:text-black mb-6 block">
                {report.date} &mdash; {resolvedParams.slug === "semaglutide-patent-cliff" ? "Industry Note" : "Equity Research"}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-foreground print:text-black mb-6 leading-tight">
                {report.title}
              </h1>
              <p className="font-serif text-xl md:text-2xl text-text-muted print:text-black font-light italic">
                {report.subtitle}
              </p>
            </div>

            {resolvedParams.slug !== "semaglutide-patent-cliff" && (
              <div className="flex gap-8 md:text-right pt-4 md:pt-0 border-t md:border-none border-[var(--color-border)] w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="font-sans text-xs uppercase tracking-widest text-text-muted print:text-black mb-1">Target</span>
                  <span className="font-sans text-lg text-foreground print:text-black">{report.target}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs uppercase tracking-widest text-text-muted print:text-black mb-1">Rec</span>
                  <span className="font-sans text-lg text-foreground print:text-black font-medium">{report.recommendation}</span>
                </div>
              </div>
            )}
          </div>
        </header>

        {report.isNative && (
          <div className="w-full text-foreground print:text-black pb-12">
            <div className="flex justify-between items-center mb-8 border-b border-[var(--color-border)] pb-4 print:hidden">
              <h2 className="font-serif text-2xl text-foreground">Detailed Analysis</h2>
              <ReportControls pdfPath={report.pdfPath} />
            </div>

            {resolvedParams.slug === "nestle-india" && <NestleNativeReport />}
            {resolvedParams.slug === "waaree-energies" && <WaareeNativeReport />}
            {resolvedParams.slug === "semaglutide-patent-cliff" && <SemaglutideNativeReport />}

          </div>
        )}

        {!report.isNative && (
          <div className="w-full text-foreground print:text-black pb-12 border-t border-[var(--color-border)] pt-12 flex flex-col items-center justify-center text-center">
            <p className="font-sans text-base text-text-muted mb-8 font-light max-w-md">
              The full, comprehensive research report is available for viewing and download as an institutional-grade PDF document.
            </p>
            <a 
              href={report.pdfPath} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-sm font-sans tracking-wide uppercase text-background bg-foreground px-8 py-4 hover:opacity-90 transition-all duration-300"
            >
              <span>Download Full PDF Report</span>
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
            </a>
          </div>
        )}

      </article>

      {/* Global Print Styles specific to reports */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { size: auto; margin: 15mm; }
          body { 
            background-color: white !important; 
            color: black !important; 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
          }
          header:not(article header), footer { display: none !important; }
        }
      `}} />
    </div>
  );
}
