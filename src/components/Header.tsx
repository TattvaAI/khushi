"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, TrendingUp, Download } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  useEffect(() => {
    // Check initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Reports", href: "/reports" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 rounded-lg bg-accent-blue flex items-center justify-center text-white font-bold font-display shadow-md shadow-accent-blue/20 transition-transform group-hover:scale-105">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wider uppercase text-text-muted font-display leading-tight">KB PORTFOLIO</span>
              <span className="text-base font-bold font-display tracking-tight text-text-base leading-none">Khushi Bansal</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    isActive
                      ? "text-accent-blue font-semibold"
                      : "text-text-muted hover:text-text-base"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-blue rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Quick Resume Download CTA */}
            <a
              href="/pdfs/khushi-bansal-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent-blue hover:bg-accent-blue-hover text-white transition-all shadow-sm shadow-accent-blue/10 hover:shadow-accent-blue/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-muted hover:text-text-base hover:bg-card-base border border-card-border shadow-sm cursor-pointer transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-4.5 h-4.5 text-slate-700 animate-pulse" />
              ) : (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              )}
            </button>
          </nav>

          {/* Mobile Buttons Panel */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-muted hover:text-text-base hover:bg-card-base border border-card-border"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-4.5 h-4.5 text-slate-700" />
              ) : (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-text-muted hover:text-text-base hover:bg-card-base border border-card-border"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (with animation) */}
      {isOpen && (
        <div className="md:hidden border-b border-card-border px-4 pt-2 pb-4 space-y-2 bg-card-base/95 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-accent-blue/10 text-accent-blue font-semibold"
                    : "text-text-muted hover:text-text-base hover:bg-card-border/30"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <a
            href="/pdfs/khushi-bansal-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center space-x-2 w-full mt-4 py-2.5 rounded-lg bg-accent-blue hover:bg-accent-blue-hover text-white text-base font-semibold transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}
