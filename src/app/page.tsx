import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 lg:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
          Pioneering the Future of Alignment
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          SpontAlign is an AI research startup dedicated to building safe, transparent, and beneficial artificial intelligence through cutting-edge research and collaboration.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="btn-transition btn-hover btn-active">
            <Link href="/vision">
              Our Vision <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="btn-transition btn-hover btn-active">
            <Link href="/research">Explore Research</Link>
          </Button>
        </div>
      </section>

      {/* Key Areas Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Our Vision</CardTitle>
            <CardDescription>
              Learn about our mission to align AI with human values for a better future.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              We believe in responsible innovation. Discover our core principles and long-term goals.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-base text-primary btn-transition btn-hover btn-active">
              <Link href="/vision">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Research Highlights</CardTitle>
            <CardDescription>
              Explore our latest publications, projects, and breakthroughs in AI alignment.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              We are pushing the boundaries of AI safety and interpretability. See our contributions.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-base text-primary btn-transition btn-hover btn-active">
              <Link href="/research">
                View Research <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Enterprise Solutions</CardTitle>
            <CardDescription>
              Partner with SpontAlign to integrate safe and reliable AI into your business.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Discover how our expertise can help you leverage AI responsibly and effectively.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-base text-primary btn-transition btn-hover btn-active">
              <Link href="/enterprise">
                Learn About Partnerships <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Placeholder for future content/visuals */}
      <section className="bg-secondary rounded-lg p-8 md:p-12 text-center">
         <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
         <p className="text-muted-foreground mb-6">Follow our journey as we shape the future of AI.</p>
         <Button asChild size="lg" className="btn-transition btn-hover btn-active">
           <Link href="/blogs">
             Read Our Blog <ArrowRight className="ml-2" />
           </Link>
         </Button>
      </section>
    </div>
  );
}