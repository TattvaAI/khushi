export default function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-[var(--color-border)] print:hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-sans text-text-muted">
          &copy; {new Date().getFullYear()} Khushi Bansal. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a 
            href="https://linkedin.com/in/thekhushibansal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-sans text-text-muted hover:text-foreground transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:thekhushibansal.work@gmail.com" 
            className="text-xs font-sans text-text-muted hover:text-foreground transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
