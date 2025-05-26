
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="container space-y-12 py-12 md:space-y-16 lg:space-y-20 md:py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
    >
      <main className="flex flex-col items-center space-y-12 md:space-y-16 lg:space-y-20 bg-background/80 dark:bg-background/90 p-6 md:p-10 rounded-xl shadow-2xl">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-primary">
              Pioneering AI Alignment
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl px-4">
              SpontAlign is an AI research initiative dedicated to building
              safe, transparent, and beneficial AI systems through research and collaboration.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="btn-transition btn-hover">
              <Link href="/vision">
                Explore Our Vision <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-transition btn-hover"
            >
              <Link href="/research">Discover Research</Link>
            </Button>
          </div>
        </section>

        {/* Key Areas Summary */}
        <section className="space-y-6 w-full max-w-5xl">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Key Areas
            </h2>
            <p className="text-muted-foreground">
              Explore the core pillars of our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 dark:bg-card/80">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Our Vision
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Learn about our mission to align AI with human values.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  We believe in responsible innovation. Discover our core
                  principles and long-term goals.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-base text-primary btn-transition btn-hover"
                >
                  <Link href="/vision">
                    Read More{" "}
                    <ArrowRight className="ml-1 h-4 w-4" strokeWidth={3} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 dark:bg-card/80">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Research Highlights
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Explore our latest publications and breakthroughs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  We are pushing the boundaries of AI safety and
                  interpretability. See our contributions.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-base text-primary btn-transition btn-hover"
                >
                  <Link href="/research">
                    View Research{" "}
                    <ArrowRight className="ml-1 h-4 w-4" strokeWidth={3} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 dark:bg-card/80">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Enterprise Solutions
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Partner with SpontAlign for safe and reliable AI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Discover how our expertise can help you leverage AI
                  responsibly.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-base text-primary btn-transition btn-hover"
                >
                  <Link href="/enterprise">
                    Learn More{" "}
                    <ArrowRight className="ml-1 h-4 w-4" strokeWidth={3} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-8 bg-border/50" />

        {/* Stay Updated Section */}
        <section className="bg-secondary/80 dark:bg-secondary/70 rounded-lg p-8 md:p-12 text-center w-full max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-6">
            Follow our journey as we shape the future of AI.
          </p>
          <Button
            asChild
            size="lg"
            className="btn-transition btn-hover"
          >
            <Link href="/blogs">
              Read Our Blog{" "}
              <ArrowRight className="ml-2" strokeWidth={3} />
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
