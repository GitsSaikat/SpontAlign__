
'use client'; // Required for state management (filters)

import { useState, useEffect } from 'react'; // Import useEffect
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileText, Filter } from "lucide-react"; // Changed ExternalLink to FileText
import Link from 'next/link';

// Placeholder data for research items
const allResearchItems = [
  { id: 1, title: "Scalable Oversight for Large Language Models", year: 2024, topic: "Oversight", type: "Paper", link: "#", authors: "A. Researcher, B. Collaborator" },
  { id: 2, title: "Interpretability Techniques for Transformer Models", year: 2023, topic: "Interpretability", type: "Project", link: "#", authors: "C. Scientist" },
  { id: 3, title: "Measuring and Reducing Sycophancy in AI", year: 2023, topic: "Alignment", type: "Paper", link: "#", authors: "D. Engineer, E. Scholar" },
  { id: 4, title: "Robustness Against Adversarial Examples", year: 2024, topic: "Safety", type: "Paper", link: "#", authors: "F. Investigator" },
  { id: 5, title: "Value Learning from Human Preferences", year: 2022, topic: "Alignment", type: "Project", link: "#", authors: "G. Expert, H. Analyst" },
  { id: 6, title: "Constitutional AI: Harmlessness from AI Feedback", year: 2023, topic: "Alignment", type: "Paper", link: "#", authors: "I. Pioneer"},
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
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.authors.toLowerCase().includes(searchTerm.toLowerCase());
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
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow bg-background font-body"
              suppressHydrationWarning // Keep for Input
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
                suppressHydrationWarning // Add suppressHydrationWarning here
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
                  <CardDescription className="font-body">
                    {item.authors} ({item.year})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded font-body">
                      {item.topic} - {item.type}
                    </span>
                    <Button asChild variant="outline" size="sm" className="btn-transition btn-hover btn-active">
                      <Link href={item.link} target="_blank" rel="noopener noreferrer" prefetch={false}>
                        <FileText className="mr-1 h-4 w-4" /> {/* Always use FileText icon */}
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

