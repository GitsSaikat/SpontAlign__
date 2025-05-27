
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
        <div className="relative max-w-4xl mx-auto"> {/* Container for image and text */}
          {/* Image Background */}
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
             <Image
                src="/images/Mission.png" // Assuming public/images/Mission.png exists
                alt="Conceptual image representing our mission"
                layout="fill"
                objectFit="cover"
                data-ai-hint="mission future concept"
                className="rounded-lg"
             />
             {/* Optional: Add a semi-transparent overlay to improve text readability if needed */}
             {/* <div className="absolute inset-0 bg-black/50 rounded-lg"></div> */}
          </div>

          {/* Our Mission Card (Centered and Overlapping) */}
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8"> {/* Centering wrapper with padding */}
            <Card className="shadow-xl transition-shadow duration-300 flex flex-col
                           bg-card/90 dark:bg-card/80 rounded-lg
                           w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3 max-w-xl"> {/* Adjusted max-width */}
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 md:space-y-4 text-center text-xs sm:text-sm md:text-base"> {/* Adjusted text sizes and spacing */}
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
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center md:text-left">Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {goals.map((goal) => (
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
