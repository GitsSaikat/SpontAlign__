import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react'; // Example social icons

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} SpontAlign. All rights reserved.
        </div>
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-4 md:mb-0">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
           <Link href="/contact" className="hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {/* Replace # with actual social media links */}
          <Link href="#" aria-label="SpontAlign on Twitter" className="hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="SpontAlign on LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="SpontAlign on GitHub" className="hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}