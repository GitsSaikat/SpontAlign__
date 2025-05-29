
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSearchParams } from 'next/navigation';
import { useEffect } from "react";
import { motion } from 'framer-motion';

const scrollVariants = {
  initial: { opacity: 0, y: 20 },
  inView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
   subject: z.string().min(1, { message: "Please select a subject." }),
   inquiryType: z.enum(["General Inquiry", "Enterprise Partnership", "Research Collaboration", "Mentorship Program", "Media Request", "Docs Feedback", "Other"]),
   message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(1000, { message: "Message cannot exceed 1000 characters."}),
});

export default function ContactPage() {
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      inquiryType: "General Inquiry",
      message: "",
    },
  });

   useEffect(() => {
     if (searchParams && searchParams.has('subject')) {
       const subjectParam = searchParams.get('subject');
       if (subjectParam) {
         let mappedInquiryType: z.infer<typeof formSchema>['inquiryType'] = "Other";
         if (subjectParam === "AcademicCollaboration") mappedInquiryType = "Research Collaboration";
         if (subjectParam === "VisitingResearcher") mappedInquiryType = "Research Collaboration";
         if (subjectParam === "DocsFeedback") mappedInquiryType = "Docs Feedback";
         if (subjectParam === "ResearchTeamCollaboration") mappedInquiryType = "Research Collaboration";


         form.setValue('inquiryType', mappedInquiryType);
         form.setValue('subject', `Regarding: ${subjectParam.replace(/([A-Z])/g, ' $1').trim()}`);
       }
     }
   }, [searchParams, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted:", values);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <div className="space-y-12">
      <motion.section
        className="text-center"
        initial="initial"
        whileInView="inView"
        viewport={{ amount: 0.1 }} // Adjusted for top content
        variants={scrollVariants}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Have questions, partnership inquiries, or feedback? We'd love to hear from you.
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="inquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reason for Inquiry</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a reason" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          <SelectItem value="Enterprise Partnership">Enterprise Partnership</SelectItem>
                          <SelectItem value="Research Collaboration">Research Collaboration</SelectItem>
                          <SelectItem value="Mentorship Program">Mentorship Program</SelectItem>
                           <SelectItem value="Media Request">Media Request</SelectItem>
                           <SelectItem value="Docs Feedback">Docs Feedback</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Brief subject of your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your inquiry..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Please provide as much detail as possible.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full btn-transition btn-hover btn-active" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-8">
           <Card className="shadow-md">
             <CardHeader>
                <CardTitle>Contact Information</CardTitle>
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
                     <div className="mt-2 h-32 w-full bg-muted rounded flex items-center justify-center text-sm text-muted-foreground">
                        {/* Placeholder for an embedded map or static map image */}
                        Map Placeholder
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

            <Card className="bg-secondary">
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
                      {/* Assuming GitHub or similar for the third icon, if it's for email use Mail as placeholder or specific icon */}
                      <Button variant="outline" size="icon" asChild className="btn-transition btn-hover btn-active">
                          <a href="#" aria-label="SpontAlign on GitHub"><Mail className="h-5 w-5" /></a>
                      </Button>
                    </div>
             </CardContent>
           </Card>
        </div>
      </motion.div>
    </div>
  );
}
