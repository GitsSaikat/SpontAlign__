import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight, Check, Building } from "lucide-react";
import Image from "next/image";

export default function EnterprisePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-blue-700 dark:from-primary/80 dark:to-blue-900 text-primary-foreground py-16 md:py-24 px-6 md:px-12 text-center">
         <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
         <div className="relative z-10">
            <Building className="h-16 w-16 mx-auto mb-4 text-white/80" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Partner with SpontAlign for Responsible AI Integration
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Leverage our expertise in AI alignment and safety to build trustworthy, reliable, and effective AI solutions for your business challenges.
            </p>
            <Button asChild size="lg" variant="secondary" className="btn-transition btn-hover btn-active text-primary hover:bg-white/90">
            <Link href="/contact">
                Discuss Your Needs <ArrowRight className="ml-2" />
            </Link>
            </Button>
         </div>
      </section>


      {/* How We Partner */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">How We Partner with Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 h-12 w-12 text-primary"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M12 20h.01"/><path d="M10 4h4"/><path d="M10 8h4"/><path d="M10 12h4"/><path d="M10 16h4"/></svg>
              <CardTitle>Custom AI Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Tailored development of AI models and systems incorporating state-of-the-art alignment techniques for your specific use case.</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 h-12 w-12 text-primary"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
              <CardTitle>Alignment Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Expert guidance on integrating safety and alignment best practices into your existing AI pipelines and strategies.</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 h-12 w-12 text-primary"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              <CardTitle>Safety Audits & Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Rigorous assessment of your AI systems to identify potential risks, biases, and alignment failures.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Potential Use Cases */}
      <section className="bg-secondary rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Potential Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Safe Customer Service AI</h3>
              <p className="text-muted-foreground">Developing chatbots and virtual assistants that are helpful, harmless, and honest in customer interactions.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Reliable Content Moderation</h3>
              <p className="text-muted-foreground">Building AI systems for content filtering and moderation that accurately reflect complex guidelines.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Trustworthy Financial Modeling</h3>
              <p className="text-muted-foreground">Creating AI for financial analysis and prediction with enhanced robustness and interpretability.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Ethical Recommender Systems</h3>
              <p className="text-muted-foreground">Designing recommendation engines that avoid manipulative patterns and promote user well-being.</p>
            </div>
          </div>
           <div className="flex items-start gap-3">
            <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Robust Autonomous Systems</h3>
              <p className="text-muted-foreground">Ensuring AI agents in robotics or control systems operate safely and according to intended goals.</p>
            </div>
          </div>
           <div className="flex items-start gap-3">
            <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Fairness in AI Decision-Making</h3>
              <p className="text-muted-foreground">Auditing and mitigating bias in AI systems used for hiring, lending, or other critical decisions.</p>
            </div>
          </div>
        </div>
      </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Safer AI Together?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's explore how SpontAlign's expertise can enhance your AI initiatives. Contact us today for a consultation.
          </p>
          <Button asChild size="lg" className="btn-transition btn-hover btn-active">
            <Link href="/contact">
              Contact Enterprise Team <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>
    </div>
  );
}