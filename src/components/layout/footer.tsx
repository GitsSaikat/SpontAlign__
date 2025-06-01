import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

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
          <Link href="#" aria-label="SpontAlign on Twitter" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="SpontAlign on LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
            <Linkedin className="h-5 w-5" />
          </Link>
          <a
            href="https://github.com/GitsSaikat"
            aria-label="SpontAlign on GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
