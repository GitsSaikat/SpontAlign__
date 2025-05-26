
'use client'; // Required for state management (filters)

import { useState, useEffect } from 'react'; // Import useEffect
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileText, Filter } from "lucide-react";
import Link from 'next/link';

// Updated research items data
const allResearchItems = [
  {
    id: 4,
    title: "Exploring autonomous agents through the lens of large language models: A review",
    year: 2024,
    topic: "Autonomous Agents",
    type: "Paper",
    link: "https://arxiv.org/abs/2404.04442",
    authors: "Saikat Barua",
    shortAbstract: "This review explores LLM-powered autonomous agents, their architecture, capabilities, challenges, and future research directions."
  },
  {
    id: 6,
    title: "Guardians of the agentic system: Preventing many shots jailbreak with agentic system",
    year: 2025,
    topic: "Safety",
    type: "Paper",
    link: "https://arxiv.org/abs/2502.16750",
    authors: "Saikat Barua, Mostafizur Rahman, Md Jafor Sadek, Rafiul Islam, Shehenaz Khaled, Ahmedul Kabir",
    shortAbstract: "Proposes systems to detect and prevent advanced jailbreaking attacks on LLM-based autonomous AI agents."
  },
  {
    id: 1,
    title: "KAXAI: An Integrated Environment for Knowledge Analysis and Explainable AI",
    year: 2024,
    topic: "Interpretability",
    type: "Paper",
    link: "https://arxiv.org/abs/2401.00193",
    authors: "Saikat Barua, Sifat Momen",
    shortAbstract: "KAXAI integrates AutoML, XAI, and synthetic data generation for accessible machine learning and interpretability."
  },
  {
    id: 2,
    title: "RESCUED: Robust Quantum Error Correction with Surface Code in Noisy Channels using Ensemble Decoder",
    year: 2024, 
    topic: "Quantum",
    type: "Paper",
    link: "https://ieeexplore.ieee.org/document/10490966",
    authors: "Saikat Barua, Syed Emad Uddin Shubha, Monika Rahman, Apurba Jalal Uchash, MRC Mahdy",
    shortAbstract: "RESCUED proposes an ensemble decoder for robust quantum error correction with surface codes in noisy channels."
  },
  {
    id: 3,
    title: "ELMAGIC: Energy-Efficient Lean Model for Reliable Medical Image Generation and Classification using Forward Forward Algorithm",
    year: 2024, 
    topic: "AI Applications",
    type: "Paper",
    link: "https://ieeexplore.ieee.org/document/10585776",
    authors: "Saikat Barua, Mostafizur Rahman, Mezbah Uddin Saad, Rafiul Islam, Md Jafor Sadek",
    shortAbstract: "ELMAGIC offers an energy-efficient lean model for medical image generation and classification using Forward Forward."
  },
  {
    id: 5,
    title: "Pygen: A collaborative human-ai approach to python package creation",
    year: 2024,
    topic: "AI Tools",
    type: "Paper",
    link: "https://arxiv.org/abs/2411.08932", // Link will be active Nov 2024
    authors: "Saikat Barua, Mostafizur Rahman, Md Jafor Sadek, Rafiul Islam, Shehenaz Khaled, Md Shohrab Hossain",
    shortAbstract: "PyGen is a human-AI collaborative platform for automating Python package creation from abstract ideas."
  },
  {
    id: 7,
    title: "QuXAI: Explainers for Hybrid Quantum Machine Learning Models",
    year: 2025,
    topic: "Interpretability", 
    type: "Paper",
    link: "https://arxiv.org/abs/2505.10167", // Link will be active May 2025
    authors: "Saikat Barua, Mostafizur Rahman, Shehenaz Khaled, Md Jafor Sadek, Rafiul Islam, Shahnewaz Siddique",
    shortAbstract: "QuXAI introduces a framework and explainer (Q-MEDLEY) for hybrid quantum-classical machine learning model transparency."
  }
];

// Get unique topics and years for filters
const topics = Array.from(new Set(allResearchItems.map(item => item.topic)));
const years = Array.from(new Set(allResearchItems.map(item => item.year))).sort((a, b) => b - a); // Sort descending

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [filteredResearch, setFilteredResearch] = useState(allResearchItems);
  const [hasMounted, setHasMounted] = useState(false); // Track mount state

  // Defer filtering logic until client-side mount
  useEffect(() => {
    setHasMounted(true); // Component has mounted
  }, []);

  useEffect(() => {
    // Only filter after mount to avoid hydration mismatch
    if (!hasMounted) return;

    const filtered = allResearchItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              item.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              (item.shortAbstract && item.shortAbstract.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesTopic = !selectedTopic || item.topic === selectedTopic;
        const matchesYear = !selectedYear || item.year === parseInt(selectedYear);
        return matchesSearch && matchesTopic && matchesYear;
    });
    setFilteredResearch(filtered);
  }, [searchTerm, selectedTopic, selectedYear, hasMounted]); // Add hasMounted dependency


  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-heading">
          Our Research
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body">
          Exploring the frontiers of AI alignment, safety, and interpretability. Discover our publications, projects, and methodologies.
        </p>
      </section>

      {/* Filters Section */}
      <section>
        <Card className="shadow-sm bg-muted/50 dark:bg-muted/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading">
              <Filter className="h-5 w-5" /> Filter Research
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Search by title, author, or abstract..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow bg-background font-body"
              suppressHydrationWarning
            />
            <Select onValueChange={(value) => setSelectedTopic(value === 'all' ? null : value)} value={selectedTopic || 'all'}>
              <SelectTrigger className="w-full md:w-[180px] bg-background font-body" suppressHydrationWarning>
                <SelectValue placeholder="Filter by Topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                {topics.map(topic => (
                  <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setSelectedYear(value === 'all' ? null : value)} value={selectedYear || 'all'}>
              <SelectTrigger className="w-full md:w-[180px] bg-background font-body" suppressHydrationWarning>
                <SelectValue placeholder="Filter by Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map(year => (
                  <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
                variant="outline"
                onClick={() => {
                    setSearchTerm('');
                    setSelectedTopic(null);
                    setSelectedYear(null);
                }}
                className="bg-background font-body"
                suppressHydrationWarning
             >
                Clear Filters
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Research Items Grid */}
      <section>
        {/* Only render the list after mount */}
        {hasMounted && filteredResearch.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResearch.map(item => (
              <Card key={item.id} className="flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl leading-snug font-heading">{item.title}</CardTitle>
                  <CardDescription className="font-body text-sm">
                    {item.authors} ({item.year})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {item.shortAbstract && (
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      {item.shortAbstract}
                    </p>
                  )}
                  <div className="flex justify-between items-center mt-auto pt-3 border-t border-border/50">
                    <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded font-body">
                      {item.topic} - {item.type}
                    </span>
                    <Button asChild variant="outline" size="sm" className="btn-transition btn-hover btn-active">
                      <Link href={item.link} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-1 h-4 w-4" />
                        View
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
           // Render loading state or message before mount/if no results
           <div className="text-center py-16 text-muted-foreground font-body">
            {hasMounted
             ? <>
                 <p className="text-lg">No research items match your criteria.</p>
                 <p>Try adjusting your filters or search term.</p>
               </>
             : <p className="text-lg">Loading research items...</p> // Show loading before mount
            }
           </div>
        )}
      </section>
    </div>
  );
}
