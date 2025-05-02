import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight, GraduationCap, Users, BrainCircuit } from "lucide-react";
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

      {/* Program Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Advancing the field of AI alignment requires a collaborative effort and nurturing new talent. SpontAlign is committed to supporting students, researchers, and institutions through various mentorship and collaboration initiatives.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe that open dialogue, shared learning, and diverse perspectives are crucial for tackling the complex challenges of building safe and beneficial AI.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
           <Image
              src="https://picsum.photos/seed/mentorship1/800/600"
              alt="Collaboration illustration"
              layout="fill"
              objectFit="cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
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
                Gain hands-on experience working alongside our researchers on cutting-edge AI alignment projects. Open to PhD and advanced undergrad/masters students.
              </p>
              <Button variant="outline" size="sm" disabled className="w-full btn-transition">
                Applications Closed (Check Back Soon)
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
                <Link href="/contact?subject=AcademicCollaboration" prefetch={true}>
                    Propose Collaboration
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                 <BrainCircuit className="h-10 w-10 text-primary mb-2"/>
              <CardTitle>Visiting Researcher Program</CardTitle>
              <CardDescription>For Experienced Researchers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Spend time at SpontAlign collaborating on specific research questions, leveraging our resources and expertise. By invitation or proposal.
              </p>
                <Button asChild variant="outline" size="sm" className="w-full btn-transition btn-hover btn-active">
                <Link href="/contact?subject=VisitingResearcher" prefetch={true}>
                    Inquire About Visiting
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
               Follow our <Link href="/blogs" className="text-primary hover:underline" prefetch={true}>Blog</Link> and social media channels for announcements about upcoming events and opportunities to engage with our team.
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
            <Link href="/contact" prefetch={true}>
              Contact Us <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>
    </div>
  );
}
