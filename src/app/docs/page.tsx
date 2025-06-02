'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const scrollVariants = {
  initial: { opacity: 0, y: 20 },
  inView: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } },
};

export default function DocsPage() {
  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center py-12"
      initial="initial" 
      whileInView="inView" 
      viewport={{ amount: 0.1 }} // Adjusted for top content
      variants={{ initial: {opacity: 0}, inView: {opacity:1, transition: {duration: 0.5}}}} 
    >
      <Image
        src="/SpontAlign__/images/docsback.png"
        alt="SpontAlign Docs Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 blur-sm opacity-30 dark:opacity-20"
        data-ai-hint="documentation abstract code"
        priority
      />

      <motion.div
        className="relative z-10 container mx-auto px-6 py-10 md:px-10 md:py-16 space-y-8 bg-card/90 dark:bg-card/85 rounded-xl shadow-2xl max-w-3xl"
        initial="initial"
        whileInView="inView" // This will make this specific block animate
        viewport={{ amount: 0.1 }} // Trigger when 10% is visible
        variants={scrollVariants} // Using the defined scrollVariants
      >
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-primary">
            SpontAlign Toolkit Documentation
          </h1>
        </section>

        <section className="text-lg text-card-foreground space-y-6">
          <p>
            We&apos;re developing a Python library called{' '}
            <strong className="font-semibold text-primary">SpontAlign</strong>,
            a toolkit designed for evaluating AI systems and streamlining
            training pipelines for multi-agent systems.
          </p>

          <p>SpontAlign includes:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Built-in evaluation protocols for diverse AI models</li>
            <li>An easy-to-use, customizable training pipeline</li>
            <li>
              A secure sandbox environment for multi-agent interaction and
              experimentation
            </li>
          </ul>

          <p>
            Whether you&apos;re conducting cutting-edge research or building
            practical AI applications, SpontAlign helps you prototype, train,
            and test with clarity and control.
          </p>
          <p className="font-semibold text-primary">
            Stay tuned for more interesting innovations like these.
          </p>
        </section>
      </motion.div>
    </motion.div>
  );
}
