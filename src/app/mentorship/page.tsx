
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight, GraduationCap, Users, Briefcase, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';

const scrollVariants = {
  initial: { opacity: 0, y: 20 },
  inView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MotionCard = motion(Card); // Create a motion-enhanced Card

export default function MentorshipPage() {
  return (
    <div className="space-y-16">
      <motion.section
        className="text-center"
        initial="initial"
        whileInView="inView"
        viewport={{ amount: 0.1 }} 
        variants={scrollVariants}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Mentorship & Collaboration
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Fostering the next generation of AI alignment researchers and building bridges within the academic and research communities.
        </p>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="inView"
        viewport={{ amount: 0.1 }}
        variants={scrollVariants}
      >
        <div 
          className="relative max-w-4xl mx-auto h-72 md:h-96"
          style={{ perspective: '1000px' }} // Added perspective for 3D effect
        >
          <motion.div 
            className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
            whileHover={{
              scale: 1.03,
              rotateX: -3,
              rotateY: 5,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            <Image
              src="/images/mentor.png"
              alt="Our Commitment to Collaboration and Mentorship"
              layout="fill"
              objectFit="cover"
              data-ai-hint="teamwork abstract"
              className="rounded-xl"
            />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 z-10">
            <MotionCard // Using MotionCard here
              className="w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3 max-w-xl
                         bg-card/90 dark:bg-card/85
                         shadow-xl rounded-lg"
              whileHover={{ 
                scale: 1.03,
                rotateX: 5,
                rotateY: -5,
                transition: { duration: 0.3, ease: "easeInOut" }
              }} // 3D hover effect for the card
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl text-primary">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4 text-center text-xs sm:text-sm md:text-base leading-relaxed">
                <p className="text-card-foreground">
                  We believe that deep intelligence emerges from interaction where networks of agents, minds, and ideas coming together. That's not just how we think about AI, but also how we operate as a company.
                </p>
                <p className="text-card-foreground">
                  We thrive on collaboration. We’re here to help and to be helped, to learn from others, and to build with curious, driven minds. Whether you're an AI enthusiast, researcher, or a builder at heart, we’d love to meet you.
                </p>
                <p className="text-card-foreground">
                  Friendship means little when it’s convenient. We’re interested in those who walk the long road with us, those exploring not just what AI is, but what it could become.
                </p>
              </CardContent>
            </MotionCard>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="inView"
        viewport={{ amount: 0.2 }}
        variants={scrollVariants}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="group text-center border hover:border-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-secondary/60 dark:hover:bg-secondary/80">
            <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-2 mx-auto transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[5deg]"/>
              <CardTitle className="group-hover:text-foreground transition-colors duration-300 ease-in-out">Research Internships</CardTitle>
              <CardDescription className="group-hover:text-foreground transition-colors duration-300 ease-in-out">For Students</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300 ease-in-out">
                Gain hands-on experience working alongside our researchers on cutting-edge AI alignment projects. Open to PhD and undergrad/masters students.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full btn-transition btn-hover btn-active">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfSzaQZgen67RH1MxjlbjVskg28_0sdobv-PhqK96fHVQTA-w/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Apply <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="group text-center border hover:border-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-secondary/60 dark:hover:bg-secondary/80">
            <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2 mx-auto transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[5deg]"/>
              <CardTitle className="group-hover:text-foreground transition-colors duration-300 ease-in-out">Academic Collaborations</CardTitle>
              <CardDescription className="group-hover:text-foreground transition-colors duration-300 ease-in-out">For Institutions & Faculty</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300 ease-in-out">
                We partner with universities and research labs on joint projects, workshops, and knowledge sharing initiatives. Let's advance the field together.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full btn-transition btn-hover btn-active">
                <Link href="/contact?subject=AcademicCollaboration">
                    Propose Collaboration
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="group text-center border hover:border-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-secondary/60 dark:hover:bg-secondary/80">
            <CardHeader>
                 <Briefcase className="h-10 w-10 text-primary mb-2 mx-auto transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[5deg]"/>
              <CardTitle className="group-hover:text-foreground transition-colors duration-300 ease-in-out">Research Team Collaborations</CardTitle>
              <CardDescription className="group-hover:text-foreground transition-colors duration-300 ease-in-out">For AI Labs & Independent Groups</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300 ease-in-out">
                We collaborate with external research teams on aligned goals—sharing resources, ideas, and infrastructure to tackle complex challenges in AI. Let’s co-develop solutions that push the boundaries of what’s possible.
              </p>
                <Button asChild variant="outline" size="sm" className="w-full btn-transition btn-hover btn-active">
                <Link href="/contact?subject=ResearchTeamCollaboration">
                    Discuss Collaboration
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section
        className="group bg-card rounded-lg p-6 md:p-8 border hover:border-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-secondary/60 dark:hover:bg-secondary/80"
        initial="initial"
        whileInView="inView"
        viewport={{ amount: 0.1 }}
        variants={scrollVariants}
        animate={{
          scale: [1, 1.015, 1],
          boxShadow: [
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          ],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-primary group-hover:text-primary transition-colors duration-300 ease-in-out">Community Engagement</h2>
         <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-in-out">
                SpontAlign actively participates in the broader AI community through conference presentations, open-source contributions, and hosting technical talks and workshops (both online and in-person when possible).
            </p>
             <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-in-out">
               Follow our <Link href="/blogs" className="text-primary hover:underline">Blog</Link> and social media channels for announcements about upcoming events and opportunities to engage with our team.
            </p>
         </div>
      </motion.section>

       <motion.section
        className="text-center"
        initial="initial"
        whileInView="inView"
        viewport={{ amount: 0.1 }}
        variants={scrollVariants}
       >
          <h2 className="text-3xl font-bold mb-4">Interested in Learning More?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Reach out to discuss potential mentorship or collaboration opportunities. We are always open to connecting with passionate individuals and institutions.
          </p>
          <Button asChild size="lg" className="btn-transition btn-hover btn-active">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.section>
    </div>
  );
}

