import type {Metadata} from 'next';
import {Inter} from 'next/font/google'; // Using Inter as a clean, modern sans-serif font
import './globals.css';
import {Header} from '@/components/layout/header';
import {Footer} from '@/components/layout/footer';
import {Toaster} from '@/components/ui/toaster';
import {Background} from '@/components/layout/background'; // Import Background component
import { cn } from '@/lib/utils'; // Import cn utility
import React from 'react'; // Import React for Suspense
import Loading from './loading'; // Import the loading component

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // Use CSS variable for font
});

export const metadata: Metadata = {
  title: 'SpontAlign - AI Research Startup',
  description:
    'SpontAlign: Pioneering the future of AI through innovative research, enterprise solutions, and mentorship.',
  keywords:
    'AI, Artificial Intelligence, Research, Startup, Technology, Enterprise AI, Machine Learning, Deep Learning, SpontAlign',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply font-sans and antialiased using cn */}
      <body
        className={cn(
          'font-sans antialiased relative min-h-screen flex flex-col',
          inter.variable // Ensure font variable is applied
        )}
        suppressHydrationWarning // Add suppressHydrationWarning to body as well
      >
        {/* Add the Background component here */}
        <Background />
        {/* Ensure content is above the background */}
        <div className="relative z-10 flex flex-col flex-grow">
          <Header />
          {/* Use Suspense to show loading UI during navigation */}
          <React.Suspense fallback={<Loading />}>
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
          </React.Suspense>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
