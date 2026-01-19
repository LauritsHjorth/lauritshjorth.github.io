const navLinks = [
  { href: "#", label: "Home" },
  { href: "#research", label: "Research" },
  { href: "#teaching", label: "Teaching" },
];

export function Navigation() {
  return (
    <nav className="bg-primary text-primary-foreground py-3">
      <div className="container max-w-4xl mx-auto px-6 flex items-center justify-between">
        <span className="font-bold text-lg">
          Laurits Rømer Hjorth
        </span>

        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground hover:no-underline transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
