import { Download, Calendar, Award, BookOpen } from "lucide-react";

interface CVEntry {
  year: string;
  title: string;
  institution: string;
  description?: string;
}

const education: CVEntry[] = [
  {
    year: "2015 – 2019",
    title: "Master of Science in Economics",
    institution: "University of Copenhagen",
  },
  {
    year: "2013 – 2015",
    title: "Bachelor of Arts in Philosophy",
    institution: "University of Copenhagen",
  },
  {
    year: "2010 – 2015",
    title: "Bachelor of Science in Economics",
    institution: "University of Copenhagen",
  },
];

const positions: CVEntry[] = [
  {
    year: "2023 – Present",
    title: "PhD Fellow",
    institution: "Department of Economics, Copenhagen Business School",
  },
  {
    year: "2016 – 2018",
    title: "Research Assistant",
    institution: "Department of Economics, University of Copenhagen",
  },
];

const teaching: CVEntry[] = [
  {
    year: "2024",
    title: "Teaching Assistant, Macroeconomics",
    institution: "Copenhagen Business School",
  },
  {
    year: "2018",
    title: "Teaching Assistant, Advanced Microeconometrics",
    institution: "University of Copenhagen",
  },
  {
    year: "2017 – 2023",
    title: "Teaching Assistant, Econometrics II",
    institution: "University of Copenhagen",
  },
];

function CVTimeline({
  entries,
  icon: Icon,
}: {
  entries: CVEntry[];
  icon: React.ElementType;
}) {
  return (
    <div className="space-y-4">
      {entries.map((entry, index) => (
        <div
          key={index}
          className="relative pl-8 pb-4 last:pb-0 border-l-2 border-border hover:border-accent/50 transition-colors group"
        >
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-accent transition-colors" />
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
              <Calendar size={12} />
              {entry.year}
            </div>
            <h4 className="font-heading text-base font-semibold text-foreground">
              {entry.title}
            </h4>
            <p className="font-body text-sm text-muted-foreground">
              {entry.institution}
            </p>
            {entry.description && (
              <p className="font-body text-sm text-muted-foreground/80 italic">
                {entry.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CVSection() {
  return (
    <section id="cv" className="py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="space-y-3">
            <p className="font-body text-sm font-medium text-accent tracking-wide uppercase">
              Curriculum Vitae
            </p>

          </div>

          <a
            href="/hjorth_cv.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-body text-sm font-medium rounded-md hover:bg-primary/90 transition-all hover:shadow-elevated self-start md:self-auto"
          >
            <Download size={16} />
            Download Full CV
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-foreground">
              <BookOpen size={18} className="text-accent" />
              <h3 className="font-heading text-lg font-semibold">Education</h3>
            </div>
            <CVTimeline entries={education} icon={BookOpen} />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-foreground">
              <Calendar size={18} className="text-accent" />
              <h3 className="font-heading text-lg font-semibold">Positions</h3>
            </div>
            <CVTimeline entries={positions} icon={Calendar} />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-foreground">
              <Award size={18} className="text-accent" />
              <h3 className="font-heading text-lg font-semibold">Teaching</h3>
            </div>
            <CVTimeline entries={teaching} icon={Award} />
          </div>
        </div>
      </div>
    </section>
  );
}
