'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight, ExternalLink, Package } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';

const scrollVariants = {
  initial: { opacity: 0, y: 20 },
  inView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const products = [
  {
    id: 'open-deep-research',
    name: 'Open Deep Research',
    description: 'An application for assisting in research by conducting comprehensive research on any topic.',
    imageUrl: '/images/OpenD.png',
    status: 'Live',
    link: 'https://huggingface.co/spaces/AlignAI/Open-Deep-Research',
    dataAiHint: 'ai research tool'
  },
  {
    id: 'deep-research-arxiv',
    name: 'Deep Research Arxiv',
    description: 'Do literature review, Fast, Simple and Reliable.',
    imageUrl: '/images/DeepA.png',
    status: 'Live',
    link: 'https://huggingface.co/spaces/AlignAI/Deep-Research-Arxiv',
    dataAiHint: 'arxiv literature review'
  },
  {
    id: 'agent-ds',
    name: 'Agent DS',
    description: 'Your personal data scientist.',
    imageUrl: '/images/AgentD.png',
    status: 'Coming Soon',
    link: '#',
    dataAiHint: 'data science agent'
  },
  {
    id: 'shikkhok',
    name: 'Shikkhok',
    description: 'Your personal educator.',
    imageUrl: '/images/Shikkhok.png',
    status: 'Coming Soon',
    link: '#',
    dataAiHint: 'ai education tutor'
  }
];

const stayTunedMessage = {
  name: 'Stay Tuned!',
  description: 'Many more interesting applications are coming soon 😊',
  link: '/blogs'
};

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12">
      <Image
        src="/SpontAlign__/images/productsback.png"
        alt="SpontAlign Products Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 blur-sm opacity-30 dark:opacity-20"
        data-ai-hint="product innovation tech"
      />
      <div className="relative z-10 w-full max-w-5xl p-6 md:p-10 bg-card/90 dark:bg-card/85 rounded-xl shadow-2xl">
        <div className="space-y-16">
          <motion.section
            className="text-center"
            initial="initial"
            whileInView="inView"
            viewport={{ amount: 0.1 }}
            variants={scrollVariants}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the tools and platforms developed by SpontAlign to help build and deploy safer, more aligned AI systems.
            </p>
          </motion.section>

          <motion.section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="inView"
            viewport={{ amount: 0.2 }}
            variants={scrollVariants}
          >
            {products.map((product) => (
              <Card
                key={product.id}
                className="group flex flex-col overflow-hidden border hover:border-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-secondary/60 dark:hover:bg-secondary/80"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={product.imageUrl}
                    alt={`${product.name} illustration`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={product.dataAiHint}
                  />
                   {product.status && (
                     <span className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded ${
                       product.status === 'Live' ? 'bg-green-600 text-white' :
                       product.status === 'Beta' ? 'bg-yellow-500 text-black' :
                       product.status === 'Alpha' ? 'bg-blue-500 text-white' :
                       product.status === 'Coming Soon' ? 'bg-gray-500 text-white' :
                       'bg-gray-500 text-white'
                     }`}>
                       {product.status}
                     </span>
                   )}
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 group-hover:text-foreground transition-colors duration-300 ease-in-out">
                    <Package className="h-6 w-6 text-primary transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[5deg] group-hover:text-accent" />
                    {product.name}
                  </CardTitle>
                  <CardDescription className="group-hover:text-foreground transition-colors duration-300 ease-in-out">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                  <Button
                    asChild
                    className="w-full mt-auto btn-transition btn-hover btn-active"
                    disabled={product.status === 'Coming Soon'}
                    variant="outline"
                    size="sm"
                  >
                    <Link
                      href={product.link}
                      prefetch={product.status === 'Live' && product.link.startsWith('/') ? true : false}
                      target={product.status === 'Live' && !product.link.startsWith('/') ? '_blank' : undefined}
                      rel={product.status === 'Live' && !product.link.startsWith('/') ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-center"
                    >
                      {product.status === 'Live' && (
                        <>
                          <ExternalLink className="mr-1 h-4 w-4" />
                          Use it
                        </>
                      )}
                      {product.status === 'Coming Soon' && 'Coming Soon'}
                      {product.status !== 'Live' && product.status !== 'Coming Soon' && (
                        <>
                          Learn More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.section>

          <motion.section
            className="text-center py-8"
            initial="initial"
            whileInView="inView"
            viewport={{ amount: 0.2 }}
            variants={scrollVariants}
          >
            <h2 className="text-3xl font-semibold mb-2">{stayTunedMessage.name}</h2>
            <p className="text-lg text-muted-foreground mb-4">{stayTunedMessage.description}</p>
            <Button asChild variant="link" className="text-primary btn-transition btn-hover btn-active text-lg">
              <Link href={stayTunedMessage.link} prefetch={true}>
                Follow Our Blog for Updates <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.section>

           <motion.section
              className="group bg-card rounded-lg p-8 md:p-12 text-center border hover:border-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-secondary/60 dark:hover:bg-secondary/80"
              initial="initial"
              whileInView="inView"
              viewport={{ amount: 0.2 }}
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
              <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our research and expertise can be tailored to your specific enterprise needs. Let's discuss how we can build a bespoke AI solution together.
              </p>
               <Button asChild size="lg" className="btn-transition btn-hover btn-active hover:bg-card hover:text-primary">
                <Link href="/enterprise" prefetch={true}>
                  Explore Enterprise Partnerships <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.section>
        </div>
      </div>
    </div>
  );
}
