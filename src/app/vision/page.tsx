
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function VisionPage() {
  const goals = [
    "Develop Robust Alignment Techniques",
    "Responsible AI development",
    "Foster Global Collaboration",
    "Build Interpretable Systems",
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

      {/* Updated Mission Section - Centered Text Over Image */}
      <section className="mb-16 md:mb-24">
        <div className="relative max-w-4xl mx-auto h-72 md:h-96"> {/* Container for image and text */}
          {/* Image Background */}
          <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
             <Image
                src="/images/Mission.png" 
                alt="Conceptual image representing our mission"
                layout="fill"
                objectFit="cover"
                data-ai-hint="mission future concept"
                className="rounded-xl"
             />
             {/* Pulsating lights */}
            <div className="postmodern-bg-element animate-pulse-green w-32 h-32 rounded-full blur-2xl -left-10 top-1/4 bg-green-500/30 dark:bg-green-400/20"></div>
            <div className="postmodern-bg-element animate-pulse-cyan w-40 h-40 rounded-full blur-2xl -right-10 bottom-1/4 bg-cyan-500/30 dark:bg-cyan-400/20"></div>
            <div className="postmodern-bg-element animate-pulse-teal w-24 h-24 rounded-full blur-xl left-1/3 -bottom-5 bg-teal-500/30 dark:bg-teal-400/20"></div>
          </div>

          {/* Our Mission Card (Centered and Overlapping) */}
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 z-10">
            <Card 
              className="w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3 max-w-xl 
                         bg-card/90 dark:bg-card/85 
                         shadow-xl rounded-lg"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4 text-center text-xs sm:text-sm md:text-base leading-relaxed">
                <p className="text-muted-foreground">
                  We believe the future economy will be primarily AI-driven and we’re building the bridge that connects AI to people. Our mission is to create benevolent AI systems that serve humanity, even if doing so challenges our own company’s interests.
                </p>
                <p className="text-muted-foreground">
                  AI holds the potential to uplift every sector of society, accelerating innovation, solving complex problems, and expanding human capacity. But left unchecked, it could also bring catastrophic risks. That’s why we stand for responsible development, transparent governance, and human-aligned intelligence.
                </p>
                <p className="text-muted-foreground">
                  We envision a transhumanist society, empowered by AI not just smarter, but more conscious, compassionate, and capable. Once this is achieved, our mission will be to explore the deep, dark secrets of the Consciousness and the Universe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goals & Core Values Section - Two Column Layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="group shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border hover:border-accent hover:scale-105 hover:bg-secondary/60 dark:hover:bg-secondary/80">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center md:text-left group-hover:text-foreground transition-colors duration-300 ease-in-out">Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {goals.map((goal) => (
                <li key={goal} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-in-out">{goal}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="group shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border hover:border-accent hover:scale-105 hover:bg-secondary/60 dark:hover:bg-secondary/80">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center md:text-left group-hover:text-foreground transition-colors duration-300 ease-in-out">Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {coreValues.map((value) => (
                <li key={value} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-in-out">{value}</span>
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
