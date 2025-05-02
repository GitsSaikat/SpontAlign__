import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link"; // Added Link import
import { Button } from "@/components/ui/button";

export default function VisionPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Our Vision: Aligning AI for Humanity
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          At SpontAlign, we envision a future where artificial intelligence acts as a beneficial partner, augmenting human capabilities and upholding our shared values.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <Card className="shadow-md">
          <CardContent className="p-6 md:p-8">
            <p className="text-lg text-center leading-relaxed">
              To pioneer research and development in AI alignment, ensuring that advanced artificial intelligence systems are safe, transparent, controllable, and robustly aligned with human intentions and ethical principles. We strive to build trustworthy AI that empowers society and mitigates existential risks.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Long-Term Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Develop Robust Alignment Techniques</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Create and validate methods that reliably instill complex human values and intentions into diverse AI architectures.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Advance AI Safety Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Contribute foundational knowledge to understand and prevent unintended behaviors and failure modes in advanced AI.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Foster Global Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Engage with the international research community, policymakers, and the public to promote responsible AI development worldwide.</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Build Verifiable Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Design AI systems where safety properties and alignment can be formally verified or rigorously empirically tested.</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Promote Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Develop interpretability tools and techniques to make the decision-making processes of complex AI models understandable.</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Ethical Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Establish best practices and frameworks for the ethical deployment of aligned AI systems in real-world applications.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Core Values</h2>
        <ul className="space-y-4 max-w-2xl mx-auto">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Safety First</h3>
              <p className="text-muted-foreground">Prioritizing the safety and well-being of humanity above all else in AI development.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Scientific Rigor</h3>
              <p className="text-muted-foreground">Committing to high standards of research, empirical validation, and intellectual honesty.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Openness & Collaboration</h3>
              <p className="text-muted-foreground">Believing in the power of sharing knowledge and working together to solve complex challenges.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Long-Term Perspective</h3>
              <p className="text-muted-foreground">Focusing on the long-term implications of AI and making decisions that benefit future generations.</p>
            </div>
          </li>
           <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Responsibility</h3>
              <p className="text-muted-foreground">Acknowledging our responsibility in shaping the future of AI and acting accordingly.</p>
            </div>
          </li>
        </ul>
      </section>

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
