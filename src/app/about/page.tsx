import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-background animate-fade-in">
      <article className="px-6 md:px-12 max-w-4xl mx-auto pt-24 pb-32">
        <header className="mb-16">
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-8">About</h1>
          <div className="h-[1px] w-24 bg-border-strong"></div>
        </header>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="font-sans text-xs uppercase tracking-widest text-text-muted mb-6">Profile</h2>
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed font-light">
              I am an Investment Analyst Intern at Walford Capitals, driven by a rigorous fundamental approach to equity research and financial modeling.
            </p>
          </section>

          <section className="flex flex-col gap-6 text-foreground font-light text-lg">
            <p>
              My analytical framework focuses on identifying structural growth drivers, understanding complex competitive dynamics, and executing deep-dive financial valuations including DCF, Comparable Company Analysis, and Sum-of-the-Parts modeling.
            </p>
            <p>
              Beyond modeling, I emphasize clear, actionable communication, synthesizing complex data into high-conviction investment theses. My recent work includes comprehensive coverage on Nestle India, Waaree Energies, and thematic research on the Semaglutide patent cliff.
            </p>
          </section>

          <section className="mt-8 border-t border-[var(--color-border)] pt-12 flex flex-col sm:flex-row gap-8">
            <Link 
              href="/resume" 
              className="group inline-flex items-center gap-4 text-sm font-sans tracking-wide uppercase text-foreground bg-[var(--color-surface)] px-6 py-4 hover:bg-[var(--color-surface-hover)] transition-colors duration-300 border border-[var(--color-border)]"
            >
              <span>View Full Resume</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
            </Link>
            
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-4 text-sm font-sans tracking-wide uppercase text-background bg-foreground px-6 py-4 hover:opacity-90 transition-opacity duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
}
