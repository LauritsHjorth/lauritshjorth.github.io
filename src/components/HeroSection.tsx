import { ArrowDown, Mail, Github } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--secondary))_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--muted))_0%,transparent_40%)]" />
      
      <div className="container max-w-5xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-[1fr,auto] gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-body text-sm font-medium text-accent tracking-wide uppercase opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                PhD Candidate in Economics
              </p>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Laurits Rømer<br />
                <span className="text-muted-foreground">Hjorth</span>
              </h1>
            </div>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Researching how job mobility and local labor market structure shape workers' careers and wage dynamics.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-md hover:bg-primary/90 transition-all hover:shadow-elevated"
              >
                View Research
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-body text-sm font-medium rounded-md hover:bg-secondary transition-colors"
              >
                <Mail size={16} />
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a
                href="mailto:lrh.eco@cbs.dk"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={16} />
                lrh.eco@cbs.dk
              </a>
              <a
                href="https://github.com/lauritshjorth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="hidden md:block opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-80 rounded-lg bg-gradient-to-br from-secondary to-muted overflow-hidden shadow-elevated">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                    <span className="font-heading text-4xl text-muted-foreground/40">LH</span>
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-lg border-2 border-accent/30 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
          <span className="font-body text-xs tracking-wide">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
