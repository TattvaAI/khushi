import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Cpu, 
  Globe, 
  BookOpen, 
  ArrowRight,
  TrendingUp,
  FileText,
  Calendar,
  MapPin,
  Sparkles
} from "lucide-react";

export default function About() {
  const experiences = [
    {
      role: "General Manager + Equity Research Analyst",
      company: "Walford Capitals (AI-Powered PMS)",
      period: "Aug 2024 - Present",
      location: "Remote / Work From Home",
      type: "pms",
      bullets: [
        "Led recruitment and onboarding pipelines for a high-performing 20+ member cross-functional team.",
        "Engineered a portfolio monitoring framework featuring automated NAV reconciliation and active risk tracking.",
        "Authored 3 exhaustive institutional equity research reports using Comparable Company Analysis (CCA) methodology.",
        "Conducted thorough fundamental due diligence and risk analysis on 20+ prospective portfolio companies.",
        "Managed 40+ high-net-worth investor relationships, structuring quarterly performance communications and reporting."
      ]
    },
    {
      role: "Marketing & Finance Intern",
      company: "Agile Capital Services",
      period: "Jun - Jul 2025",
      location: "New Delhi, India",
      type: "internship",
      bullets: [
        "Designed, executed, and analyzed a comprehensive quantitative market research survey on financial literacy (112 respondents).",
        "Conducted detailed horizontal and vertical ratio analysis on leading insurance firms (including ICFL and SBI Life).",
        "Gained deep product knowledge across financial services, pitching retail insurance and savings plans."
      ]
    },
    {
      role: "Student Ambassador",
      company: "Internshala",
      period: "Jun - Jul 2024",
      location: "New Delhi, India",
      type: "ambassador",
      bullets: [
        "Led campus awareness campaigns regarding professional skill development and internship readiness.",
        "Developed and leveraged marketing materials to pitch skill-building programs across personal and academic networks."
      ]
    }
  ];

  const skillCategories = [
    {
      name: "Financial Analysis & Valuation",
      skills: ["Equity Valuation", "Comparable Company Analysis (CCA)", "DCF Analysis", "Financial Modeling", "Ratio Analysis", "Sector & Industry Research", "Competitive Due Diligence"]
    },
    {
      name: "Operations & Relations",
      skills: ["Investor Relations", "Team Recruitment", "Onboarding Frameworks", "Portfolio Risk Tracking", "Business Communication", "Stakeholder Management"]
    },
    {
      name: "Technical & Tools",
      skills: ["Python", "Financial Statistics", "Advanced Microsoft Excel", "Google Workspace", "Research Methodologies"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
      
      {/* 1. Header Bio / Profile Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Bio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/25 font-display uppercase tracking-wider">
            <span>Profile Executive Summary</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-text-base leading-tight">
            About <span className="text-accent-blue">Khushi Bansal</span>
          </h1>

          <div className="space-y-4 text-sm md:text-base text-text-muted font-sans leading-relaxed">
            <p>
              I am a final-year Bachelor of Business Administration (BBA) student at **Bharati Vidyapeeth Institute of Management & Research (BVIMR)**, New Delhi, graduating in **June 2026**. I specialize in bottom-up financial analysis, valuation frameworks, and capital markets.
            </p>
            <p>
              My professional background unique combines operational leadership with rigorous equity research. As the General Manager and Equity Research Analyst at **Walford Capitals** (an AI-powered PMS startup), I built portfolio monitoring systems for ₹50Cr+ AUM, led recruiting operations, and authored core sector reports.
            </p>
            <p>
              I seek to dedicate my analytical skillset to research-heavy environments. By looking past surface-level multiples and reviewing operational metrics (such as cash flows, collection stress, and supply chains), I aim to help institutional investors make optimal allocation decisions.
            </p>
          </div>

          <div className="pt-2">
            <a 
              href="/pdfs/khushi-bansal-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent-blue hover:bg-accent-blue-hover text-white text-xs font-bold rounded-lg shadow-md shadow-accent-blue/10 hover:shadow-accent-blue/20 transition-all group"
            >
              <span>View Full Academic Resume</span>
              <FileText className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Institutional Stats Card */}
        <div className="lg:col-span-5 bg-card-base border border-card-border rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-bg-base px-6 py-4 border-b border-card-border flex items-center justify-between">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-text-muted">
              Key Metrics Overview
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-accent-green indicator-pulse" />
          </div>
          
          <div className="p-6 divide-y divide-card-border space-y-4">
            
            <div className="pb-4 flex justify-between items-center">
              <span className="text-sm font-medium text-text-muted font-sans">University</span>
              <span className="text-sm font-bold text-text-base text-right font-display max-w-[200px]">
                BVIMR, New Delhi
              </span>
            </div>

            <div className="py-4 flex justify-between items-center">
              <span className="text-sm font-medium text-text-muted font-sans">Degree</span>
              <span className="text-sm font-bold text-text-base font-display">
                BBA (Graduating June 2026)
              </span>
            </div>

            <div className="py-4 flex justify-between items-center">
              <span className="text-sm font-medium text-text-muted font-sans">CGPA Benchmark</span>
              <span className="text-sm font-bold text-accent-blue font-mono">
                8.01 / 10.0
              </span>
            </div>

            <div className="py-4 flex justify-between items-center">
              <span className="text-sm font-medium text-text-muted font-sans">Research Portfolio</span>
              <span className="text-sm font-bold text-text-base font-display">
                FMCG, Renewables, GLP-1
              </span>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <span className="text-sm font-medium text-text-muted font-sans">Core Valuations</span>
              <span className="text-sm font-bold text-text-base font-display">
                CCA, DCF Modeling
              </span>
            </div>

          </div>
        </div>

      </section>

      {/* 2. Experience Chronological Timeline */}
      <section className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold font-display tracking-tight text-text-base">
            Professional Experience
          </h2>
          <p className="text-sm text-text-muted max-w-xl font-sans">
            A chronological outline of active roles, operations, and analytical outputs.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-card-border pl-6 ml-4 space-y-12 md:space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-card-base border-2 border-card-border group-hover:border-accent-blue transition-colors flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Container */}
              <div className="bg-card-base border border-card-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-lg font-bold font-display text-text-base">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-accent-blue font-display">
                      {exp.company}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted font-mono bg-bg-base border border-card-border px-3 py-1 rounded-lg">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="hidden sm:inline text-card-border">|</span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 list-none">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm text-text-muted font-sans leading-relaxed">
                      <span className="text-accent-blue mr-2 font-bold font-mono">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. Education Timeline Card */}
      <section className="bg-card-base border border-card-border rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-start">
        <div className="p-4 bg-accent-blue/10 rounded-xl border border-accent-blue/20 shrink-0">
          <GraduationCap className="w-8 h-8 text-accent-blue" />
        </div>
        <div className="space-y-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-accent-blue font-bold">
              Education Credentials
            </span>
            <h3 className="text-xl font-bold font-display text-text-base">
              Bachelor of Business Administration (BBA)
            </h3>
            <p className="text-sm font-semibold text-text-muted font-display">
              Bharati Vidyapeeth Institute of Management & Research (BVIMR) — New Delhi
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans">
            <div>
              <span className="font-semibold text-text-base">CGPA Score: </span>
              <span className="font-mono text-accent-blue font-bold">8.01/10.0</span>
            </div>
            <div>
              <span className="font-semibold text-text-base">Graduation: </span>
              <span>June 2026</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-text-base uppercase tracking-wide block">
              Relevant Curriculum & Coursework:
            </span>
            <p className="text-xs text-text-muted font-sans leading-relaxed">
              Financial Modeling • Investment Banking • Financial Markets & Institutions • Cost Accounting • Statistics & Data Analytics (Python) • Research Methodology
            </p>
          </div>
        </div>
      </section>

      {/* 4. Categorized Skills Dashboard */}
      <section className="space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold font-display tracking-tight text-text-base">
            Core Competencies & Skills
          </h2>
          <p className="text-sm text-text-muted max-w-xl font-sans">
            Categorized overview of technical and professional proficiencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-card-base border border-card-border p-6 rounded-xl shadow-sm flex flex-col space-y-4">
              <h3 className="text-lg font-bold font-display border-b border-card-border pb-3 text-text-base flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                <span>{cat.name}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-bg-base border border-card-border text-text-base hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Medium-Term Vision / Oxford LSE Spotlight */}
      <section className="bg-gradient-to-br from-bg-base via-card-base to-accent-blue/10 border border-accent-blue/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-2xs font-extrabold bg-accent-blue/15 text-accent-blue border border-accent-blue/20 font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 indicator-pulse" />
              <span>Future Academic Objectives</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black font-display tracking-tight text-text-base leading-tight">
              Sustainable Finance & Environmental Economics
            </h2>
            
            <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
              Capital markets must eventually reflect pricing and environmental externalities correctly. My goal is to apply quantitative research to climate finance. I plan to pursue a Master's in **Environmental Economics or Sustainable Finance** from elite global institutions like the **University of Oxford** or **London School of Economics (LSE)** to advance this frontier.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            <Link 
              href="/contact" 
              className="w-full lg:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-accent-blue hover:bg-accent-blue-hover text-white text-xs font-bold rounded-lg shadow-md transition-colors"
            >
              <span>Connect for Research & Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Design accents */}
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      </section>

    </div>
  );
}
