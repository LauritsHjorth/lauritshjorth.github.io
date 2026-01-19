export function Footer() {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container max-w-4xl mx-auto px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Laurits Rømer Hjorth
      </div>
    </footer>
  );
}