export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Laurits Rømer Hjorth. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground/60">
            PhD Candidate in Economics · Copenhagen Business School
          </p>
        </div>
      </div>
    </footer>
  );
}
