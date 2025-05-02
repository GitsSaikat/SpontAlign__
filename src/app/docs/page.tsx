'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { BookOpen, Search, ChevronRight, ArrowRight } from 'lucide-react'; // Added ArrowRight

// Placeholder Docs Structure
const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Introduction to SpontAlign tools and concepts.',
    pages: [
      { id: 'intro', title: 'Introduction to AI Alignment', href: '/docs/getting-started/intro' },
      { id: 'quickstart', title: 'Quickstart Guide', href: '/docs/getting-started/quickstart' },
      { id: 'installation', title: 'Installation', href: '/docs/getting-started/installation' },
    ]
  },
  {
    id: 'alignment-suite',
    title: 'Alignment Suite API',
    description: 'Technical reference for the SpontAlign Alignment Suite.',
     pages: [
      { id: 'api-overview', title: 'API Overview', href: '/docs/alignment-suite/api-overview' },
      { id: 'authentication', title: 'Authentication', href: '/docs/alignment-suite/authentication' },
      { id: 'endpoints', title: 'Endpoints Reference', href: '/docs/alignment-suite/endpoints' },
      { id: 'examples', title: 'Usage Examples', href: '/docs/alignment-suite/examples' },
    ]
  },
  {
    id: 'safety-layer',
    title: 'Safety Layer API',
    description: 'Documentation for the real-time safety monitoring API.',
     pages: [
      { id: 'safety-concepts', title: 'Core Concepts', href: '/docs/safety-layer/concepts' },
      { id: 'integration', title: 'Integration Guide', href: '/docs/safety-layer/integration' },
      { id: 'policy-config', title: 'Policy Configuration', href: '/docs/safety-layer/policy-config' },
    ]
  },
   {
    id: 'research-frameworks',
    title: 'Research Frameworks',
    description: 'Guides and code for replicating or building upon our research.',
     pages: [
      { id: 'framework-x', title: 'Framework X Setup', href: '/docs/research-frameworks/framework-x' },
      { id: 'dataset-y', title: 'Using Dataset Y', href: '/docs/research-frameworks/dataset-y' },
    ]
  },
];

export default function DocsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Basic search functionality (searches section titles and descriptions for now)
  const filteredSections = docSections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.pages.some(page => page.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Documentation
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Technical guides, API references, and tutorials for SpontAlign's tools, products, and research frameworks.
        </p>
      </section>

      {/* Search Bar */}
      <section className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-base"
            suppressHydrationWarning
          />
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredSections.length > 0 ? filteredSections.map((section) => (
          <Card key={section.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                </div>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.pages.map((page) => (
                  <li key={page.id}>
                    <Link href={page.href} className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 dark:hover:bg-accent/10 group" prefetch={true}>
                      <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground">{page.title}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
                 {/* Add a "View All" link if needed */}
                 {section.pages.length > 4 && (
                    <li>
                         <Link href={`/docs/${section.id}`} className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 dark:hover:bg-accent/10 group text-primary font-semibold" prefetch={true}>
                          <span>View all in {section.title}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                    </li>
                 )}
              </ul>
            </CardContent>
          </Card>
        )) : (
             <div className="col-span-1 md:col-span-2 text-center py-16 text-muted-foreground">
                <p className="text-lg">No documentation sections found matching your search.</p>
             </div>
        )}
      </section>

       {/* Contribution / Feedback Section */}
       <section className="bg-secondary rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Find an Issue or Have Feedback?</h2>
          <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
            Our documentation is constantly evolving. If you spot an error, have suggestions, or want to contribute, please let us know.
          </p>
          <Button asChild variant="outline" className="btn-transition btn-hover btn-active">
             {/* Link to GitHub issues or contact page */}
            <Link href="/contact?subject=DocsFeedback" prefetch={true}>
              Provide Feedback
            </Link>
          </Button>
        </section>
    </div>
  );
}

// Add placeholder pages for individual docs
// Example: /docs/getting-started/intro page
// You would create these files:
// src/app/docs/getting-started/intro/page.tsx
// src/app/docs/getting-started/quickstart/page.tsx
// etc.
