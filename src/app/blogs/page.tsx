'use client'; // For potential future filtering/sorting

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

// Placeholder Blog Post Data
const blogPosts = [
  {
    id: 'post-1',
    title: 'Why AI Alignment is Crucial for the Future',
    excerpt: 'An introduction to the core challenges and importance of ensuring AI systems align with human values as they become more capable.',
    author: 'Dr. Evelyn Reed',
    date: '2024-07-15',
    tags: ['Alignment', 'Ethics', 'Future'],
    imageUrl: 'https://picsum.photos/seed/blog1/700/400',
    href: '/blogs/why-ai-alignment-is-crucial'
  },
  {
    id: 'post-2',
    title: 'Inside SpontAlign: Our Approach to Scalable Oversight',
    excerpt: 'A technical dive into the methods we are developing to effectively supervise and guide large language models during training.',
    author: 'Ben Carter',
    date: '2024-06-28',
    tags: ['Research', 'Oversight', 'LLM'],
    imageUrl: 'https://picsum.photos/seed/blog2/700/400',
    href: '/blogs/our-approach-to-scalable-oversight'
  },
  {
    id: 'post-3',
    title: 'The Role of Interpretability in Building Trustworthy AI',
    excerpt: 'Exploring how understanding the inner workings of AI models is key to verifying their safety and reliability.',
    author: 'Aisha Khan',
    date: '2024-05-10',
    tags: ['Interpretability', 'Safety', 'Trust'],
    imageUrl: 'https://picsum.photos/seed/blog3/700/400',
    href: '/blogs/role-of-interpretability'
  },
   {
    id: 'post-4',
    title: 'SpontAlign Joins the Partnership on AI',
    excerpt: 'We are excited to announce our membership in the Partnership on AI and collaborate on responsible AI practices.',
    author: 'Company News',
    date: '2024-04-22',
    tags: ['Announcement', 'Collaboration', 'Partnership'],
    imageUrl: 'https://picsum.photos/seed/blog4/700/400',
    href: '/blogs/partnership-on-ai'
  },
];

export default function BlogsPage() {
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    let tempPosts = blogPosts;

    if (filter) {
      tempPosts = tempPosts.filter(post =>
        post.title.toLowerCase().includes(filter.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(filter.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
      );
    }

    if (category) {
      tempPosts = tempPosts.filter(post =>
        post.tags.some(tag => tag.toLowerCase() === category.toLowerCase())
      );
    }

    setFilteredPosts(tempPosts);
  }, [filter, category]);

  const categories = ['all', ...new Set(blogPosts.flatMap(post => post.tags).map(tag => tag.toLowerCase()))]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <header className="mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-primary">
            SpontAlign Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into insights, research updates, company news, and thought leadership from the team at SpontAlign.
          </p>
        </div>
      </header>

      {/* Filters Section */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <Input
              type="text"
              placeholder="Search posts by title, excerpt, or tag..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-secondary focus-visible:ring-offset-2 focus-visible:ring-ring focus:outline-none"
            />
          </div>
          <div className="col-span-1">
              <Select
                onValueChange={(value) => setCategory(value)}
                defaultValue="all"
              >
                <SelectTrigger className="bg-secondary focus-visible:ring-offset-2 focus-visible:ring-ring focus:outline-none">
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value='all'>All Categories</SelectItem>
                  {categories.filter(tag => tag !== "all").map((category, idx) => (
                    <SelectItem key={idx} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
        </section>

        {/* No Results Section */}
        {!filteredPosts.length && (
            <section className="text-center py-10">
                <h2 className="text-2xl font-semibold text-muted-foreground">
                    No Results Found
                </h2>
                <p className="text-muted-foreground mt-2">
                    Try adjusting your search or filter criteria.
                </p>
                <Button
                    variant="outline"
                    onClick={() => {
                        setFilter('');
                        setCategory('');
                    }}
                    className="mt-4"
                >
                    Reset Filters
                </Button>
            </section>
        )}

      {/* Blog Post Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href={post.href} className="block relative h-48 w-full">
              <Image
                src={post.imageUrl}
                alt={`Featured image for ${post.title}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <CardTitle className="text-xl leading-snug">
                 <Link href={post.href} className="hover:text-primary transition-colors">{post.title}</Link>
              </CardTitle>
               <CardDescription className="flex items-center gap-4 text-xs pt-1">
                 <span className="flex items-center gap-1"><User className="h-3 w-3"/> {post.author}</span>
                 <span className="flex items-center gap-1"><Calendar className="h-3 w-3"/> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
               </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
             </CardContent>
             <CardFooter>
               <Button asChild variant="link" className="p-0 h-auto text-sm text-primary btn-transition btn-hover btn-active">
                  <Link href={post.href}>
                   Read More <ArrowRight className="ml-1 h-4 w-4" />
                 </Link>
               </Button>
             </CardFooter>
          </Card>
        ))}
        </section>

      {/* TODO: Add Pagination if many posts */}
       {/* <section className="text-center">
         <Button variant="outline">Load More Posts</Button>
       </section> */}
    </div>
  );
}

// Add placeholder pages for individual blog posts
// Example: /blogs/why-ai-alignment-is-crucial page
// You would create these files:
// src/app/blogs/why-ai-alignment-is-crucial/page.tsx
// src/app/blogs/our-approach-to-scalable-oversight/page.tsx
// etc.
