"use client";

import { Download, Printer } from "lucide-react";

interface ReportControlsProps {
  pdfPath: string;
}

export default function ReportControls({ pdfPath }: ReportControlsProps) {
  return (
    <div className="flex gap-6">
      <button 
        onClick={() => typeof window !== "undefined" && window.print()}
        className="inline-flex items-center gap-3 text-sm font-sans tracking-wide uppercase text-foreground hover:text-text-muted transition-colors duration-300 cursor-pointer"
      >
        <Printer className="w-4 h-4" strokeWidth={1.5} />
        <span>Print Analysis</span>
      </button>
      <a 
        href={pdfPath} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 text-sm font-sans tracking-wide uppercase text-foreground hover:text-text-muted transition-colors duration-300"
      >
        <span>Download Original PDF</span>
        <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
      </a>
    </div>
  );
}
