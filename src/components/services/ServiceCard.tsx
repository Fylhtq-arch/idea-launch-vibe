interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  result: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  result,
}: ServiceCardProps) {
  return (
    <article className="service-card group relative flex flex-col overflow-hidden rounded-3xl border border-hero-border bg-hero-panel/50 p-5 backdrop-blur-sm transition-all duration-300 sm:p-6">
      <div className="service-glow-ring pointer-events-none absolute inset-0 rounded-3xl" />

      <div className="service-icon-ring relative mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl sm:h-14 sm:w-14 sm:text-[26px]">
        {icon}
      </div>

      <h3 className="relative text-lg font-bold text-hero-foreground sm:text-xl">
        {title}
      </h3>

      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-hero-muted">
        {description}
      </p>

      <div className="relative mt-5 flex items-start gap-3 rounded-2xl border border-hero-border bg-hero-bg/60 p-3">
        <span className="shrink-0 text-xs font-bold text-cta-green">→</span>
        <p className="text-sm font-semibold text-lilac">{result}</p>
      </div>
    </article>
  );
}
