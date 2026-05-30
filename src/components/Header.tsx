import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-8 px-6 md:px-12 flex justify-between items-center z-50 relative animate-fade-in print:hidden">
      <Link href="/" className="group">
        <span className="font-serif text-xl tracking-tight text-foreground group-hover:opacity-70 transition-opacity duration-300">
          Khushi Bansal
        </span>
      </Link>
      
      <nav className="flex gap-8 items-center">
        <Link 
          href="/reports" 
          className="text-sm font-sans text-foreground/80 hover:text-foreground transition-colors duration-300"
        >
          Research
        </Link>
        <Link 
          href="/resume" 
          className="text-sm font-sans text-foreground/80 hover:text-foreground transition-colors duration-300"
        >
          Resume
        </Link>
        <Link 
          href="/about" 
          className="text-sm font-sans text-foreground/80 hover:text-foreground transition-colors duration-300"
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className="text-sm font-sans text-foreground/80 hover:text-foreground transition-colors duration-300"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
