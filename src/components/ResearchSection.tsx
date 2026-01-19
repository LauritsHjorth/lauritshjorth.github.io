interface Paper {
  title: string;
  coauthors?: string;
  status: string;
  abstract: string;
  link?: string;
}

const papers: Paper[] = [
  {
    title: "Local Labor Market Adjustment to Trade Shocks",
    status: "Work in Progress",
    abstract:
      "This paper studies how local labor markets adjust to import competition shocks, focusing on worker mobility and wage dynamics across regions.",
  },
  {
    title: "Spatial Wage Inequality and Commuting Patterns",
    coauthors: "with A. Coauthor",
    status: "Work in Progress",
    abstract:
      "We examine the relationship between spatial wage inequality and commuting behavior using Danish administrative data.",
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="py-12 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-primary mb-6">Research</h2>

        <div className="space-y-8">
          <div>
            <h3 className="section-heading">Working Papers</h3>
            <p className="text-muted-foreground italic mb-4">Coming soon</p>
          </div>

          <div>
            <h3 className="section-heading">Work in Progress</h3>
            <ul className="space-y-4">
              {papers.map((paper, index) => (
                <li key={index}>
                  <p>
                    <strong>{paper.title}</strong>
                    {paper.coauthors && (
                      <span className="text-muted-foreground"> ({paper.coauthors})</span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}