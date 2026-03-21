import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "PhD Student",
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
    I am a PhD student in Economics at Copenhagen Business School (CBS),
    working in labor and spatial economics.
  </p>
  <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
    I am particularly interested in understanding how the
    structure of local labor markets shapes long-run
    outcomes for workers and contributes to persistent disparities across
    localities.
  </p>
  <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
    I work with structural models and large datasets, such as the Danish administrative data. 
  </p>
          </div>
        </div>
      </div>
    </section>
  );
}
