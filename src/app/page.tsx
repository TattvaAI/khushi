import React from "react";
import Link from "next/link";
import { 
  TrendingUp, 
  FileText, 
  Users, 
  Briefcase, 
  ArrowRight, 
  Download, 
  TrendingDown, 
  Layers,
  ChevronRight,
  Target
} from "lucide-react";

export default function Home() {
  const stats = [
    {
      icon: <FileText className="w-6 h-6 text-accent-blue" />,
      title: "3 Published Reports",
      description: "Comprehensive equity research across FMCG, renewable energy, and pharmaceuticals using rigorous valuation methodologies.",
      link: "/reports"
    },
    {
      icon: <Users className="w-6 h-6 text-accent-green" />,
      title: "112-Person Survey",
      description: "Designed and executed quantitative research on financial literacy and investment behavior among college students.",
      link: "/about"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-accent-yellow" />,
      title: "₹50Cr+ AUM Frameworks",
      description: "General Manager at Walford Capitals AI-powered PMS. Built portfolio monitoring systems and investor communication standards.",
      link: "/about"
    }
  ];

  const recentReports = [
    {
      title: "Nestlé India Limited",
      slug: "nestle-india",
      industry: "FMCG / Consumer Staples",
      recommendation: "REDUCE",
      recColor: "bg-rose-500/10 text-rose-500 border-rose-500/20",
      thesis: "Market leader with strong brand moats, but trading at 85x P/E—a significant premium to peers. Operational efficiency deterioration and working capital stress warrant caution despite quality fundamentals.",
      metrics: [
        { label: "CMP", value: "₹2,376.80" },
        { label: "Target", value: "₹1,587.50 - 1,987.50" },
        { label: "Market Cap", value: "₹2,29,160 Cr" }
      ]
    },
    {
      title: "Waaree Energies Limited",
      slug: "waaree-energies",
      industry: "Renewable Energy / Solar",
      recommendation: "HOLD",
      recColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      thesis: "India's largest solar module manufacturer with exceptional growth momentum (529.79% CAGR). Strong tailwinds from India's 500 GW renewable target, but supply chain concentration and export dependency create headwinds.",
      metrics: [
        { label: "CMP", value: "₹3,197.00" },
        { label: "Target", value: "₹2,656.43 - 3,288.32" },
        { label: "Installed Capacity", value: "13.3 GW" }
      ]
    },
    {
      title: "Semaglutide Patent Cliff",
      slug: "semaglutide-cliff",
      industry: "Pharmaceuticals / GLP-1",
      recommendation: "EVENT-DRIVEN",
      recColor: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
      thesis: "India's semaglutide patent cliff (March 2026) represents a structural inflection point for domestic pharma. 60-70% price reduction will unlock 3-5x market expansion and ₹1 billion+ annual opportunity for generic manufacturers.",
      metrics: [
        { label: "Timeline", value: "March 2026" },
        { label: "Generic Price Cut", value: "60-70%" },
        { label: "Market Expansion", value: "3-5x" }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-card-border financial-grid pt-20 pb-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            {/* Sector tags badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/25 uppercase tracking-wider font-display">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue indicator-pulse"></span>
              <span>Institutional Investment Intelligence</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-text-base leading-none">
              Equity Research <span className="text-accent-blue">Portfolio</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl font-sans text-text-muted max-w-2xl mx-auto leading-relaxed">
              Applying rigorous bottom-up financial analysis, comprehensive valuation models, and quantitative sector intelligence to uncover risk and price opportunities.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                href="/reports" 
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-bold shadow-md shadow-accent-blue/20 hover:shadow-accent-blue/30 transition-all cursor-pointer group"
              >
                <span>View Research Reports</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a 
                href="/pdfs/khushi-bansal-resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg bg-card-base hover:bg-bg-base text-text-base border border-card-border text-sm font-bold shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Email link */}
            <div className="pt-6 text-xs text-text-muted font-mono">
              Enquiries: <a href="mailto:thekhushibansal.work@gmail.com" className="hover:text-accent-blue underline transition-colors">thekhushibansal.work@gmail.com</a>
            </div>

          </div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base to-transparent pointer-events-none" />
      </section>

      {/* 2. Quick Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-card-base border border-card-border p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-350 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="p-3 bg-bg-base rounded-lg w-fit border border-card-border group-hover:border-accent-blue/30 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-text-base tracking-tight">
                  {stat.title}
                </h3>
                <p className="text-sm text-text-muted font-sans leading-relaxed">
                  {stat.description}
                </p>
              </div>
              <div className="pt-6">
                <Link 
                  href={stat.link} 
                  className="inline-flex items-center text-xs font-bold text-accent-blue hover:text-accent-blue-hover uppercase tracking-wider group/link"
                >
                  <span>Explore detail</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Recent Reports Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-text-base">
              Recent Equity Research
            </h2>
            <p className="text-text-muted font-sans text-sm md:text-base max-w-xl">
              Rigorous, event-driven, and fundamentals-based analysis across diverse sectors in Indian capital markets.
            </p>
          </div>
          <Link 
            href="/reports" 
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-accent-blue hover:text-accent-blue-hover tracking-tight group"
          >
            <span>All Research Reports</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {recentReports.map((report, idx) => (
            <div 
              key={idx}
              className="bg-card-base border border-card-border rounded-xl shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              
              {/* Report Header */}
              <div className="p-6 space-y-4 border-b border-card-border">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-text-muted font-mono uppercase tracking-wider">
                    {report.industry}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-2xs font-extrabold tracking-wide uppercase border ${report.recColor} font-mono`}>
                    {report.recommendation}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold font-display text-text-base hover:text-accent-blue transition-colors tracking-tight">
                  <Link href={`/reports/${report.slug}`}>{report.title}</Link>
                </h3>
              </div>

              {/* Thesis Body */}
              <div className="p-6 flex-grow">
                <p className="text-sm text-text-muted font-sans leading-relaxed line-clamp-4">
                  {report.thesis}
                </p>
              </div>

              {/* Quick Metrics Bar */}
              <div className="bg-bg-base/70 px-6 py-4 border-t border-card-border grid grid-cols-3 gap-2">
                {report.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex flex-col space-y-1">
                    <span className="text-3xs uppercase font-bold tracking-widest text-text-muted font-mono leading-none">
                      {metric.label}
                    </span>
                    <span className="text-xs font-bold text-text-base truncate tracking-tight font-display leading-tight">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* View CTA */}
              <div className="p-6 pt-4">
                <Link 
                  href={`/reports/${report.slug}`}
                  className="w-full inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-lg bg-card-base hover:bg-bg-base border border-card-border hover:border-accent-blue/30 text-text-base text-xs font-bold transition-all shadow-sm group/btn"
                >
                  <FileText className="w-3.5 h-3.5 text-text-muted group-hover/btn:text-accent-blue transition-colors" />
                  <span>Read Full Report</span>
                  <ChevronRight className="w-3.5 h-3.5 text-text-muted group-hover/btn:translate-x-0.5 transition-all" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Methodology Showcase Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="bg-gradient-to-br from-accent-blue/10 via-bg-base to-accent-blue/5 border border-accent-blue/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="p-2 bg-accent-blue/10 rounded-lg w-fit border border-accent-blue/20">
              <Target className="w-5 h-5 text-accent-blue" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display tracking-tight text-text-base">
              Analytical Methodology
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
              All investment theses are formulated using thorough **Comparable Company Analysis (CCA)**, operational auditing (working capital analytics, inventory and collection analysis), sector growth tracking, and event-driven scenario evaluations. 
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center space-x-1.5 px-6 py-3 rounded-lg bg-accent-blue hover:bg-accent-blue-hover text-white text-xs font-bold shadow-md shadow-accent-blue/10 transition-colors"
            >
              <span>About My Approach</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center space-x-1.5 px-6 py-3 rounded-lg bg-card-base hover:bg-bg-base border border-card-border text-text-base text-xs font-bold shadow-sm transition-colors"
            >
              <span>Connect / Collaborate</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
