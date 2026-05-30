export default function ContactPage() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-center bg-background animate-fade-in">
      <article className="px-6 md:px-12 max-w-4xl mx-auto pt-12 pb-32 w-full">
        <header className="mb-16">
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-8">Contact</h1>
          <div className="h-[1px] w-24 bg-border-strong"></div>
        </header>

        <div className="flex flex-col gap-12">
          <p className="font-sans text-lg text-foreground font-light max-w-2xl">
            I am currently open to full-time opportunities and internships in Equity Research, Investment Banking, and Asset Management. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-xs uppercase tracking-widest text-text-muted">Email</span>
              <a 
                href="mailto:thekhushibansal.work@gmail.com" 
                className="font-serif text-2xl text-foreground hover:text-text-muted transition-colors duration-300"
              >
                thekhushibansal.work@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-sans text-xs uppercase tracking-widest text-text-muted">Network</span>
              <a 
                href="https://linkedin.com/in/thekhushibansal" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-2xl text-foreground hover:text-text-muted transition-colors duration-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
