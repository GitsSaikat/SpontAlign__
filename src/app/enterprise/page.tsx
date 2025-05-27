
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight, Check, Building } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';

const useCasesData = [
  {
    title: "Safe Customer Service AI",
    description: "Developing chatbots and virtual assistants that are helpful, harmless, and honest in customer interactions.",
    fmWhileHover: { scale: 1.05 },
    iconHoverClass: "group-hover:rotate-[15deg]",
    bgHoverClass: "group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:via-background group-hover:to-accent/10",
    textHoverClass: "group-hover:text-foreground",
  },
  {
    title: "Reliable Content Moderation",
    description: "Building AI systems for content filtering and moderation that accurately reflect complex guidelines.",
    fmWhileHover: { scale: 1.03 },
    iconHoverClass: "group-hover:scale-110",
    bgHoverClass: "group-hover:bg-gradient-to-r group-hover:from-secondary/70 group-hover:via-background group-hover:to-secondary/70",
    textHoverClass: "group-hover:text-foreground", // Deeper shade of blue/gray is hard with theme, using foreground
    extraContainerClass: "group-hover:shadow-xl",
  },
  {
    title: "Trustworthy Financial Modeling",
    description: "Creating AI for financial analysis and prediction with enhanced robustness and interpretability.",
    fmWhileHover: { scale: 1.03 }, // scaleX might cause reflow, using uniform scale
    iconHoverClass: "group-hover:scale-125",
    bgHoverClass: "group-hover:bg-gradient-to-r group-hover:from-accent/20 group-hover:via-background group-hover:to-primary/20", // Green/gold tones
    textHoverClass: "group-hover:text-foreground",
  },
  {
    title: "Ethical Recommender Systems",
    description: "Designing recommendation engines that avoid manipulative patterns and promote user well-being.",
    fmWhileHover: { y: -5 },
    iconHoverClass: "group-hover:animate-spin-slow", // spin-slow needs to be defined or use Framer for continuous
    bgHoverClass: "group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:via-background group-hover:to-accent/5", // Soft pastels
    textHoverClass: "group-hover:text-foreground",
  },
  {
    title: "Robust Autonomous Systems",
    description: "Ensuring AI agents in robotics or control systems operate safely and according to intended goals.",
    fmWhileHover: { rotateX: 3, rotateY: -3, scale: 1.02 }, // Subtle 3D tilt
    iconHoverClass: "group-hover:scale-110", // Rhythmic scaling is complex, simple scale for now
    bgHoverClass: "group-hover:bg-gradient-to-br group-hover:from-muted/50 group-hover:via-background group-hover:to-muted/30", // Metallic/silver tones
    textHoverClass: "group-hover:text-foreground",
  },
  {
    title: "Fairness in AI Decision-Making",
    description: "Auditing and mitigating bias in AI systems used for hiring, lending, or other critical decisions.",
    fmWhileHover: { scale: 1.02 },
    iconHoverClass: "group-hover:scale-110", // Rhythmic scaling, simple scale
    bgHoverClass: "group-hover:bg-gradient-to-br group-hover:from-accent/10 group-hover:via-background group-hover:to-primary/10", // Purple/pink tones
    textHoverClass: "group-hover:text-foreground",
    extraContainerClass: "group-hover:shadow-[0_0_15px_1px_hsl(var(--accent))]", // Subtle glow
  },
];


export default function EnterprisePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-blue-700 dark:from-primary/80 dark:to-blue-900 text-primary-foreground py-16 md:py-24 px-6 md:px-12 text-center">
         <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
         <div className="relative z-10">
            <Building className="h-16 w-16 mx-auto mb-4 text-white/80" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Partner with SpontAlign for Responsible AI Integration
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Connect with us we'll help you design and develop the AI components your products and services need. Whether you're enhancing existing features or building something entirely new, we guide you through the process.
            <br /><br />
            We'll also support your transition to becoming an AI-friendly business, with clear, honest advice. If AI isn't the right solution for your goals, we'll tell you.
            <br /><br />
            Let’s explore what AI can (and can’t) do for you together.
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
          <Card className="group text-center border hover:border-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-secondary/60 dark:hover:bg-secondary/80">
            <CardHeader>
               <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-3 h-12 w-12 text-primary transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[5deg]"
               >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M12 20h.01"/><path d="M10 4h4"/><path d="M10 8h4"/><path d="M10 12h4"/><path d="M10 16h4"/>
               </motion.svg>
              <CardTitle>Custom AI Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-in-out">Tailored development of AI models and systems incorporating state-of-the-art alignment techniques for your specific use case.</p>
            </CardContent>
          </Card>
          <Card className="group text-center border hover:border-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-secondary/60 dark:hover:bg-secondary/80">
            <CardHeader>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-3 h-12 w-12 text-primary transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[5deg]"
              >
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </motion.svg>
              <CardTitle>Alignment Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-in-out">Expert guidance on integrating safety and alignment best practices into your existing AI pipelines and strategies.</p>
            </CardContent>
          </Card>
          <Card className="group text-center border hover:border-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-secondary/60 dark:hover:bg-secondary/80">
            <CardHeader>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-3 h-12 w-12 text-primary transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[5deg]"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
               </motion.svg>
              <CardTitle>Safety Audits & Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-in-out">Rigorous assessment of your AI systems to identify potential risks, biases, and alignment failures.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Potential Use Cases */}
      <section className="bg-background rounded-lg p-8 md:p-12"> {/* Changed from bg-secondary to allow item backgrounds to pop */}
        <h2 className="text-3xl font-bold mb-8 text-center">Potential Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCasesData.map((item) => (
            <motion.div
              key={item.title}
              className={`group flex items-start gap-3 p-4 rounded-lg shadow-sm border border-border transition-all duration-300 ease-in-out hover:shadow-lg ${item.bgHoverClass || ''} ${item.extraContainerClass || ''}`}
              whileHover={item.fmWhileHover}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Check className={`h-6 w-6 text-primary flex-shrink-0 mt-1 transition-transform duration-300 ease-in-out ${item.iconHoverClass}`} />
              <div>
                <h3 className={`font-semibold transition-colors duration-300 ease-in-out ${item.textHoverClass || 'group-hover:text-foreground'}`}>
                  {item.title}
                </h3>
                <p className={`text-muted-foreground transition-colors duration-300 ease-in-out ${item.textHoverClass ? (item.textHoverClass.includes("foreground") ? `${item.textHoverClass}/80` : item.textHoverClass) : 'group-hover:text-foreground/90'}`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
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
