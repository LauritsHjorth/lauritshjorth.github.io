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
  pdf?: string;
  link?: string;
}

const papers: Paper[] = [
  {
    id: "1",
    title: "The Geography of Careers",
    status: "working",
    abstract:
      "This paper studies job search across geography and occupations. Using matched employer-employee data for Denmark (1995-2019), I document that worker flows decline sharply with both geographic and occupational distance. I extend a spatial search framework by introducing an occupational dimension: job offers are characterized by a triple of location, occupation, and wage, and offer arrival rates decline with distance in each dimension. I estimate a structural model of on- and off-the-job search that separates the role of offer arrival rates from workers' acceptance decisions. In the model, frictions limit workers' mobility across labor market segments. I use the framework to evaluate how these frictions shape unemployment rates and wage growth across local labor markets.",
    tags: ["Labor Economics", "Spatial Economics", "Occupational Mobility"],
    pdf: "/papers/The Geography of Careers.pdf",
  },
  {
    id: "2",
    title: "Local Labor Matching",
    coauthors: "with Daniel Borowczyk-Martins and Annaig Morin",
    status: "working",
    abstract:
      "There are large and persistent differences in unemployment rates across local labor markets. Motivated by that observation, we study differences in matching efficiencies across local labor markets. We consider a matching function where different types of workers search for jobs with different efficiencies. We use panel data on local labor markets from the United States to estimate the matching efficiencies of the unemployed for each local labor market. We find substantial variation in matching efficiencies across markets and examine how this heterogeneity correlates with observable characteristics of local labor markets, including industrial composition, worker demographics, and urban density.",
    tags: ["Labor Economics", "Unemployment", "Matching"],
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
                      {paper.pdf && (
                        <a
                          href={paper.pdf}
                          download
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-body text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
                        >
                          <FileText size={16} />
                          Download PDF
                        </a>
                      )}
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
