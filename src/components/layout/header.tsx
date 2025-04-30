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
          {/* SpontAlign Logo SVG */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32" // Adjusted viewBox for a potentially simpler path
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary h-8 w-8" // Use primary color and adjust size
          >
             {/* Simplified path representing the bird/phoenix */}
             <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M16.216 2.60071C14.3849 6.07754 13.6527 10.0445 14.2894 13.906C14.9261 17.7674 16.8481 21.257 19.7436 23.7089C17.9602 24.7594 16.2811 25.9978 14.812 27.364C12.4004 28.9951 10.5683 31.1087 9.44159 33.5578C8.31489 36.007 7.94882 38.7182 8.4032 41.3648C8.85758 44.0114 10.101 46.5121 11.9654 48.6111C12.1265 48.7847 12.2981 48.948 12.4774 49.1C9.94589 46.1292 8.433 42.5986 7.96572 38.8852C7.49844 35.1718 8.09694 31.5084 9.69085 28.1598C11.2848 24.8113 14.1994 22.0647 17.9944 20.3005C21.7894 18.5364 26.2396 18.0102 30.5061 18.8008C34.7727 19.5914 38.5826 21.6669 41.4881 24.7255C44.3936 27.7841 46.2042 31.687 46.6235 35.9198C47.0428 40.1525 45.9958 44.4149 43.7115 48.3258C43.5896 48.536 43.4601 48.7379 43.3238 48.9322C45.6427 45.377 47.1866 41.4056 47.3478 37.2744C47.5089 33.1431 46.2753 29.1658 43.9814 25.7487C41.6875 22.3316 38.4862 19.6977 34.7875 18.1352C31.0888 16.5727 26.9315 16.1338 22.9044 16.8887C18.8772 17.6436 15.359 19.5449 12.6727 22.3492C9.98644 25.1536 8.2771 28.7115 7.74859 32.5149C7.22008 36.3183 7.89915 40.2017 9.68619 43.7046C9.83486 43.9858 9.99114 44.2604 10.1545 44.528L16.216 2.60071Z"
               fill="currentColor"
             />
          </svg>
          <span className="hidden sm:inline">SpontAlign</span>
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
                   {/* SpontAlign Logo SVG */}
                   <svg
                     width="32"
                     height="32"
                     viewBox="0 0 32 32" // Adjusted viewBox for a potentially simpler path
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="text-primary h-8 w-8" // Use primary color and adjust size
                   >
                     {/* Simplified path representing the bird/phoenix */}
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.216 2.60071C14.3849 6.07754 13.6527 10.0445 14.2894 13.906C14.9261 17.7674 16.8481 21.257 19.7436 23.7089C17.9602 24.7594 16.2811 25.9978 14.812 27.364C12.4004 28.9951 10.5683 31.1087 9.44159 33.5578C8.31489 36.007 7.94882 38.7182 8.4032 41.3648C8.85758 44.0114 10.101 46.5121 11.9654 48.6111C12.1265 48.7847 12.2981 48.948 12.4774 49.1C9.94589 46.1292 8.433 42.5986 7.96572 38.8852C7.49844 35.1718 8.09694 31.5084 9.69085 28.1598C11.2848 24.8113 14.1994 22.0647 17.9944 20.3005C21.7894 18.5364 26.2396 18.0102 30.5061 18.8008C34.7727 19.5914 38.5826 21.6669 41.4881 24.7255C44.3936 27.7841 46.2042 31.687 46.6235 35.9198C47.0428 40.1525 45.9958 44.4149 43.7115 48.3258C43.5896 48.536 43.4601 48.7379 43.3238 48.9322C45.6427 45.377 47.1866 41.4056 47.3478 37.2744C47.5089 33.1431 46.2753 29.1658 43.9814 25.7487C41.6875 22.3316 38.4862 19.6977 34.7875 18.1352C31.0888 16.5727 26.9315 16.1338 22.9044 16.8887C18.8772 17.6436 15.359 19.5449 12.6727 22.3492C9.98644 25.1536 8.2771 28.7115 7.74859 32.5149C7.22008 36.3183 7.89915 40.2017 9.68619 43.7046C9.83486 43.9858 9.99114 44.2604 10.1545 44.528L16.216 2.60071Z"
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
