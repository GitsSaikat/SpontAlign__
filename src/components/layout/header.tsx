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
    // Use a subtle border, increased vertical padding (py-4), more space below (mb-8 or mb-12)
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-8">
      {/* Reduced padding in container (py-2), max width for content */}
      <div className="container flex h-auto items-center justify-between py-2 max-w-screen-xl" suppressHydrationWarning> {/* Changed py-4 to py-2 */}
        {/* Logo */}
        {/* Added ml-6 for left spacing */}
        <Link href="/" className="flex items-center mr-8 ml-6" suppressHydrationWarning> {/* Added ml-6 */}
           <Image
              src="/images/logo.png" // Path relative to public directory
              alt="SpontAlign Logo"
              width={180} // Set the width of your logo
              height={24} // Adjust height for aspect ratio
              priority // Load logo quickly
              style={{ objectFit: 'contain', height: 'auto' }} // Maintain aspect ratio
              quality={100}
              suppressHydrationWarning // Added due to previous error
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
                    src="/images/logo.png" // Updated path relative to public directory
                    alt="SpontAlign Logo"
                    width={150}
                    height={20}
                    style={{ objectFit: 'contain', height: 'auto' }} // Maintain aspect ratio
                    quality={100}
                    // priority prop removed here as well if needed, but likely fine for mobile menu
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
