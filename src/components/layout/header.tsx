'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define navigation links
const navItems = [
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          {/* Placeholder for SVG Logo */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary" // Use primary color for logo
          >
            <path
              d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
              fill="currentColor"
              fillOpacity="0.1"
            />
            <path
              d="M50 15L82.65 32.5V67.5L50 85L17.35 67.5V32.5L50 15Z"
              stroke="currentColor"
              strokeWidth="5"
            />
             <path
              d="M50 40L66.3 50L50 60L33.7 50L50 40Z"
              fill="currentColor"
             />
          </svg>
          <span>SpontAlign</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs bg-background p-4">
             <div className="flex justify-between items-center mb-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                   {/* Placeholder for SVG Logo */}
                   <svg
                     width="32"
                     height="32"
                     viewBox="0 0 100 100"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="text-primary"
                   >
                     <path
                       d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
                       fill="currentColor"
                       fillOpacity="0.1"
                     />
                     <path
                       d="M50 15L82.65 32.5V67.5L50 85L17.35 67.5V32.5L50 15Z"
                       stroke="currentColor"
                       strokeWidth="5"
                     />
                      <path
                       d="M50 40L66.3 50L50 60L33.7 50L50 40Z"
                       fill="currentColor"
                      />
                   </svg>
                   <span>SpontAlign</span>
                 </Link>
                 <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                   <X className="h-6 w-6" />
                   <span className="sr-only">Close Menu</span>
                 </Button>
             </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
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