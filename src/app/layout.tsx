import type { Metadata } from 'next';
import { Inter, Merriweather, Lato } from 'next/font/google'; // Import desired fonts
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Background } from '@/components/layout/background'; // Import Background component
import { cn } from '@/lib/utils'; // Import cn utility
import React from 'react'; // Import React for Suspense
import Loading from './loading'; // Import the loading component
import { PageTransition } from '@/components/layout/page-transition'; // Import PageTransition

// Define fonts with appropriate weights and subsets
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Include needed weights
  variable: '--font-sans', // Use CSS variable for sans-serif
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Include needed weights
  variable: '--font-serif', // Use CSS variable for serif
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
      {/* Apply font variables and antialiased using cn */}
      <body
        className={cn(
          'font-sans antialiased relative min-h-screen flex flex-col',
          lato.variable, // Apply sans-serif font variable
          merriweather.variable // Apply serif font variable
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
            <PageTransition>
               {/* Remove main tag here, it's now inside PageTransition */}
               {children}
            </PageTransition>
          </React.Suspense>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
