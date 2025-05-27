
import Image from 'next/image';

export default function DocsPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-12">
      {/* Background Image */}
      <Image
        src="/images/Front.png" // Path relative to public directory
        alt="SpontAlign Toolkit Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 blur-sm opacity-30 dark:opacity-20" // Adjusted opacity
        data-ai-hint="abstract technology code" // Updated hint
        priority // Load image quickly
      />

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 py-10 md:px-10 md:py-16 space-y-8 bg-card/90 dark:bg-card/85 rounded-xl shadow-2xl max-w-3xl">
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-primary">
            SpontAlign Toolkit Documentation
          </h1>
        </section>

        <section className="text-lg text-card-foreground space-y-6">
          <p>
            We're developing a Python library called <strong className="font-semibold text-primary">SpontAlign</strong>—a toolkit designed for evaluating AI systems and streamlining training pipelines for multi-agent systems.
          </p>

          <p>
            SpontAlign includes:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Built-in evaluation protocols for diverse AI models</li>
            <li>An easy-to-use, customizable training pipeline</li>
            <li>A secure sandbox environment for multi-agent interaction and experimentation</li>
          </ul>

          <p>
            Whether you're conducting cutting-edge research or building practical AI applications, SpontAlign helps you prototype, train, and test with clarity and control.
          </p>
          <p className="font-semibold text-primary">
            Stay tuned for more interesting innovations like these.
          </p>
        </section>
      </div>
    </div>
  );
}
