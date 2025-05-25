
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight, Package, Zap } from "lucide-react"; // Sparkles can be added if desired for specific cards
import Image from "next/image";

// Updated Product Data
const products = [
  {
    id: 'open-deep-research',
    name: 'Open Deep Research',
    description: 'An application for assisting in research by conducting comprehensive research on any topic.',
    features: ['AI-Powered Research', 'Comprehensive Topic Analysis', 'Knowledge Discovery'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'research brain',
    status: 'Live',
    link: 'https://huggingface.co/spaces/AlignAI/Open-Deep-Research'
  },
  {
    id: 'deep-research-arxiv',
    name: 'Deep Research Arxiv',
    description: 'Do literature review, Fast, Simple and Reliable.',
    features: ['Targeted Literature Review', 'Arxiv Paper Integration', 'Efficient & Accurate'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'documents papers',
    status: 'Live',
    link: 'https://huggingface.co/spaces/AlignAI/Deep-Research-Arxiv'
  },
  {
    id: 'agent-ds',
    name: 'Agent DS',
    description: 'Your personal data scientist.',
    features: ['AI-Driven Data Analysis', 'Automated Insights', 'Personalized Dashboards'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data science chart',
    status: 'Coming Soon',
    link: '#'
  },
  {
    id: 'shikkhok',
    name: 'Shikkhok',
    description: 'Your personal educator.',
    features: ['Personalized Learning Paths', 'Interactive AI Tutoring', 'Knowledge Reinforcement'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'education book',
    status: 'Coming Soon',
    link: '#'
  },
  {
    id: 'stay-tuned',
    name: 'Stay Tuned!',
    description: 'Many more interesting applications are coming soon 😊',
    features: ['Continuous Innovation', 'Expanding AI Toolkit', 'Community Focused'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'abstract future',
    status: 'Announcement',
    link: '/blogs'
  }
];

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
          <Card key={product.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={product.imageUrl}
                alt={`${product.name} illustration`}
                layout="fill"
                objectFit="cover"
                data-ai-hint={product.imageHint}
              />
               {product.status && (
                 <span className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded ${
                   product.status === 'Live' ? 'bg-green-600 text-white' :
                   product.status === 'Beta' ? 'bg-yellow-500 text-black' : // Kept for potential future use
                   product.status === 'Alpha' ? 'bg-blue-500 text-white' : // Kept for potential future use
                   product.status === 'Announcement' ? 'bg-purple-600 text-white' :
                   product.status === 'Coming Soon' ? 'bg-gray-500 text-white' :
                   'bg-gray-500 text-white' // Default fallback
                 }`}>
                   {product.status}
                 </span>
               )}
            </div>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Package className="h-6 w-6 text-primary" /> {/* Or use product.icon if defined */}
                {product.name}
              </CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-none space-y-1 text-sm text-muted-foreground mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                className="w-full mt-auto btn-transition btn-hover btn-active"
                disabled={product.status === 'Coming Soon'}
                variant={product.status === 'Coming Soon' ? 'outline' : 'default'}
              >
                <Link href={product.link} prefetch={product.status !== 'Coming Soon' && product.link !== '#'}>
                  {
                    product.status === 'Live' ? 'Access Product' :
                    product.status === 'Alpha' ? 'Request Access' : // Kept for future use
                    product.status === 'Coming Soon' ? 'Coming Soon' :
                    product.status === 'Announcement' ? 'Follow Updates' :
                    'Learn More'
                  }
                  {(product.status === 'Live' || product.status === 'Announcement') && <ArrowRight className="ml-2 h-4 w-4" />}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Custom Solutions Section */}
       <section className="bg-secondary rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our research and expertise can be tailored to your specific enterprise needs. Let's discuss how we can build a bespoke AI solution together.
          </p>
           <Button asChild size="lg" className="btn-transition btn-hover btn-active">
            <Link href="/enterprise" prefetch={true}>
              Explore Enterprise Partnerships <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>
    </div>
  );
}

    