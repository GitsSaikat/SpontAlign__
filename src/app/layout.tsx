import type {Metadata} from 'next';
import {Inter} from 'next/font/google'; // Using Inter as a clean, modern sans-serif font
import './globals.css';
import {Header} from '@/components/layout/header';
import {Footer} from '@/components/layout/footer';
import {Toaster} from '@/components/ui/toaster';
import {Background} from '@/components/layout/background'; // Import Background component
import { cn } from '@/lib/utils'; // Import cn utility

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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        // Apply font-sans and antialiased using cn
        className={cn(
          'font-sans antialiased relative min-h-screen flex flex-col',
          inter.variable // Ensure font variable is applied if needed elsewhere, though Inter() already does this globally usually
        )}
        suppressHydrationWarning // Moved here to target potential body attribute mismatches
      >
        {/* Add the Background component here */}
        <Background />
        {/* Ensure content is above the background */}
        <div className="relative z-10 flex flex-col flex-grow">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
