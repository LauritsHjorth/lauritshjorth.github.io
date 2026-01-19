import { Mail, MapPin, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "lrh.eco@cbs.dk",
    href: "mailto:lrh.eco@cbs.dk",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Copenhagen Business School",
    href: "https://www.cbs.dk",
    external: true,
  },
];

const socialLinks = [
  {
    label: "ORCID",
    href: "https://orcid.org/",
    id: "0000-0000-0000-0000",
  },
  {
    label: "GitHub",
    href: "https://github.com/lauritshjorth",
    id: "lauritshjorth",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/",
    id: "Profile",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-3">
            <p className="font-body text-sm font-medium text-accent tracking-wide uppercase">
              Contact
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              Get in Touch
            </h2>
            <p className="font-body text-base text-muted-foreground">
              I'm always happy to discuss research, potential collaborations, or answer
              questions about my work.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-soft transition-all group w-full sm:w-auto"
              >
                <div className="p-2 rounded-md bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <link.icon size={18} />
                </div>
                <div className="text-left">
                  <p className="font-body text-xs text-muted-foreground">
                    {link.label}
                  </p>
                  <p className="font-body text-sm font-medium text-foreground">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-border">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Find me on
            </p>
            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
                >
                  <span className="font-body text-sm font-medium link-underline">
                    {link.label}
                  </span>
                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
