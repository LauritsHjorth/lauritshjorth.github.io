export function HeroSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Photo */}
          <div className="w-48 h-48 bg-muted flex-shrink-0">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              [Photo]
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <p>
              Welcome to my page!
            </p>
            <p>
              I am a PhD candidate in economics at{" "}
              <a href="https://www.cbs.dk/en/research/departments-and-centres/department-of-economics" target="_blank" rel="noopener noreferrer">
                Copenhagen Business School
              </a>
              . My research lies at the intersection of labor economics and spatial economics, focusing on how local labor markets adjust to economic shocks and policy changes.
            </p>
            <p>
              I approach these questions by combining empirical analysis of rich administrative microdata with economic theory.
            </p>

            {/* Contact */}
            <div className="pt-4">
              <h3 className="section-heading">Contact</h3>
              <p>
                email:{" "}
                <a href="mailto:lrh.eco@cbs.dk">lrh.eco@cbs.dk</a>
              </p>
            </div>

            {/* Research Fields */}
            <div className="pt-2">
              <h3 className="section-heading">Research Fields</h3>
              <p>Labor Economics, Spatial Economics, Applied Microeconometrics</p>
            </div>

            {/* CV */}
            <div className="pt-2">
              <h3 className="section-heading">Curriculum Vitae</h3>
              <p>
                <a href="#">CV</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}