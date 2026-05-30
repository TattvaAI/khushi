import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { reportsData } from "@/data/reports";

export default function Home() {
  const reports = reportsData;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20 pb-32 animate-slide-up">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground max-w-4xl leading-[1.1] mb-8">
          Khushi Bansal
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
          <p className="font-sans text-lg md:text-xl text-text-muted max-w-md font-light">
            Equity Research &amp; Financial Analysis
          </p>
          <div className="h-[1px] w-16 md:w-32 bg-border-strong hidden md:block"></div>
          <p className="font-sans text-sm md:text-base text-text-muted max-w-md font-light leading-relaxed">
            Specializing in deep-dive fundamental analysis, financial modeling, and 
            identifying structural growth opportunities across Indian equities and global sectors.
          </p>
        </div>
      </section>

      {/* Selected Work - Table of Contents Style */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <div className="mb-16 border-b border-[var(--color-border)] pb-4 flex justify-between items-end">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">Selected Research</h2>
          <span className="font-sans text-xs uppercase tracking-widest text-text-muted">2024 / 2025</span>
        </div>

        <div className="flex flex-col border-t border-[var(--color-border)]">
          {reports.map((report, index) => (
            <Link 
              href={`/reports/${report.slug}`} 
              key={index}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-12 border-b border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors duration-500 px-4 -mx-4"
            >
              <div className="flex flex-col md:w-1/2 mb-6 md:mb-0 pr-8">
                <span className="font-sans text-xs text-text-muted mb-2 tracking-wider">{report.date}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-3 group-hover:text-text-accent transition-colors duration-300">
                  {report.title}
                </h3>
                <p className="font-sans text-sm text-text-muted font-light max-w-md">
                  {report.subtitle}
                </p>
              </div>

              <div className="flex flex-row md:w-1/2 justify-between items-center w-full">
                  <>
                    <div className="flex flex-col items-start md:items-center w-1/2">
                      <span className="font-sans text-xs text-text-muted uppercase tracking-widest mb-1">Target</span>
                      <span className="font-sans text-base text-foreground">{report.target}</span>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-center w-1/4">
                      <span className="font-sans text-xs text-text-muted uppercase tracking-widest mb-1">Rec</span>
                      <span className="font-sans text-sm font-medium tracking-wide text-foreground">
                        {report.recommendation}
                      </span>
                    </div>
                  </>

                <div className="flex justify-end w-1/4">
                  <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-foreground transform group-hover:translate-x-2 transition-all duration-300" strokeWidth={1} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brief About Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-32 border-t border-[var(--color-border)]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground w-full md:w-1/3">
            Analytical rigor meets <br/> strategic insight.
          </h2>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <p className="font-sans text-base text-foreground font-light leading-relaxed">
              Currently an equity research analyst at Walford Capitals, building comprehensive financial models (DCF, CCA) and publishing actionable research notes.
            </p>
            <p className="font-sans text-base text-foreground font-light leading-relaxed">
              My approach bridges deep quantitative rigor with qualitative industry understanding, aiming to uncover non-consensus views that drive alpha.
            </p>
            <div className="mt-8">
              <Link href="/about" className="group inline-flex items-center gap-4 text-sm font-sans tracking-wide uppercase text-foreground">
                <span className="border-b border-foreground pb-1">Read Full Biography</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
