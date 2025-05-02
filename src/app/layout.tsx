import type { Metadata } from 'next';
// Import Anton for headings and Abel for body text
import { Anton, Abel } from 'next/font/google';
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
const anton = Anton({
  subsets: ['latin'],
  weight: ['400'], // Anton only has 400 weight
  variable: '--font-heading', // Use CSS variable for heading font
});

const abel = Abel({
  subsets: ['latin'],
  weight: ['400'], // Abel only has 400 weight
  variable: '--font-body', // Use CSS variable for body font
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
          'font-body antialiased relative min-h-screen flex flex-col', // Use font-body (Abel) as default
          anton.variable, // Apply heading font variable
          abel.variable // Apply body font variable
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
