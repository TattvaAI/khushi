"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  FileText, 
  ChevronRight, 
  TrendingUp, 
  AlertCircle,
  TrendingDown
} from "lucide-react";

export default function ReportsIndex() {
  const [search, setSearch] = useState("");
  const [sectorFilter, setSectorFilter] = useState("all");

  const reports = [
    {
      title: "Nestlé India Limited",
      slug: "nestle-india",
      sector: "fmcg",
      sectorLabel: "FMCG / Consumer Staples",
      recommendation: "REDUCE",
      recColor: "bg-rose-500/10 text-rose-500 border-rose-500/20",
      thesis: "Nestlé India is a market-leading FMCG compounder trading at 85x P/E—a 37% premium to peers. Operational efficiency deterioration (receivables days deterioration, working capital stress) and rising leverage signal stress, suggesting limited margin of safety at current levels.",
      keyMetric: "Target: ₹1,587.50 - 1,987.50",
      metrics: [
        { label: "P/E Ratio", value: "85.2x" },
        { label: "Market Cap", value: "₹2,29,160 Cr" },
        { label: "ROE Score", value: "108.9%" }
      ],
      highlights: [
        "45% of revenue is driven by Maggi's solid market dominance.",
        "Current Ratio has dropped to 0.80, indicating a potential near-term working capital red flag.",
        "Operating Cash Flow of ₹46,719 Cr represents strong baseline operational generation."
      ]
    },
    {
      title: "Waaree Energies Limited",
      slug: "waaree-energies",
      sector: "renewables",
      sectorLabel: "Renewable Energy / Solar Manufacturing",
      recommendation: "HOLD",
      recColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      thesis: "India's largest solar module manufacturer possessing massive growth momentum (529.79% revenue CAGR). Well positioned for the domestic 500 GW target, yet supply chain concentration (87% material imports from China) and high USA export revenue exposure present structural tariff and sourcing risks.",
      keyMetric: "Target: ₹2,656.43 - 3,288.32",
      metrics: [
        { label: "Revenue Growth", value: "19.1%" },
        { label: "Installed Capacity", value: "13.3 GW" },
        { label: "Export Market Share", value: "44.0%" }
      ],
      highlights: [
        "Extraordinary operational growth with a 108.35% Net Profit CAGR.",
        "Exceptional geopolitical exposure: 87.87% raw materials from China/Malaysia.",
        "Zero dividend policy in force despite consistent, compounding profitability."
      ]
    },
    {
      title: "The Semaglutide Patent Cliff",
      slug: "semaglutide-cliff",
      sector: "pharma",
      sectorLabel: "Pharmaceuticals / GLP-1 Therapies",
      recommendation: "EVENT-DRIVEN",
      recColor: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
      thesis: "The expiry of Novo Nordisk's final formulations patents in March 2026 marks a structural inflection point for Indian pharma. Expected generic competition will compress treatment costs by 60-70%, expanding the addressable base by 3-5x and generating a ₹1B+ annual opportunity.",
      keyMetric: "Event Date: March 2026",
      metrics: [
        { label: "Treatment Cost Compression", value: "60-70%" },
        { label: "Addressable Market expansion", value: "3-5x" },
        { label: "Generic Launch Opportunity", value: "₹1 Billion+" }
      ],
      highlights: [
        " Novo Nordisk's patent expiration in March 2026 will allow immediate generic launches.",
        "Early manufacturing movers like Dr. Reddy's are positioned for swift post-exclusivity launches.",
        "Massive addressable base of ~90M diabetes and 200M+ overweight/obese Indian adults."
      ]
    }
  ];

  // Client-side search and filter
  const filteredReports = useMemo(() => {
    return reports.filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(search.toLowerCase()) || 
                            report.thesis.toLowerCase().includes(search.toLowerCase()) ||
                            report.sectorLabel.toLowerCase().includes(search.toLowerCase());
      
      const matchesSector = sectorFilter === "all" || report.sector === sectorFilter;
      
      return matchesSearch && matchesSector;
    });
  }, [search, sectorFilter, reports]);

  const sectors = [
    { id: "all", label: "All Sectors" },
    { id: "fmcg", label: "FMCG / Staples" },
    { id: "renewables", label: "Renewable Energy" },
    { id: "pharma", label: "Pharmaceuticals" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/25 font-display uppercase tracking-wider">
          <span>Sector Research Coverage</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-text-base">
          Research <span className="text-accent-blue">Reports</span>
        </h1>
        <p className="text-text-muted font-sans text-sm md:text-base leading-relaxed">
          Comprehensive, fundamental-driven, bottom-up equity research across consumer, solar renewable, and pharmaceuticals. Filter reports or click through to view the valuation dashboards and complete PDFs.
        </p>
      </div>

      {/* Filter and Search Bar Panel */}
      <div className="bg-card-base border border-card-border p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Sector Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {sectors.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSectorFilter(sec.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                sectorFilter === sec.id
                  ? "bg-accent-blue border-accent-blue text-white shadow-sm"
                  : "bg-card-base border-card-border text-text-muted hover:text-text-base hover:border-accent-blue/30"
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search company or thesis..."
            className="w-full pl-9 pr-4 py-2 bg-bg-base/70 border border-card-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/15 outline-none rounded-lg text-xs font-sans text-text-base transition-all"
          />
        </div>

      </div>

      {/* Reports Grid */}
      <div className="space-y-8">
        {filteredReports.length > 0 ? (
          filteredReports.map((report, idx) => (
            <div 
              key={idx}
              className="bg-card-base border border-card-border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              
              {/* Left Grid: Thesis and Details (8 Cols) */}
              <div className="p-6 md:p-8 lg:col-span-8 space-y-6">
                
                {/* Row Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-accent-blue font-mono uppercase tracking-wider">
                      {report.sectorLabel}
                    </span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-2xs font-extrabold tracking-wide uppercase border ${report.recColor} font-mono`}>
                    {report.recommendation}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-extrabold font-display tracking-tight text-text-base hover:text-accent-blue transition-colors">
                  <Link href={`/reports/${report.slug}`}>{report.title}</Link>
                </h3>

                {/* Thesis Statement */}
                <div className="space-y-2">
                  <span className="text-3xs uppercase font-bold tracking-widest text-text-muted font-mono block">
                    Investment Thesis
                  </span>
                  <p className="text-sm text-text-muted font-sans leading-relaxed">
                    {report.thesis}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <span className="text-3xs uppercase font-bold tracking-widest text-text-muted font-mono block">
                    Key Report Takeaways
                  </span>
                  <ul className="space-y-2">
                    {report.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start text-xs text-text-muted font-sans leading-relaxed">
                        <span className="text-accent-blue mr-2 font-bold font-mono">›</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Grid: Metrics sidebar & CTA (4 Cols) */}
              <div className="bg-bg-base/40 border-t lg:border-t-0 lg:border-l border-card-border p-6 md:p-8 lg:col-span-4 flex flex-col justify-between space-y-6">
                
                {/* Valuation Benchmark */}
                <div className="p-4 bg-card-base border border-card-border rounded-lg text-center space-y-1">
                  <span className="text-3xs font-extrabold tracking-widest text-text-muted font-mono block uppercase">
                    VALUATION TARGET
                  </span>
                  <span className="text-sm font-bold text-accent-blue font-display leading-tight">
                    {report.keyMetric}
                  </span>
                </div>

                {/* Supporting Metrics Panel */}
                <div className="space-y-4">
                  <span className="text-3xs font-extrabold tracking-widest text-text-muted font-mono block uppercase text-center sm:text-left">
                    Supporting Data
                  </span>
                  <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
                    {report.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex justify-between items-center p-2.5 bg-card-base/50 border border-card-border rounded-lg gap-2 text-center lg:text-left flex-col lg:flex-row">
                        <span className="text-3xs font-semibold text-text-muted font-mono uppercase truncate leading-none">
                          {metric.label}
                        </span>
                        <span className="text-xs font-bold text-text-base font-display leading-none">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation CTA */}
                <div className="pt-2">
                  <Link 
                    href={`/reports/${report.slug}`}
                    className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-accent-blue hover:bg-accent-blue-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md shadow-accent-blue/10 hover:shadow-accent-blue/20 transition-all cursor-pointer group"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Interactive Report</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

              </div>

            </div>
          ))
        ) : (
          <div className="bg-card-base border border-card-border rounded-xl p-12 text-center space-y-4">
            <AlertCircle className="w-12 h-12 text-text-muted mx-auto animate-pulse" />
            <h3 className="text-xl font-bold font-display text-text-base">
              No matching reports found
            </h3>
            <p className="text-sm text-text-muted font-sans max-w-sm mx-auto">
              Please double check the spelling or switch filters to find the equity research you are looking for.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
