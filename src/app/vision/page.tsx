
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function VisionPage() {
  const longTermGoals = [
    "Develop Robust Alignment Techniques",
    "Advance AI Safety Research",
    "Foster Global Collaboration",
    "Build Verifiable Systems",
    "Promote Transparency",
    "Ethical Deployment",
  ];

  const coreValues = [
    "Safety First",
    "Scientific Rigor",
    "Openness & Collaboration",
    "Long-Term Perspective",
    "Responsibility",
    "Integrity",
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Our Vision: Aligning AI for Humanity
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          At SpontAlign, we envision a future where artificial intelligence acts as a beneficial partner, augmenting human capabilities and upholding our shared values.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary text-center md:text-left">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-lg text-muted-foreground text-center md:text-left">
              In the future, the economy will be primarily AI-driven; our company aims to create a bridge between AI and people. We want to create Benevolent AI systems that benefit humanity even when they clash with our company values. We aim to create a transhumanist society empowered by AI systems. Once achieved, our mission will be to explore the deep, dark secrets of the Consciousness and the Universe.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-0 overflow-hidden">
          <div className="relative w-full h-64 md:h-full bg-muted rounded-lg" data-ai-hint="abstract technology">
             <Image
                src="https://placehold.co/800x600.png"
                alt="Abstract Technology Wallpaper"
                layout="fill"
                objectFit="cover"
                data-ai-hint="abstract technology"
             />
          </div>
        </Card>
      </section>

      {/* Long-Term Goals & Core Values Section - Two Column Layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center md:text-left">Long-Term Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {longTermGoals.map((goal) => (
                <li key={goal} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{goal}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center md:text-left">Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {coreValues.map((value) => (
                <li key={value} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

       {/* Join Our Mission Section */}
       <section className="text-center py-12 bg-secondary rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We are looking for passionate individuals to help us build a safer future with AI. Explore opportunities to collaborate or join our team.
          </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button asChild size="lg" className="btn-transition btn-hover btn-active">
               <Link href="/contact">Get Involved</Link>
             </Button>
             <Button asChild variant="outline" size="lg" className="btn-transition btn-hover btn-active">
               <Link href="/research">See Our Work</Link>
             </Button>
           </div>
        </section>
    </div>
  );
}
