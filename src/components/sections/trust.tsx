import { trustMarquee } from "@/lib/content";

export function Trust() {
  // Duplicate the list so the marquee loops seamlessly
  const items = [...trustMarquee, ...trustMarquee];

  return (
    <section
      aria-labelledby="trust-heading"
      className="border-y border-border bg-card/30 py-14"
    >
      <div className="container-wide">
        <h2
          id="trust-heading"
          className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Trusted Technology Expertise
        </h2>
      </div>

      <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center whitespace-nowrap rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-medium text-foreground/80 backdrop-blur"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
