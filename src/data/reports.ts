export interface Report {
  title: string;
  subtitle: string;
  date: string;
  target: string;
  recommendation: string;
  slug: string;
  pdfPath: string;
  isNative: boolean;
}

export const reportsData: Report[] = [
  {
    title: "Nestle India",
    subtitle: "Capitalizing on Rural Resurgence and Premiumization",
    date: "March 2025",
    target: "INR 1,587.5 to 1,987.5",
    recommendation: "SELL",
    slug: "nestle-india",
    pdfPath: "/pdfs/nestle-research-report.pdf",
    isNative: true,
  },
  {
    title: "Waaree Energies",
    subtitle: "Riding the Solar Wave with Robust Capacity Expansion",
    date: "June 2025",
    target: "INR 2,656.43 to 3,288.32",
    recommendation: "HOLD",
    slug: "waaree-energies",
    pdfPath: "/pdfs/waaree-energies-research-report.pdf",
    isNative: true,
  },
  {
    title: "Semaglutide & The Patent Cliff",
    subtitle: "Navigating the Future of GLP-1 and Weight Loss Drugs",
    date: "March 2026",
    target: "Industry",
    recommendation: "ANALYSIS",
    slug: "semaglutide-patent-cliff",
    pdfPath: "/pdfs/semaglutide-patent-cliff-report.pdf",
    isNative: true,
  }
];

export const getReportBySlug = (slug: string): Report | undefined => {
  return reportsData.find(report => report.slug === slug);
};
