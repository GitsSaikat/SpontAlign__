'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Building2, Github } from "lucide-react"; // Added Github
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import Image from 'next/image'; // Import Image

const scrollVariants = {
  initial: { opacity: 0, y: 20 },
  inView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Crunchbase SVG Icon (simple version)
const CrunchbaseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.26 15.76V8.24A5.76 5.76 0 0014.49 2.5h-4.98a5.76 5.76 0 00-5.76 5.76v7.52A5.76 5.76 0 009.51 21.5h4.98a5.76 5.76 0 005.77-5.74zm-3.71-1.52a.74.74 0 01-.74.74h-2.04v2.05a.74.74 0 01-1.48 0v-2.05H9.51a.74.74 0 010-1.48h2.78V9.51a.74.74 0 111.48 0v2.77h2.04a.74.74 0 01.74.74z" />
  </svg>
);


export default function ContactPage() {
  const { toast } = useToast();

  useEffect(() => {
    // toast({
    //   title: "Contact Us",
    //   description: "We've embedded our Google Form for your convenience.",
    // });
  }, [toast]);

  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSedUiu4mo6afC5tkNH8Cjdgq3WF2l3PX602dux1jGUH7c0W4g/viewform?embedded=true";

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12">
      <Image
        src="/SpontAlign__/images/contactback.png"
        alt="SpontAlign Contact Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 blur-sm opacity-30 dark:opacity-20"
        data-ai-hint="contact abstract tech"
        priority
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 bg-card/90 dark:bg-card/85 rounded-xl shadow-2xl max-w-5xl w-full">
        <div className="space-y-12">
          <motion.section
            className="text-center"
            initial="initial"
            whileInView="inView"
            viewport={{ amount: 0.1 }}
            variants={scrollVariants}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions, partnership inquiries, or feedback? We'd love to hear from you. Please use the form below.
            </p>
          </motion.section>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial="initial"
            whileInView="inView"
            viewport={{ amount: 0.2 }}
            variants={scrollVariants}
          >
            <Card className="shadow-lg flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Send className="h-6 w-6" /> Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <div className="flex-grow min-h-[600px] md:min-h-[700px]"> {/* Added min-h for better initial rendering */}
                  <iframe
                    src={googleFormEmbedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Contact SpontAlign"
                    className="rounded-md"
                  >
                    Loading…
                  </iframe>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center shrink-0">
                  If you have trouble with the embedded form, you can also access it directly <a href="https://docs.google.com/forms/d/e/1FAIpQLSedUiu4mo6afC5tkNH8Cjdgq3WF2l3PX602dux1jGUH7c0W4g/viewform" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">here</a>.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
               <Card className="shadow-md">
                 <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Building2 className="h-6 w-6 text-primary" />
                        Contact Information
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                        <h3 className="font-semibold">Our Office</h3>
                        <p className="text-muted-foreground">
                            Road no 04, Block I, Bashundhara<br />
                            Dhaka<br />
                            Bangladesh
                        </p>
                         <div className="mt-2 h-40 w-full bg-muted rounded flex items-center justify-center text-sm text-muted-foreground overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d874.1991272497958!2d90.43754988704269!3d23.821047116481832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1748570050248!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{border:0}}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Office Location Map"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                         </div>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <a href="mailto:contact@spontalign.com" className="text-primary hover:underline">
                            contact@spontalign.com
                        </a>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">+8801640570105</p>
                        </div>
                    </div>
                 </CardContent>
               </Card>

                <Card className="bg-card border shadow-md">
                 <CardHeader>
                    <CardTitle>Connect With Us</CardTitle>
                 </CardHeader>
                 <CardContent>
                     <p className="text-muted-foreground mb-4">Follow our progress and join the conversation on social media.</p>
                      <div className="flex items-center space-x-4">
                          <Button variant="outline" size="icon" asChild className="btn-transition btn-hover btn-active">
                             <a href="#" aria-label="SpontAlign on Twitter" > <Twitter className="h-5 w-5" /></a>
                          </Button>
                          <Button variant="outline" size="icon" asChild className="btn-transition btn-hover btn-active">
                              <a href="#" aria-label="SpontAlign on LinkedIn" ><Linkedin className="h-5 w-5" /></a>
                          </Button>
                          <Button variant="outline" size="icon" asChild className="btn-transition btn-hover btn-active">
                              <a href="https://github.com/GitsSaikat" target="_blank" rel="noopener noreferrer" aria-label="SpontAlign on GitHub"><Github className="h-5 w-5" /></a>
                          </Button>
                          <Button variant="outline" size="icon" asChild className="btn-transition btn-hover btn-active">
                              <a href="#" aria-label="SpontAlign on Crunchbase"><CrunchbaseIcon /></a>
                          </Button>
                        </div>
                 </CardContent>
               </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

