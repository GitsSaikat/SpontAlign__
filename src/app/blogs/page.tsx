
// This page can now be a Server Component as no client-side hooks are used.
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'; // Import the Image component
import Link from 'next/link'; // Keep Link if you want to use it for internal navigation, for external, <a> is fine.

export default function BlogsPage() {
  const mediumBlogUrl = "https://medium.com/@saikatbarua1210";

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <header className="mb-12">
        <div className="text-center">
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

      {/* Image Section */}
      <section className="mb-12 flex justify-center">
        <div className="relative w-full max-w-3xl h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/blog.png" // Path relative to public directory
            alt="SpontAlign Blog Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            data-ai-hint="technology blog abstract"
            priority
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <div className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto space-y-6">
            <p>
              To explore more, please visit the link below and dive into our collection of insights, ideas, and explorations:
            </p>
            <div className="flex items-center justify-center space-x-3 py-2">
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
            </div>
            <p>
              Let your curiosity lead the way.
            </p>
        </div>
      </section>

      {/* Optional: You could add an image or a decorative element here if desired */}
      {/*
      <section className="text-center mt-12">
        <Button asChild size="lg">
          <Link href={mediumBlogUrl} target="_blank" rel="noopener noreferrer">
            Visit Our Medium Blog <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
      */}
    </div>
  );
}
