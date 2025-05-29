
'use client';

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
import { motion } from 'framer-motion';
import TypingHeading from '@/components/common/typing-heading';
import Image from 'next/image';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  })
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const MotionButton = motion(Button);
const MotionCard = motion(Card);

export default function Home() {
  return (
    <div
      className="container space-y-12 py-12 md:space-y-16 lg:space-y-20 md:py-16 lg:py-20"
    >
      <main className="flex flex-col items-center space-y-12 md:space-y-16 lg:space-y-20">
        {/* New Hero Structure with Image and Overlapping Content */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ perspective: '1000px' }}> {/* Added perspective for 3D effects */}
          {/* The new image */}
          <motion.div // Wrapper for image 3D hover effect
            className="relative h-64 md:h-80 lg:h-96 w-full -mb-[9.5rem] md:-mb-[12rem] lg:-mb-[14.5rem]" // Updated negative margin-bottom
            whileHover={{
              scale: 1.03,
              rotateX: 5,
              rotateY: -5,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            <Image
              src="/images/home.png"
              alt="SpontAlign abstract background"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
              data-ai-hint="technology abstract design"
              priority
            />
          </motion.div>

          {/* Overlapping Hero Content Section */}
          <motion.section
            className="relative z-10 mx-auto max-w-3xl bg-card/95 dark:bg-card/90 p-6 md:p-10 rounded-xl shadow-2xl border-2 border-dashed border-primary transform -rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col items-center text-center space-y-6"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            whileHover={{ 
              scale: 1.02,
              rotateX: -3,
              rotateY: 3,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            <div className="space-y-6">
              <TypingHeading
                text="Align Spontaneously"
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-primary"
                typingSpeed={70}
              />
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground"
                variants={itemVariants}
              >
                SpontAlign is an AI research initiative dedicated to building
                safe, transparent, and beneficial AI systems through research and collaboration.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={itemVariants}
            >
              <MotionButton
                asChild
                size="lg"
                className="btn-transition"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/vision">
                  Explore Our Vision <ArrowRight className="ml-2" />
                </Link>
              </MotionButton>
              <MotionButton
                asChild
                variant="outline"
                size="lg"
                className="btn-transition"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/research">Discover Research</Link>
              </MotionButton>
            </motion.div>
          </motion.section>
        </div>

        {/* Key Areas Summary */}
        <motion.section
          className="space-y-6 w-full max-w-5xl"
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Key Areas
            </h2>
            <p className="text-muted-foreground">
              Explore the core pillars of our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Our Vision", desc: "Learn about our mission to align AI with human values.", para: "We believe in responsible innovation. Discover our core principles and long-term goals.", link: "/vision", linkText: "Read More" },
              { title: "Research Highlights", desc: "Explore our latest publications and breakthroughs.", para: "We are pushing the boundaries of AI safety and interpretability. See our contributions.", link: "/research", linkText: "View Research" },
              { title: "Enterprise Solutions", desc: "Partner with SpontAlign for safe and reliable AI.", para: "Discover how our expertise can help you leverage AI responsibly.", link: "/enterprise", linkText: "Learn More" }
            ].map((item, index) => (
              <MotionCard
                key={item.title}
                className="shadow-lg transition-shadow duration-300 bg-card/90 dark:bg-card/80"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                custom={index * 0.15} 
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-primary">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    {item.para}
                  </p>
                  <MotionButton
                    asChild
                    variant="link"
                    className="p-0 h-auto text-base text-primary btn-transition"
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    <Link href={item.link}>
                      {item.linkText}{" "}
                      <ArrowRight className="ml-1 h-4 w-4" strokeWidth={3} />
                    </Link>
                  </MotionButton>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </motion.section>

        <Separator className="my-8 bg-border/50" />

        {/* Stay Updated Section */}
        <motion.section
          className="bg-secondary/80 dark:bg-secondary/70 rounded-lg p-8 md:p-12 text-center w-full max-w-3xl"
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-6">
            Follow our journey as we shape the future of AI.
          </p>
          <MotionButton
            asChild
            size="lg"
            className="btn-transition"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/blogs">
              Read Our Blog{" "}
              <ArrowRight className="ml-2" strokeWidth={3} />
            </Link>
          </MotionButton>
        </motion.section>
      </main>
    </div>
  );
}
