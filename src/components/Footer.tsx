import React from "react";
import Link from "next/link";
import { Mail, Phone, ArrowUpRight, TrendingUp } from "lucide-react";
import { Linkedin } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card-base transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          {/* Column 1: Bio */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center text-white font-bold font-display shadow-md shadow-accent-blue/10">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <span className="text-lg font-bold font-display tracking-tight text-text-base">
                Khushi Bansal
              </span>
            </Link>
            <p className="text-sm text-text-muted max-w-xs font-sans leading-relaxed">
              Specializing in rigorous financial analysis, valuation models, sector research, and capital market intelligence. BBA Candidate (June 2026).
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold font-display tracking-wider uppercase text-text-base">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-sm text-text-muted hover:text-accent-blue transition-colors flex items-center space-x-1">
                <span>Home</span>
              </Link>
              <Link href="/reports" className="text-sm text-text-muted hover:text-accent-blue transition-colors flex items-center space-x-1">
                <span>Research Reports</span>
              </Link>
              <Link href="/about" className="text-sm text-text-muted hover:text-accent-blue transition-colors flex items-center space-x-1">
                <span>About Khushi</span>
              </Link>
              <Link href="/contact" className="text-sm text-text-muted hover:text-accent-blue transition-colors flex items-center space-x-1">
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Contact & Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold font-display tracking-wider uppercase text-text-base">
              Connect With Me
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:thekhushibansal.work@gmail.com"
                  className="inline-flex items-center space-x-2 text-sm text-text-muted hover:text-accent-blue transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>thekhushibansal.work@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/thekhushibansal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-text-muted hover:text-accent-blue transition-colors group"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/thekhushibansal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+918700012023"
                  className="inline-flex items-center space-x-2 text-sm text-text-muted hover:text-accent-blue transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 87000 12023</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-xs text-text-muted font-sans">
          <div>
            © {currentYear} Khushi Bansal. All rights reserved.
          </div>
          <div className="flex space-x-1 items-center">
            <span>Portfolio designed for Equity Research Excellence</span>
            <span className="text-card-border">|</span>
            <span className="font-semibold text-text-base">Hosted on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
