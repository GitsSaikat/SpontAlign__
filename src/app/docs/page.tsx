
// This page can now be a Server Component as no client-side hooks are used.

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-primary">
          SpontAlign Toolkit Documentation
        </h1>
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
