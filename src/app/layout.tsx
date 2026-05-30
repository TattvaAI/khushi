import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Khushi Bansal | Equity Research & Financial Valuation Portfolio",
    template: "%s | Khushi Bansal Equity Research"
  },
  description: "Equity research portfolio showcasing valuation reports (Nestlé India, Waaree Energies, Semaglutide patent cliff), Comparable Company Analysis (CCA), and investment theses.",
  keywords: ["equity research", "financial valuation", "comparable company analysis", "market research", "investment analyst", "Nestle India", "Waaree Energies", "Semaglutide", "Walford Capitals"],
  authors: [{ name: "Khushi Bansal" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC script for seamless theme loading */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error("Theme reading failed:", e);
                }
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-bg-base text-text-base selection:bg-accent-blue/20 antialiased">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
