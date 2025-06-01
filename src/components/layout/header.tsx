
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

// Define navigation links - Export this array
export const navItems = [
  { href: '/vision', label: 'Our Vision' },
  { href: '/research', label: 'Research' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/products', label: 'Products' },
  { href: '/mentorship', label: 'Mentorship' },
  { href: '/docs', label: 'Docs' },
  { href: '/blogs', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Use a subtle border, minimal vertical padding (py-1), no space below (mb-0)
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Minimal padding in container (py-1), max width for content */}
      <div className="container flex h-auto items-center justify-between py-2 max-w-screen-xl" suppressHydrationWarning> {/* Thin vertical padding */}
        {/* Logo */}
        {/* Added ml-6 for left spacing */}
        <Link
          href="/"
          className="flex items-center mr-8 ml-6" // Removed transition classes
          suppressHydrationWarning
        >
           <Image
              src="/images/logo_up.png" // Path relative to public directory
              alt="SpontAlign Logo"
              width={180} // Set the width of your logo
              height={24} // Adjust height for aspect ratio
              style={{ objectFit: 'contain' }}
              quality={100}
              suppressHydrationWarning
           />
        </Link>

        {/* Desktop Navigation - Increased spacing (space-x-8), use sans-serif font */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              // Use font-body, more muted text, subtle hover
              className="text-base font-body text-muted-foreground transition-colors hover:text-foreground"
              
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Trigger - Button style might need adjustment in globals.css or here */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            {/* Use a minimal ghost button */}
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          {/* Mobile Menu - Increased padding, sans-serif font */}
          <SheetContent side="left" className="w-full max-w-xs bg-background p-6">
             <div className="flex justify-between items-center mb-8"> {/* Increased bottom margin */}
                 <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)} suppressHydrationWarning>
                  <Image
                    src="/images/logo_up.png"
                    alt="SpontAlign Logo"
                    width={150}
                    height={20}
                    style={{ objectFit: 'contain' }}
                    quality={100}
                    suppressHydrationWarning
                    />
                 </Link>
                 <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground">
                   <X className="h-6 w-6" />
                   <span className="sr-only">Close Menu</span>
                 </Button>
             </div>
            {/* Increased spacing, use sans-serif */}
            <nav className="flex flex-col space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  // Larger text, font-body, clearer indication of current page might be needed
                  className="text-lg font-body font-medium text-foreground transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                  
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
