import type { Metadata } from 'next';
import './globals.css'; // Ensure globals.css (with new font imports) is imported
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Background } from '@/components/layout/background';
import { cn } from '@/lib/utils';
import React from 'react';
import Loading from './loading';
import { PageTransition } from '@/components/layout/page-transition';

// Remove next/font imports for Anton and Abel as we are using Google Fonts via globals.css

export const metadata: Metadata = {
  title: 'SpontAlign - AI Research Startup',
  description:
    'SpontAlign: Pioneering the future of AI through innovative research, enterprise solutions, and mentorship.',
  keywords:
    'AI, Artificial Intelligence, Research, Startup, Technology, Enterprise AI, Machine Learning, Deep Learning, SpontAlign',
  icons: {
    icon: [
      '/images/spontalign_thumbnail.png',
    ],
  },
  openGraph: {
    title: 'SpontAlign - AI Research Startup',
    description: 'Pioneering the future of AI through innovative research, enterprise solutions, and mentorship.',
    images: [
      {
        url: '/images/spontalign_thumbnail.png', // Assuming the image is in public/images
        // You can also specify width and height if known:
         width: 48,
         height: 48,
        alt: 'SpontAlign AI Research Startup',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpontAlign - AI Research Startup',
    description: 'Pioneering the future of AI through innovative research, enterprise solutions, and mentorship.',
    images: ['/images/spontalign_thumbnail.png'], // Assuming the image is in public/images
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        The font variables --font-playfair-display and --font-merriweather are now defined in globals.css
        and applied via tailwind.config.ts (fontFamily.heading and fontFamily.body).
        The body tag will use font-body (Merriweather) by default through Tailwind's base styles.
      */}
      <body
        className={cn(
          'font-body antialiased relative min-h-screen flex flex-col' // font-body will apply Merriweather
          // No need to add font variables here directly anymore
        )}
        suppressHydrationWarning
      >
        <Background />
        <div className="relative z-10 flex flex-col flex-grow">
          <Header />
          <React.Suspense fallback={<Loading />}>
            <PageTransition>
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
