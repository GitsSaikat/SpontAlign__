
// This page can now be a Server Component as no client-side hooks are used.
import Image from 'next/image';

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-primary">
          SpontAlign Toolkit Documentation
        </h1>
      </section>

      <section className="flex justify-center mb-12">
        <div className="relative w-full max-w-2xl h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/Front.png" // Path relative to public directory
            alt="SpontAlign Toolkit Conceptual Image"
            layout="fill"
            objectFit="contain" // Use 'contain' to ensure the whole image is visible
            data-ai-hint="toolkit code abstract"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-lg text-muted-foreground space-y-6">
        <p>
          We're developing a Python library called <strong className="font-semibold text-foreground">SpontAlign</strong>—a toolkit designed for evaluating AI systems and streamlining training pipelines for multi-agent systems.
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
        <p className="font-semibold text-foreground">
          Stay tuned for more interesting innovations like these.
        </p>
      </section>
    </div>
  );
}
