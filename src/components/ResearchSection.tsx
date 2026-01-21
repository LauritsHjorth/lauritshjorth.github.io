import { useState } from "react";
import { ChevronDown, FileText, ExternalLink } from "lucide-react";

interface Paper {
  id: string;
  title: string;
  coauthors?: string;
  status: "working" | "published" | "submitted";
  year: string;
  abstract: string;
  tags: string[];
  link?: string;
}

const papers: Paper[] = [
  {
    id: "1",
    title: "Job Mobility and Local Labor Market Structure: Evidence from Denmark",
    status: "working",
    year: "2024",
    abstract:
      "This paper examines how local labor market structure affects job-to-job transitions and wage growth. Using comprehensive Danish administrative data, I document substantial heterogeneity in mobility patterns across regions and show that labor market thickness—measured by the density of relevant job opportunities—significantly influences worker career trajectories. The findings suggest that spatial mismatch in labor markets has important implications for wage inequality across regions.",
    tags: ["Labor Economics", "Spatial Economics", "Job Mobility"],
  },
  {
    id: "2",
    title: "Geographic Wage Premiums and Worker Sorting",
    coauthors: "with J. Smith",
    status: "working",
    year: "2024",
    abstract:
      "We investigate the sources of geographic wage differentials using matched employer-employee data. Our analysis decomposes wage gaps into components attributable to worker sorting, firm effects, and genuine location premiums. We find that while worker sorting explains a substantial portion of observed differentials, significant location-specific premiums remain after accounting for selection.",
    tags: ["Spatial Economics", "Wage Inequality"],
  },
  {
    id: "3",
    title: "Occupational Transitions and Skill Transferability",
    status: "working",
    year: "2023",
    abstract:
      "This paper develops a framework for measuring skill transferability across occupations and examines how workers leverage portable skills when changing careers. Using detailed data on job tasks and worker transitions, I construct measures of skill overlap and estimate how transferability affects the wage costs of occupational switches. The results highlight the importance of general skills in facilitating labor market flexibility.",
    tags: ["Labor Economics", "Skills", "Career Mobility"],
  },
];

const statusLabels = {
  working: "Working Paper",
  submitted: "Under Review",
  published: "Published",
};

const statusStyles = {
  working: "bg-accent/10 text-accent",
  submitted: "bg-primary/10 text-primary",
  published: "bg-green-100 text-green-700",
};

export function ResearchSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="research" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="space-y-3 mb-12">
          <p className="font-body text-sm font-medium text-accent tracking-wide uppercase">
            Research
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            Working Papers
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl">
            My research focuses on understanding labor market dynamics through the lens of 
            spatial economics and worker mobility.
          </p>
        </div>

        <div className="space-y-4">
          {papers.map((paper) => (
            <article
              key={paper.id}
              className="bg-card rounded-lg border border-border overflow-hidden transition-all hover:shadow-soft"
            >
              <button
                onClick={() => toggleExpanded(paper.id)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-inset"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          statusStyles[paper.status]
                        }`}
                      >
                        {statusLabels[paper.status]}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {paper.year}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground leading-snug">
                      {paper.title}
                    </h3>

                    {paper.coauthors && (
                      <p className="font-body text-sm text-muted-foreground italic">
                        {paper.coauthors}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        expandedId === paper.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  expandedId === paper.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2 border-t border-border">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-body text-sm font-semibold text-foreground mb-2">
                        Abstract
                      </h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-body text-sm font-medium rounded-md hover:bg-primary/90 transition-colors">
                        <FileText size={16} />
                        Download PDF
                      </button>
                      {paper.link && (
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground font-body text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                        >
                          <ExternalLink size={16} />
                          View Online
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
