'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Building2 } from "lucide-react"; // Added Building2
import { Button } from "@/components/ui/button"; // Keep for social buttons
import Link from 'next/link'; // Keep for social buttons
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast"; // Keep if other parts of the page might use toasts
import { useEffect } from "react"; // Keep if needed for other effects

const scrollVariants = {
  initial: { opacity: 0, y: 20 },
  inView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  const { toast } = useToast(); // Keep if toast might be used elsewhere on this page

  // Example: Show a toast when the page loads (you can remove this if not needed)
  useEffect(() => {
    // toast({
    //   title: "Contact Us",
    //   description: "We've embedded our Google Form for your convenience.",
    // });
  }, [toast]);

  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSedUiu4mo6afC5tkNH8Cjdgq3WF2l3PX602dux1jGUH7c0W4g/viewform?embedded=true";

  return (
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
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Send className="h-6 w-6" /> Send Us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-w-1 aspect-h-1 md:aspect-w-3 md:aspect-h-4 lg:aspect-w-4 lg:aspect-h-5 min-h-[600px] md:min-h-[700px]">
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
            <p className="text-xs text-muted-foreground mt-2 text-center">
              If you have trouble with the embedded form, you can also access it directly <a href="https://docs.google.com/forms/d/e/1FAIpQLSedUiu4mo6afC5tkNH8Cjdgq3WF2l3PX602dux1jGUH7c0W4g/viewform" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">here</a>.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
           <Card className="shadow-md">
             <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-primary" /> {/* Changed to Building2 */}
                    Contact Information
                </CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                    <h3 className="font-semibold">Our Office</h3>
                    <p className="text-muted-foreground">
                        123 Innovation Drive<br />
                        Tech City, CA 94000<br />
                        United States
                    </p>
                     <div className="mt-2 h-40 w-full bg-muted rounded flex items-center justify-center text-sm text-muted-foreground overflow-hidden">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.306908863011!2d-122.0840!3d37.4220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba024251be6d%3A0xdb008ef809e832f7!2sGoogleplex!5e0!3m2!1sen!2sus!4v1627890998001!5m2!1sen!2sus" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen={true} 
                            loading="lazy"
                            title="Office Location Map (Placeholder)"
                        ></iframe>
                     </div>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <a href="mailto:info@spontalign.com" className="text-primary hover:underline">
                        info@spontalign.com
                    </a><br/>
                     <a href="mailto:partnerships@spontalign.com" className="text-primary hover:underline">
                        partnerships@spontalign.com
                    </a>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                    <h3 className="font-semibold">Call Us (Placeholder)</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                </div>
             </CardContent>
           </Card>

            <Card className="bg-card border shadow-md"> {/* Changed background for better contrast */}
             <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
             </CardHeader>
             <CardContent>
                 <p className="text-muted-foreground mb-4">Follow our progress and join the conversation on social media.</p>
                  <div className="flex items-center space-x-4">
                      <Button variant="outline" size="icon" asChild className="btn-transition btn-hover btn-active">
                         <a href="#" aria-label="SpontAlign on Twitter"> <Twitter className="h-5 w-5" /></a>
                      </Button>
                      <Button variant="outline" size="icon" asChild className="btn-transition btn-hover btn-active">
                          <a href="#" aria-label="SpontAlign on LinkedIn"><Linkedin className="h-5 w-5" /></a>
                      </Button>
                      <Button variant="outline" size="icon" asChild className="btn-transition btn-hover btn-active">
                          <a href="mailto:info@spontalign.com" aria-label="Email SpontAlign"><Mail className="h-5 w-5" /></a>
                      </Button>
                    </div>
             </CardContent>
           </Card>
        </div>
      </motion.div>
    </div>
  );
}