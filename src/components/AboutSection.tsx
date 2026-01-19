import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "PhD Candidate",
    description: "Economics, Copenhagen Business School",
  },
  {
    icon: Briefcase,
    title: "Research Focus",
    description: "Labor & Spatial Economics",
  },
  {
    icon: MapPin,
    title: "Based in",
    description: "Copenhagen, Denmark",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="font-body text-sm font-medium text-accent tracking-wide uppercase">
                About Me
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
                Economist & Researcher
              </h2>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background shadow-card hover:shadow-soft transition-shadow"
                >
                  <div className="p-2 rounded-md bg-accent/10 text-accent">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              I am a third-year PhD student in Economics at Copenhagen Business School (CBS). 
              My research lies at the intersection of labor and spatial economics, studying how 
              job mobility and local labor market structure shape workers' careers and wage dynamics.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              My work combines rich administrative data with modern econometric methods to 
              understand the geographic and occupational dimensions of labor markets. I am 
              particularly interested in how workers navigate career transitions and how 
              local economic conditions affect individual outcomes.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Prior to my PhD, I completed my graduate studies in Economics with a focus on 
              applied microeconometrics. I have experience working with large-scale register 
              data and enjoy combining theoretical insights with empirical analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
