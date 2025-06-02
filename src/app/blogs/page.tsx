'use client'; // Ensure this page is a client component for Framer Motion

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

const scrollVariants = {
  initial: { opacity: 0, y: 20 },
  inView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogsPage() {
  const mediumBlogUrl = "https://medium.com/@saikatbarua1210";

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12">
      <Image
        src="/SpontAlign__/images/blogback.png"
        alt="SpontAlign Blog Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 blur-sm opacity-30 dark:opacity-20"
        data-ai-hint="technology blog abstract"
        priority
      />

      <motion.div
        className="relative z-10 container mx-auto px-6 py-10 md:px-10 md:py-16 space-y-12 bg-card/90 dark:bg-card/85 rounded-xl shadow-2xl max-w-4xl text-center"
        initial="initial"
        whileInView="inView"
        viewport={{ amount: 0.1 }} // Adjusted for top content
        variants={scrollVariants}
      >
        <header className="mb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-primary">
              SpontAlign Blog
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto space-y-6">
              <p>
                In our blog, we explore how to be responsible with AI and examine the societal impacts of artificial intelligence. We cover the latest trends in AI research and development, and reflect on what they mean for the future.
              </p>
              <p>
                Our writing also delves into the deeper questions: the philosophy of consciousness and AI, and the timeless inquiries that drive human curiosity—Where do we come from? What are we? Where are we going?
              </p>
            </div>
          </div>
        </header>

        <section>
          <div className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto space-y-6">
            <p>
              To explore more, please visit the link below and dive into our collection of insights, ideas, and explorations:
            </p>
            <motion.div
              className="flex items-center justify-center space-x-3 py-2"
              style={{ perspective: '800px' }}
              whileHover={{ scale: 1.1, rotateX: 10, rotateY: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <ChevronRight className="h-6 w-6 text-primary animate-nudge-right" />
              <a
                href={mediumBlogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold break-all text-2xl"
              >
                Epoch
              </a>
              <ChevronLeft className="h-6 w-6 text-primary animate-nudge-left" />
            </motion.div>
            <p>
              Let your curiosity lead the way.
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
