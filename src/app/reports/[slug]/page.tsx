"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  LineChart, 
  Sliders, 
  Calendar,
  AlertTriangle,
  TrendingUp,
  Info,
  CheckCircle,
  Clock,
  Briefcase
} from "lucide-react";

export default function ReportDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [activeTab, setActiveTab] = useState<"summary" | "analytics" | "pdf">("summary");
  
  // Interactive states for Nestle CCA slider
  const [nestleMultiple, setNestleMultiple] = useState(85);
  const nestleEPS = 27.9; // Simulated FY25 EPS based on CMP and P/E
  const nestleCurrentPrice = 2376.80;
  
  // Automatically select parameter slug mapping
  const reportData = {
    "nestle-india": {
      title: "Nestlé India Limited Equity Research",
      industry: "FMCG / Consumer Staples",
      recommendation: "REDUCE",
      recColor: "bg-rose-500/10 text-rose-500 border-rose-500/20",
      pdfUrl: "/pdfs/nestle-research-report.pdf",
      cmp: "₹2,376.80",
      targetPrice: "₹1,587.50 - 1,987.50",
      thesis: "Nestlé India is a market-leading FMCG compounder with durable competitive advantages: Maggi's dominance in instant noodles, strong brand equity across beverage and confectionery, and unparalleled retail distribution (3.5M+ outlets). However, the stock trades at 85x P/E—a 37% premium to peer median of 61.5x—offering limited margin of safety. Recent deterioration in operational efficiency (inventory turnover -16%, trade receivables -23%) and rising leverage (Debt-Equity 0.1x → 0.3x) signal working capital stress. While the company remains a quality compounder, valuation and operational headwinds warrant caution.",
      metricsTable: [
        { name: "Market Capitalization", value: "₹2,29,160 Cr" },
        { name: "Price-to-Earnings (P/E)", value: "85.2x (vs. Peer Median 61.5x)" },
        { name: "Return on Equity (ROE)", value: "108.9%" },
        { name: "Debt-to-Equity Ratio", value: "0.3x" },
        { name: "Current Ratio Score", value: "0.80 (Working capital stress flag)" },
        { name: "Operating Profit Margin", value: "21.47%" },
        { name: "Dividend Yield", value: "1.14%" }
      ],
      takeaways: [
        "Market Leadership: Strongest brand portfolio in organized FMCG; 45% revenue from iconic Maggi brand.",
        "Valuation Premium: Trading 37% above peer P/E median on quality, but offering limited margin of safety.",
        "Operational Deterioration: Working capital metrics deteriorating; current ratio fell to 0.80 (below 1.0 is red flag).",
        "Strong Cash Generation: Operating cash flow ₹46,719 Cr (23% of sales) demonstrates underlying business strength.",
        "Recommendation: REDUCE at ₹2,376.80 | Target ₹1,587.50 - 1,987.50 | Accumulate on weakness below ₹2,000."
      ]
    },
    "waaree-energies": {
      title: "Waaree Energies Limited Equity Research",
      industry: "Renewable Energy / Solar",
      recommendation: "HOLD",
      recColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      pdfUrl: "/pdfs/waaree-energies-research-report.pdf",
      cmp: "₹3,197.00",
      targetPrice: "₹2,656.43 - 3,288.32",
      thesis: "Waaree is India's largest solar module manufacturer with exceptional growth momentum: 529.79% revenue CAGR from FY20-FY25, 13.3 GW installed capacity, and 44% share of India's solar module export market. The company is well-positioned to benefit from India's ambitious 500 GW renewable target by 2030 and strong government support (PLI schemes, GST benefits). However, three critical risks demand attention: (1) Supply chain concentration—87.87% of material costs from China/Malaysia/Thailand; (2) Export dependency—57.14% revenue from USA; (3) No dividend policy despite consistent profitability. At current valuation (6.5x TEV/Revenue, 34.7x TEV/EBITDA), the stock is fairly valued relative to peers, offering limited upside without near-term catalysts.",
      metricsTable: [
        { name: "Revenue (FY2025)", value: "₹12,764.55 Cr" },
        { name: "Revenue Growth Year-on-Year", value: "19.10%" },
        { name: "Net Profit (FY2025)", value: "₹1,781.17 Cr" },
        { name: "Operating Profit Margin", value: "19.00%" },
        { name: "Installed Manufacturing Capacity", value: "13.3 GW" },
        { name: "India Export Market Share", value: "44.00%" },
        { name: "Current Market Cap", value: "₹94,531 Cr" },
        { name: "Price-to-Earnings (P/E)", value: "47.0x" }
      ],
      takeaways: [
        "Market Leadership: Largest solar module manufacturer in India with 13.3 GW capacity; 44% export market share.",
        "Explosive Growth: 529.79% revenue CAGR (FY20-FY25), 108.35% net profit CAGR demonstrates exceptional scaling.",
        "Favorable Tailwinds: India's 500 GW renewable target, government PLI schemes, and rising global demand for green energy.",
        "Supply Chain Risk: 87.87% of material costs from China/Thailand/Malaysia creates geopolitical and price volatility risk.",
        "Export Concentration: 57% revenue from USA creates tariff and trade policy risk.",
        "Recommendation: HOLD | Target ₹2,656.43 - 3,288.32 | Accumulate on weakness below ₹2,800."
      ]
    },
    "semaglutide-cliff": {
      title: "The Semaglutide Patent Cliff | Industry Note",
      industry: "Pharmaceuticals / GLP-1",
      recommendation: "EVENT-DRIVEN",
      recColor: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
      pdfUrl: "/pdfs/semaglutide-patent-cliff-report.pdf",
      cmp: "Industry Note",
      targetPrice: "Event-Driven | March 2026",
      thesis: "India's semaglutide patent cliff—driven by the expiry of Novo Nordisk's final device/formulation patents in March 2026—represents a rare confluence of large addressable market, timing clarity, and manufacturing readiness. The transition from innovator monopoly to generic competition is expected to compress treatment costs by 60-70% (from ₹17,000-25,000 to ₹5,000-8,000 per month), unlock a 3-5x expansion in the addressable patient base, and generate ₹1 billion+ in annual market opportunity. Dr. Reddy's, Sun Pharma, and Zydus are manufacturing-ready for immediate post-patent launches. This represents one of the most significant generic market openings in recent Indian pharma history.",
      metricsTable: [
        { name: "Patent Expiry Deadline", value: "March 2026" },
        { name: "Generic Cost Compression", value: "60% - 70% Reduction" },
        { name: "Simulated Monthly Cost", value: "₹5,000 - ₹8,000 (Generic) vs ₹25,000 (Innovator)" },
        { name: "GLP-1 Market Size Post-Entry", value: "USD $1 Billion Annually" },
        { name: "Target Patient Expansion", value: "3x to 5x Growth (to 15-25 Million)" },
        { name: "Active Indian Base Size", value: "90M+ Diabetes patients, 200M+ Overweight" },
        { name: "Core Launch Beneficiaries", value: "Dr. Reddy's, Sun Pharma, Zydus" }
      ],
      takeaways: [
        "Patent Architecture: Novo Nordisk used layered patents (molecule → formulation → device) to extend exclusivity until March 2026.",
        "Market Opening: Final patent expires March 2026; generic launches expected Q2 2026.",
        "Price Reduction: Expected 60-70% price cut will unlock middle-income patient segments.",
        "Market Expansion: 60-70% price reduction expected to expand GLP-1 patient base by 3-5x.",
        "Revenue Opportunity: Investment banks estimate India's GLP-1 market could reach ~USD 1 billion annually post-entry.",
        "Key Beneficiaries: Dr. Reddy's (early mover, manufacturing since Apr 2025), Sun Pharma (distribution scale), Zydus (device innovation)."
      ]
    }
  };

  const report = reportData[slug as keyof typeof reportData];

  // Route fallback in case slug doesn't match
  useEffect(() => {
    if (slug && !report) {
      router.push("/reports");
    }
  }, [slug, report, router]);

  if (!report) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center font-sans text-text-muted text-sm">
        Loading Report Data...
      </div>
    );
  }

  // Nestle CCA valuation calculation
  const calculatedTargetValue = nestleEPS * nestleMultiple;
  const isNestleOvervalued = calculatedTargetValue < nestleCurrentPrice;

  // Peer companies for Nestle CCA table
  const nestlePeers = [
    { name: "Nestlé India Ltd", pe: "85.2x", roe: "108.9%", premium: "+37.4%" },
    { name: "Tata Consumer Products", pe: "68.2x", roe: "8.4%", premium: "+10.9%" },
    { name: "Britannia Industries", pe: "60.1x", roe: "53.2%", premium: "-2.3%" },
    { name: "ITC Limited", pe: "26.4x", roe: "29.1%", premium: "-57.0%" },
    { name: "FMCG Peer Median", pe: "61.5x", roe: "30.3%", premium: "0.0%" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
      
      {/* Back Button */}
      <Link 
        href="/reports" 
        className="inline-flex items-center space-x-2 text-xs font-bold text-text-muted hover:text-accent-blue uppercase tracking-wider transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Reports</span>
      </Link>

      {/* Report Header Block */}
      <section className="bg-card-base border border-card-border p-6 md:p-8 rounded-2xl shadow-md space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-bold text-accent-blue font-mono uppercase tracking-wider">
            {report.industry}
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-2xs font-extrabold tracking-wide uppercase border ${report.recColor} font-mono`}>
            {report.recommendation}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-text-base leading-tight">
          {report.title}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-card-border">
          <div className="space-y-1">
            <span className="text-3xs font-bold text-text-muted uppercase tracking-wider font-mono">Current Market Price</span>
            <p className="text-sm md:text-base font-bold text-text-base font-display">{report.cmp}</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xs font-bold text-text-muted uppercase tracking-wider font-mono">Target Range</span>
            <p className="text-sm md:text-base font-bold text-accent-blue font-display">{report.targetPrice}</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xs font-bold text-text-muted uppercase tracking-wider font-mono">Valuation Mode</span>
            <p className="text-sm md:text-base font-semibold text-text-base font-display">CCA Multiples / DCF</p>
          </div>
          <div className="space-y-1">
            <a 
              href={report.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 border border-card-border hover:border-accent-blue/30 rounded-lg text-xs font-bold text-text-base hover:text-accent-blue bg-bg-base/30 transition-all mt-1 shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Full PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Tabs Selector Navigation */}
      <div className="border-b border-card-border flex space-x-6 text-sm font-display uppercase tracking-wider font-bold">
        <button
          onClick={() => setActiveTab("summary")}
          className={`pb-3 transition-colors cursor-pointer relative ${
            activeTab === "summary" ? "text-accent-blue" : "text-text-muted hover:text-text-base"
          }`}
        >
          <span>Executive Summary</span>
          {activeTab === "summary" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-blue" />}
        </button>
        
        <button
          onClick={() => setActiveTab("analytics")}
          className={`pb-3 transition-colors cursor-pointer relative flex items-center space-x-1.5 ${
            activeTab === "analytics" ? "text-accent-blue" : "text-text-muted hover:text-text-base"
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Interactive Modeling</span>
          {activeTab === "analytics" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-blue" />}
        </button>
        
        <button
          onClick={() => setActiveTab("pdf")}
          className={`pb-3 transition-colors cursor-pointer relative flex items-center space-x-1.5 ${
            activeTab === "pdf" ? "text-accent-blue" : "text-text-muted hover:text-text-base"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Original PDF Document</span>
          {activeTab === "pdf" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-blue" />}
        </button>
      </div>

      {/* Tab Panels Contents */}
      <div className="space-y-8">
        
        {/* Tab 1: Executive Summary */}
        {activeTab === "summary" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            
            {/* Left Block: Narrative */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Thesis block */}
              <div className="bg-card-base border border-card-border p-6 rounded-xl space-y-4 shadow-sm">
                <h3 className="text-lg font-bold font-display text-text-base flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-blue" />
                  <span>Analytical Investment Thesis</span>
                </h3>
                <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans font-normal">
                  {report.thesis}
                </p>
              </div>

              {/* Takeaways list */}
              <div className="bg-card-base border border-card-border p-6 rounded-xl space-y-4 shadow-sm">
                <h3 className="text-lg font-bold font-display text-text-base">
                  Core Takeaways & Analytical Discoveries
                </h3>
                <ul className="space-y-3.5">
                  {report.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start text-sm text-text-muted leading-relaxed font-sans">
                      <span className="text-accent-blue mr-3 font-bold font-mono text-base leading-none">✓</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Block: Stats Table */}
            <div className="lg:col-span-4 bg-card-base border border-card-border rounded-xl shadow-sm overflow-hidden">
              <div className="bg-bg-base/70 px-4 py-3 border-b border-card-border flex items-center justify-between">
                <span className="text-2xs font-extrabold font-mono uppercase tracking-wider text-text-muted">
                  Report Benchmarks
                </span>
                <Info className="w-4 h-4 text-text-muted" />
              </div>
              <div className="divide-y divide-card-border">
                {report.metricsTable.map((item, idx) => (
                  <div key={idx} className="p-4 flex flex-col space-y-1">
                    <span className="text-3xs uppercase font-extrabold tracking-widest text-text-muted font-mono">
                      {item.name}
                    </span>
                    <span className="text-sm font-bold text-text-base font-display">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Interactive Analytics Dashboard */}
        {activeTab === "analytics" && (
          <div className="animate-fadeIn space-y-8">
            
            {/* CONDITIONAL SUB-DASHBOARD: NESTLE INDIA (CCA SIMULATOR) */}
            {slug === "nestle-india" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Simulator Card Slider */}
                <div className="lg:col-span-6 bg-card-base border border-card-border rounded-xl p-6 shadow-md space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-accent-blue font-mono uppercase tracking-wider block">
                      Valuation Multiplier Tool
                    </span>
                    <h3 className="text-xl font-bold font-display text-text-base">
                      Comparable Company Valuation Modeler
                    </h3>
                    <p className="text-xs text-text-muted font-sans leading-relaxed">
                      Slide the multiple below to adjust Nestle's target price model. The median peer multiple represents how other major FMCG stalwarts (Britannia, ITC, Tata Consumer) are valued on average.
                    </p>
                  </div>

                  {/* Multiplier Slider Box */}
                  <div className="p-4 bg-bg-base border border-card-border rounded-lg space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-text-muted uppercase">Target Multiple (P/E)</span>
                      <span className="font-bold text-accent-blue text-sm">{nestleMultiple}x</span>
                    </div>

                    <input 
                      type="range"
                      min={50}
                      max={100}
                      value={nestleMultiple}
                      onChange={(e) => setNestleMultiple(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-card-border rounded-lg appearance-none cursor-pointer accent-accent-blue"
                    />

                    <div className="flex justify-between items-center text-3xs font-mono text-text-muted uppercase">
                      <span>50x (Severe compression)</span>
                      <span>61.5x (Peer Median)</span>
                      <span>100x (Extreme premium)</span>
                    </div>
                  </div>

                  {/* Live valuation metrics output */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-bg-base border border-card-border rounded-lg text-center space-y-1">
                      <span className="text-3xs uppercase font-extrabold tracking-widest text-text-muted font-mono block">
                        Estimated Target Price
                      </span>
                      <span className="text-lg font-black text-accent-blue font-display">
                        ₹{calculatedTargetValue.toFixed(2)}
                      </span>
                    </div>
                    <div className="p-4 bg-bg-base border border-card-border rounded-lg text-center space-y-1">
                      <span className="text-3xs uppercase font-extrabold tracking-widest text-text-muted font-mono block">
                        Current Market Price
                      </span>
                      <span className="text-lg font-black text-text-base font-display">
                        ₹{nestleCurrentPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Alert Banner */}
                  <div className={`p-4 rounded-lg border flex items-start space-x-3 ${
                    isNestleOvervalued 
                      ? "bg-rose-500/10 border-rose-500/20 text-rose-500"
                      : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                  }`}>
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
                        {isNestleOvervalued ? "Premium / Overvaluation Signal" : "Margin of Safety Detected"}
                      </h4>
                      <p className="text-xs font-sans leading-relaxed">
                        {isNestleOvervalued 
                          ? `At ${nestleMultiple}x P/E, Nestle's calculated fair value of ₹${calculatedTargetValue.toFixed(2)} trades at a ${( ( (nestleCurrentPrice - calculatedTargetValue) / calculatedTargetValue) * 100 ).toFixed(1)}% premium relative to current market price.`
                          : `At ${nestleMultiple}x P/E, Nestle's calculated fair value of ₹${calculatedTargetValue.toFixed(2)} suggests a ${( ( (calculatedTargetValue - nestleCurrentPrice) / nestleCurrentPrice) * 100 ).toFixed(1)}% potential valuation upside.`
                        }
                      </p>
                    </div>
                  </div>

                </div>

                {/* Peer comparison table */}
                <div className="lg:col-span-6 bg-card-base border border-card-border rounded-xl p-6 shadow-md space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-text-muted font-mono uppercase tracking-wider block">
                      Peer Multiples
                    </span>
                    <h3 className="text-xl font-bold font-display text-text-base">
                      FMCG Peer Comparable Matrix
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-sans">
                      <thead>
                        <tr className="border-b border-card-border text-text-muted font-mono uppercase tracking-wider">
                          <th className="py-3 font-semibold">Company Name</th>
                          <th className="py-3 font-semibold text-right">P/E Multiple</th>
                          <th className="py-3 font-semibold text-right">ROE Score</th>
                          <th className="py-3 font-semibold text-right">Premium vs. Median</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-card-border font-medium text-text-base">
                        {nestlePeers.map((peer, idx) => (
                          <tr 
                            key={idx} 
                            className={`hover:bg-bg-base/40 transition-colors ${
                              peer.name.includes("Nestlé") 
                                ? "text-accent-blue font-bold bg-accent-blue/5" 
                                : peer.name.includes("Median") 
                                ? "text-text-muted italic bg-bg-base/60" 
                                : ""
                            }`}
                          >
                            <td className="py-3">{peer.name}</td>
                            <td className="py-3 text-right font-mono">{peer.pe}</td>
                            <td className="py-3 text-right font-mono">{peer.roe}</td>
                            <td className={`py-3 text-right font-mono ${
                              peer.premium.startsWith("+") 
                                ? "text-rose-500" 
                                : peer.premium.startsWith("-") 
                                ? "text-emerald-500" 
                                : "text-text-muted"
                            }`}>{peer.premium}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-3 bg-bg-base/50 rounded-lg text-3xs text-text-muted font-sans leading-relaxed border border-card-border flex items-start space-x-2">
                    <Info className="w-3.5 h-3.5 text-accent-blue shrink-0 mt-0.5" />
                    <span>Peer multiples gathered from audited reporting. Peer median multiple of 61.5x demonstrates the premium multiples premium Nestlé commands on account of superior margins and return metrics (108.9% ROE).</span>
                  </div>

                </div>

              </div>
            )}

            {/* CONDITIONAL SUB-DASHBOARD: WAAREE ENERGIES (CAPACITY GROWTH CHART) */}
            {slug === "waaree-energies" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* SVG Visual Bar Graph */}
                <div className="lg:col-span-8 bg-card-base border border-card-border rounded-xl p-6 shadow-md space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-accent-blue font-mono uppercase tracking-wider block">
                      Capacity Projections
                    </span>
                    <h3 className="text-xl font-bold font-display text-text-base">
                      Waaree Installed Manufacturing Capacity Growth (GW)
                    </h3>
                  </div>

                  {/* SVG Responsive Chart */}
                  <div className="w-full bg-bg-base/50 border border-card-border rounded-lg p-6 relative">
                    <svg 
                      viewBox="0 0 500 240" 
                      className="w-full h-auto text-text-base font-mono overflow-visible"
                    >
                      {/* Grid lines */}
                      <line x1="50" y1="40" x2="470" y2="40" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="50" y1="90" x2="470" y2="90" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="50" y1="140" x2="470" y2="140" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="50" y1="190" x2="470" y2="190" stroke="var(--card-border)" strokeWidth="1" />

                      {/* Y-Axis scale tags */}
                      <text x="40" y="44" className="text-3xs fill-text-muted text-right" textAnchor="end">14 GW</text>
                      <text x="40" y="94" className="text-3xs fill-text-muted" textAnchor="end">9 GW</text>
                      <text x="40" y="144" className="text-3xs fill-text-muted" textAnchor="end">4 GW</text>
                      <text x="40" y="194" className="text-3xs fill-text-muted" textAnchor="end">0 GW</text>

                      {/* Data bars */}
                      {/* FY20 Capacity: 2.0 GW */}
                      <rect x="75" y="168" width="40" height="22" rx="3" className="fill-accent-blue/30 stroke-accent-blue stroke-1 hover:fill-accent-blue/45 transition-colors" />
                      <text x="95" y="158" className="text-2xs font-bold fill-text-base font-display" textAnchor="middle">2.0 GW</text>
                      
                      {/* FY22 Capacity: 5.0 GW */}
                      <rect x="155" y="136" width="40" height="54" rx="3" className="fill-accent-blue/30 stroke-accent-blue stroke-1 hover:fill-accent-blue/45 transition-colors" />
                      <text x="175" y="126" className="text-2xs font-bold fill-text-base font-display" textAnchor="middle">5.0 GW</text>
                      
                      {/* FY24 Capacity: 9.0 GW */}
                      <rect x="235" y="94" width="40" height="96" rx="3" className="fill-accent-blue/30 stroke-accent-blue stroke-1 hover:fill-accent-blue/45 transition-colors" />
                      <text x="255" y="84" className="text-2xs font-bold fill-text-base font-display" textAnchor="middle">9.0 GW</text>
                      
                      {/* FY25 Capacity: 13.3 GW */}
                      <rect x="315" y="48" width="40" height="142" rx="3" className="fill-accent-blue hover:fill-accent-blue-hover transition-colors shadow-md" />
                      <text x="335" y="38" className="text-2xs font-bold fill-accent-blue font-display" textAnchor="middle">13.3 GW</text>
                      
                      {/* FY26 Proj Capacity: 20.0 GW (Out of graph boundary context, just show timeline) */}
                      <rect x="395" y="40" width="40" height="150" rx="3" fill="none" className="stroke-accent-green stroke-1 stroke-dasharray-[3,3]" />
                      <text x="415" y="30" className="text-2xs font-bold fill-accent-green font-display" textAnchor="middle">20.9 GW (Proj)</text>

                      {/* X-Axis scale tags */}
                      <text x="95" y="210" className="text-3xs fill-text-muted" textAnchor="middle">FY2020</text>
                      <text x="175" y="210" className="text-3xs fill-text-muted" textAnchor="middle">FY2022</text>
                      <text x="255" y="210" className="text-3xs fill-text-muted" textAnchor="middle">FY2024</text>
                      <text x="335" y="210" className="text-3xs font-bold fill-text-base" textAnchor="middle">FY2025</text>
                      <text x="415" y="210" className="text-3xs fill-accent-green font-bold" textAnchor="middle">FY2026 Proj</text>
                    </svg>
                  </div>

                  <p className="text-xs text-text-muted font-sans leading-relaxed text-center italic">
                    Figure 1.0: Manufacturing capacity (GW) scaling curve showing an institutional CAGR of **108.35%** over the observation horizon.
                  </p>
                </div>

                {/* Regional exposure panel */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* Export Exposure Card */}
                  <div className="bg-card-base border border-card-border rounded-xl p-6 shadow-sm space-y-4">
                    <h4 className="text-sm font-bold font-display text-text-base border-b border-card-border pb-2 flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-accent-blue" />
                      <span>Revenue Distribution Profile</span>
                    </h4>
                    
                    <div className="space-y-4">
                      
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span>USA Export Revenue Share</span>
                          <span className="font-bold text-accent-blue">57.1%</span>
                        </div>
                        <div className="w-full bg-card-border h-2 rounded-full overflow-hidden">
                          <div className="bg-accent-blue h-full rounded-full" style={{ width: "57.14%" }} />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span>Domestic Indian Market Share</span>
                          <span className="font-bold text-text-base">42.9%</span>
                        </div>
                        <div className="w-full bg-card-border h-2 rounded-full overflow-hidden">
                          <div className="bg-text-base h-full rounded-full" style={{ width: "42.86%" }} />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Sourcing exposure card */}
                  <div className="bg-card-base border border-card-border rounded-xl p-6 shadow-sm space-y-4">
                    <h4 className="text-sm font-bold font-display text-text-base border-b border-card-border pb-2 flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-accent-yellow" />
                      <span>Supply Chain Concentration Risk</span>
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span>China/Malaysia Raw Sourcing</span>
                        <span className="font-bold text-accent-yellow">87.8%</span>
                      </div>
                      <div className="w-full bg-card-border h-2 rounded-full overflow-hidden">
                        <div className="bg-accent-yellow h-full rounded-full" style={{ width: "87.87%" }} />
                      </div>
                      <p className="text-3xs text-text-muted leading-relaxed font-sans pt-1">
                        High raw polysilicon/wafer import reliance from Chinese partners represents a critical vulnerability in the event of bilateral tariffs or maritime transit stress.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* CONDITIONAL SUB-DASHBOARD: SEMAGLUTIDE PATENT CLIFF (TIMELINE) */}
            {slug === "semaglutide-cliff" && (
              <div className="bg-card-base border border-card-border rounded-xl p-6 md:p-8 shadow-md space-y-8">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-accent-blue font-mono uppercase tracking-wider block">
                    Market Transition Timeline
                  </span>
                  <h3 className="text-xl font-bold font-display text-text-base">
                    Semaglutide Generic Market Opening Lifecycle
                  </h3>
                  <p className="text-xs text-text-muted font-sans max-w-2xl leading-relaxed">
                    Generic timelines are rigid, driven by structural formulation patent expiries. Dr. Reddy's and other local generic manufacturers have already finalized early production.
                  </p>
                </div>

                {/* Timeline Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  
                  {/* Timeline Stage 1 */}
                  <div className="p-4 bg-bg-base/70 border border-card-border rounded-lg relative space-y-2 group hover:border-accent-blue/30 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent-blue/15 border border-accent-blue/20 text-accent-blue flex items-center justify-center font-mono font-bold text-xs">
                      01
                    </div>
                    <span className="text-3xs font-extrabold text-accent-blue uppercase font-mono block">2024 (COMPLETED)</span>
                    <h4 className="text-sm font-bold font-display text-text-base">Molecule Patent Expiry</h4>
                    <p className="text-xs text-text-muted font-sans leading-relaxed">
                      Basic molecule patent expires in India. Early generic manufacturers like Dr. Reddy's receive immediate local manufacturing clearances.
                    </p>
                  </div>

                  {/* Timeline Stage 2 */}
                  <div className="p-4 bg-bg-base/70 border border-card-border rounded-lg relative space-y-2 group hover:border-accent-blue/30 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent-blue/15 border border-accent-blue/20 text-accent-blue flex items-center justify-center font-mono font-bold text-xs">
                      02
                    </div>
                    <span className="text-3xs font-extrabold text-accent-blue uppercase font-mono block">Q2 2025 (COMPLETED)</span>
                    <h4 className="text-sm font-bold font-display text-text-base">Production Commencement</h4>
                    <p className="text-xs text-text-muted font-sans leading-relaxed">
                      Dr. Reddy's commences early generic bulk drug manufacturing; initial batches ready and generic bulk exports start.
                    </p>
                  </div>

                  {/* Timeline Stage 3 */}
                  <div className="p-4 bg-card-base border border-accent-blue/40 rounded-lg relative space-y-2 shadow-md">
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-accent-blue indicator-pulse" />
                    <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center font-mono font-bold text-xs">
                      03
                    </div>
                    <span className="text-3xs font-extrabold text-accent-blue uppercase font-mono block">MARCH 2026 (INFLECTION)</span>
                    <h4 className="text-sm font-bold font-display text-text-base">Final Form Patent Cliff</h4>
                    <p className="text-xs text-text-muted font-sans leading-relaxed">
                      Novo Nordisk's final formulation and delivery pen device patents expire. Innovator pricing protection dissolves.
                    </p>
                  </div>

                  {/* Timeline Stage 4 */}
                  <div className="p-4 bg-bg-base/70 border border-card-border rounded-lg relative space-y-2 group hover:border-accent-blue/30 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent-blue/15 border border-accent-blue/20 text-accent-blue flex items-center justify-center font-mono font-bold text-xs">
                      04
                    </div>
                    <span className="text-3xs font-extrabold text-text-muted uppercase font-mono block">Q2 2026 (HORIZON)</span>
                    <h4 className="text-sm font-bold font-display text-text-base">Generic Drug Launches</h4>
                    <p className="text-xs text-text-muted font-sans leading-relaxed">
                      Generic drug formulations roll out across India via Dr. Reddy's, Sun Pharma, and Zydus. Treatment price collapses by **60-70%**.
                    </p>
                  </div>

                </div>

              </div>
            )}

          </div>
        )}

        {/* Tab 3: original PDF Embedded Reader */}
        {activeTab === "pdf" && (
          <div className="bg-card-base border border-card-border rounded-xl p-4 shadow-lg animate-fadeIn flex flex-col items-stretch space-y-4">
            
            {/* Header notification details */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-bg-base p-3 border border-card-border rounded-lg gap-3">
              <div className="flex items-center space-x-2.5">
                <FileText className="w-5 h-5 text-accent-blue shrink-0" />
                <span className="text-xs font-semibold text-text-base font-sans">
                  Audited Equity Research Report PDF File
                </span>
              </div>
              <a
                href={report.pdfUrl}
                download
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-accent-blue hover:bg-accent-blue-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-all cursor-pointer w-full sm:w-auto justify-center"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Original Document</span>
              </a>
            </div>

            {/* Embedded Iframe PDF viewer */}
            <div className="w-full aspect-[4/3] min-h-[500px] border border-card-border rounded-lg bg-bg-base/40 overflow-hidden relative">
              <iframe
                src={`${report.pdfUrl}#view=FitH`}
                title={report.title}
                className="w-full h-full border-0 absolute inset-0"
              />
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
