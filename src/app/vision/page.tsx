import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VisionPage() {
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

      {/* Updated Our Mission Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary text-center md:text-left">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground text-center md:text-left">
              To pioneer research and development in AI alignment, ensuring that advanced artificial intelligence systems are safe, transparent, controllable, and robustly aligned with human intentions and ethical principles. We strive to build trustworthy AI that empowers society and mitigates existential risks.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
          {/* Placeholder for Aesthetic Wallpaper */}
          <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Aesthetic Wallpaper Area</p>
          </div>
        </Card>
      </section>

      {/* Long-Term Goals Section (remains the same) */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Long-Term Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Develop Robust Alignment Techniques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Create and validate methods that reliably instill complex human values and intentions into diverse AI architectures.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Advance AI Safety Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Contribute foundational knowledge to understand and prevent unintended behaviors and failure modes in advanced AI.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Foster Global Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Engage with the international research community, policymakers, and the public to promote responsible AI development worldwide.</p>
            </CardContent>
          </Card>
           <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Build Verifiable Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Design AI systems where safety properties and alignment can be formally verified or rigorously empirically tested.</p>
            </CardContent>
          </Card>
           <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Promote Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Develop interpretability tools and techniques to make the decision-making processes of complex AI models understandable.</p>
            </CardContent>
          </Card>
           <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Ethical Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Establish best practices and frameworks for the ethical deployment of aligned AI systems in real-world applications.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Updated Core Values Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Safety First", description: "Prioritizing the safety and well-being of humanity above all else in AI development." },
            { title: "Scientific Rigor", description: "Committing to high standards of research, empirical validation, and intellectual honesty." },
            { title: "Openness & Collaboration", description: "Believing in the power of sharing knowledge and working together to solve complex challenges." },
            { title: "Long-Term Perspective", description: "Focusing on the long-term implications of AI and making decisions that benefit future generations." },
            { title: "Responsibility", description: "Acknowledging our responsibility in shaping the future of AI and acting accordingly." },
            { title: "Integrity", description: "Upholding the highest ethical standards in all our research and development." }
          ].map((value) => (
            <Card key={value.title} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

       {/* Join Our Mission Section (remains the same) */}
       <section className="text-center py-12 bg-secondary rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We are looking for passionate individuals to help us build a safer future with AI. Explore opportunities to collaborate or join our team.
          </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button asChild size="lg" className="btn-transition btn-hover btn-active">
               <Link href="/contact" prefetch={true}>Get Involved</Link>
             </Button>
             <Button asChild variant="outline" size="lg" className="btn-transition btn-hover btn-active">
               <Link href="/research" prefetch={true}>See Our Work</Link>
             </Button>
           </div>
        </section>
    </div>
  );
}
