import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

// Crunchbase SVG Icon (simple version from contact page)
const CrunchbaseIcon = () => (
  <svg
    width="20" // Matches h-5 w-5 (20px)
    height="20" // Matches h-5 w-5 (20px)
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="public/images/crunchbase.jpg"
    className="h-5 w-5" // Explicitly set size for consistency
  >
    <path d="M20.26 15.76V8.24A5.76 5.76 0 0014.49 2.5h-4.98a5.76 5.76 0 00-5.76 5.76v7.52A5.76 5.76 0 009.51 21.5h4.98a5.76 5.76 0 005.77-5.74zm-3.71-1.52a.74.74 0 01-.74.74h-2.04v2.05a.74.74 0 01-1.48 0v-2.05H9.51a.74.74 0 010-1.48h2.78V9.51a.74.74 0 111.48 0v2.77h2.04a.74.74 0 01.74.74z" />
  </svg>
);

export function Footer() {
  return (
    // Subtle top border, generous padding
    <footer className="border-t border-border/50 bg-background mt-16"> {/* Added margin-top */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between max-w-screen-xl">
        {/* Copyright - Use sans-serif, muted color */}
        <div className="text-sm font-sans text-muted-foreground mb-6 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} SpontAlign AI Research Lab. All rights reserved.
        </div>

        {/* Navigation Links - Use sans-serif, increased gap, subtle hover */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-6 md:mb-0">
          <Link href="/privacy-policy" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors" prefetch={true}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors" prefetch={true}>
            Terms of Service
          </Link>
           <Link href="/contact" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors" prefetch={true}>
            Contact Us
          </Link>
        </nav>

        {/* Social Icons - Muted color, subtle hover */}
        <div className="flex items-center space-x-5">
          {/* Replace # with actual social media links */}
          <a href="#" aria-label="SpontAlign on Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="SpontAlign on LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/GitsSaikat"
            aria-label="SpontAlign on GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="#" // Replace with your Crunchbase profile URL
            aria-label="SpontAlign on Crunchbase"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CrunchbaseIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
