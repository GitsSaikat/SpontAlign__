
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight, GraduationCap, Users, Briefcase, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function MentorshipPage() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Mentorship & Collaboration
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Fostering the next generation of AI alignment researchers and building bridges within the academic and research communities.
        </p>
      </section>

      {/* "Our Commitment" Section - Updated Design */}
      <section className="relative py-10 md:py-16">
        {/* Image Background - Centered */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl lg:max-w-3xl h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl mx-auto">
            <Image
              src="/images/mentor.png" // User-specified image path
              alt="Our Commitment to Collaboration and Mentorship"
              layout="fill"
              objectFit="cover"
              data-ai-hint="teamwork abstract" 
              className="rounded-xl"
            />
          </div>
        </div>

        {/* "Our Commitment" Text Card - Overlapping and Styled */}
        {/* This div helps center the card and apply the negative margin for overlap */}
        <div className="relative z-10 flex justify-center -mt-20 md:-mt-28 lg:-mt-32 px-4">
          <Card 
            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl 
                       border-2 border-dashed border-primary 
                       transform -rotate-1 hover:-rotate-2 transition-transform duration-300 ease-in-out shadow-xl"
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl text-primary">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                We believe that deep intelligence emerges from interaction where networks of agents, minds, and ideas coming together. That's not just how we think about AI, but also how we operate as a company.
              </p>
              <p>
                We thrive on collaboration. We’re here to help and to be helped, to learn from others, and to build with curious, driven minds. Whether you're an AI enthusiast, researcher, or a builder at heart, we’d love to meet you.
              </p>
              <p>
                Friendship means little when it’s convenient. We’re interested in those who walk the long road with us, those exploring not just what AI is, but what it could become.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Mentorship Programs */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-2"/>
              <CardTitle>Research Internships</CardTitle>
              <CardDescription>For Students</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Gain hands-on experience working alongside our researchers on cutting-edge AI alignment projects. Open to PhD and undergrad/masters students.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full btn-transition btn-hover btn-active">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfSzaQZgen67RH1MxjlbjVskg28_0sdobv-PhqK96fHVQTA-w/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Apply <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2"/>
              <CardTitle>Academic Collaborations</CardTitle>
              <CardDescription>For Institutions & Faculty</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We partner with universities and research labs on joint projects, workshops, and knowledge sharing initiatives. Let's advance the field together.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full btn-transition btn-hover btn-active">
                <Link href="/contact?subject=AcademicCollaboration">
                    Propose Collaboration
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                 <Briefcase className="h-10 w-10 text-primary mb-2"/>
              <CardTitle>Research Team Collaborations</CardTitle>
              <CardDescription>For AI Labs & Independent Groups</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
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
      </section>

       {/* Community Engagement */}
      <section className="bg-secondary rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Community Engagement</h2>
         <div className="max-w-3xl mx-auto text-center text-muted-foreground space-y-4">
            <p>
                SpontAlign actively participates in the broader AI community through conference presentations, open-source contributions, and hosting technical talks and workshops (both online and in-person when possible).
            </p>
             <p>
               Follow our <Link href="/blogs" className="text-primary hover:underline">Blog</Link> and social media channels for announcements about upcoming events and opportunities to engage with our team.
            </p>
         </div>
      </section>

       {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Learning More?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Reach out to discuss potential mentorship or collaboration opportunities. We are always open to connecting with passionate individuals and institutions.
          </p>
          <Button asChild size="lg" className="btn-transition btn-hover btn-active">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>
    </div>
  );
}
