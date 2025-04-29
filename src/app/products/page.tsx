import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight, Package, Zap } from "lucide-react";
import Image from "next/image";

// Placeholder Product Data
const products = [
  {
    id: 'alignment-suite',
    name: 'SpontAlign Alignment Suite',
    description: 'A comprehensive toolkit for measuring, training, and monitoring the alignment of large language models.',
    features: ['Scalable Oversight Tools', 'Preference Model Training', 'Red Teaming Automation', 'Interpretability Dashboards'],
    imageUrl: 'https://picsum.photos/seed/product1/600/400',
    status: 'Beta',
    link: '/docs/alignment-suite' // Link to product-specific docs
  },
  {
    id: 'safety-layer-api',
    name: 'Safety Layer API',
    description: 'An API providing real-time content filtering and behavior monitoring to ensure AI interactions remain safe and appropriate.',
    features: ['Harmful Content Detection', 'Sycophancy Reduction', 'Instruction Following Checks', 'Customizable Policies'],
    imageUrl: 'https://picsum.photos/seed/product2/600/400',
    status: 'Alpha',
    link: '/contact' // Link to contact for alpha access
  },
    {
    id: 'verify-ai',
    name: 'VerifyAI Platform',
    description: 'A platform for rigorous testing and validation of AI model robustness and safety against adversarial attacks and distributional shifts.',
    features: ['Automated Test Generation', 'Formal Verification Modules', 'Robustness Benchmarking', 'Failure Mode Analysis'],
    imageUrl: 'https://picsum.photos/seed/product3/600/400',
    status: 'Coming Soon',
    link: '#' // No link yet
  },
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
              />
               {product.status && (
                 <span className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded ${
                   product.status === 'Beta' ? 'bg-yellow-500 text-black' :
                   product.status === 'Alpha' ? 'bg-blue-500 text-white' :
                   'bg-gray-500 text-white' // Coming Soon or other
                 }`}>
                   {product.status}
                 </span>
               )}
            </div>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Package className="h-6 w-6 text-primary" /> {product.name}
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
              <Button asChild className="w-full mt-auto btn-transition btn-hover btn-active" disabled={product.status === 'Coming Soon'}>
                <Link href={product.link}>
                  {product.status === 'Alpha' ? 'Request Access' : product.status === 'Coming Soon' ? 'Coming Soon' : 'Learn More'}
                  {product.status !== 'Coming Soon' && <ArrowRight className="ml-2 h-4 w-4" />}
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
            <Link href="/enterprise">
              Explore Enterprise Partnerships <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>
    </div>
  );
}