
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight, ExternalLink, Package } from "lucide-react";
import Image from "next/image";

// Updated Product Data
const products = [
  {
    id: 'open-deep-research',
    name: 'Open Deep Research',
    description: 'An application for assisting in research by conducting comprehensive research on any topic.',
    imageUrl: '/images/OpenD.png', // Updated image path
    status: 'Live',
    link: 'https://huggingface.co/spaces/AlignAI/Open-Deep-Research',
    dataAiHint: 'ai research tool'
  },
  {
    id: 'deep-research-arxiv',
    name: 'Deep Research Arxiv',
    description: 'Do literature review, Fast, Simple and Reliable.',
    imageUrl: '/images/DeepA.png', // Updated image path
    status: 'Live',
    link: 'https://huggingface.co/spaces/AlignAI/Deep-Research-Arxiv',
    dataAiHint: 'arxiv literature review'
  },
  {
    id: 'agent-ds',
    name: 'Agent DS',
    description: 'Your personal data scientist.',
    imageUrl: '/images/AgentD.png', // Updated image path
    status: 'Coming Soon',
    link: '#',
    dataAiHint: 'data science agent'
  },
  {
    id: 'shikkhok',
    name: 'Shikkhok',
    description: 'Your personal educator.',
    imageUrl: '/images/Shikkhok.png', // Updated image path
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
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Our Products
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the tools and platforms developed by SpontAlign to help build and deploy safer, more aligned AI systems.
        </p>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <CardTitle className="text-2xl flex items-center gap-2">
                <Package className="h-6 w-6 text-primary transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[5deg]" />
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
      </section>

      {/* Stay Tuned Section */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-semibold mb-2">{stayTunedMessage.name}</h2>
        <p className="text-lg text-muted-foreground mb-4">{stayTunedMessage.description}</p>
        <Button asChild variant="link" className="text-primary btn-transition btn-hover btn-active">
          <Link href={stayTunedMessage.link} prefetch={true}>
            Follow Our Blog for Updates <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

      {/* Custom Solutions Section */}
       <section className="bg-secondary rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our research and expertise can be tailored to your specific enterprise needs. Let's discuss how we can build a bespoke AI solution together.
          </p>
           <Button asChild size="lg" className="btn-transition btn-hover btn-active hover:text-primary">
            <Link href="/enterprise" prefetch={true}>
              Explore Enterprise Partnerships <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>
    </div>
  );
}
