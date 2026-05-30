import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { reportsData } from "@/data/reports";

export default function ReportsIndex() {
  const reports = reportsData;

  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-center animate-fade-in">
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pt-12 pb-32">
        <header className="mb-24 border-b border-[var(--color-border)] pb-8">
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">Research Index</h1>
          <p className="font-sans text-lg text-text-muted font-light max-w-2xl">
            A comprehensive archive of equity research reports, financial models, and industry deep-dives.
          </p>
        </header>

        <div className="flex flex-col border-t border-[var(--color-border)]">
          {reports.map((report, index) => (
            <Link 
              href={`/reports/${report.slug}`} 
              key={index}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors duration-500 px-4 -mx-4"
            >
              <div className="flex flex-col md:w-1/2 mb-6 md:mb-0 pr-8">
                <span className="font-sans text-xs text-text-muted mb-2 tracking-wider">{report.date}</span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3 group-hover:text-text-accent transition-colors duration-300">
                  {report.title}
                </h2>
                <p className="font-sans text-sm text-text-muted font-light max-w-md">
                  {report.subtitle}
                </p>
              </div>

              <div className="flex flex-row md:w-1/2 justify-between items-center w-full">
                {report.slug !== "semaglutide-patent-cliff" ? (
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
                ) : (
                  <div className="flex w-3/4"></div>
                )}

                <div className="flex justify-end w-1/4">
                  <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-foreground transform group-hover:translate-x-2 transition-all duration-300" strokeWidth={1} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
