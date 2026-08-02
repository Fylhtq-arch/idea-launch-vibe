interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  preview: {
    gradient: string;
    icon: React.ReactNode;
  };
}

export function ProjectCard({ title, description, tags, preview }: ProjectCardProps) {
  return (
    <article className="project-card group relative flex flex-col overflow-hidden rounded-3xl border border-hero-border bg-hero-panel/50 p-1 backdrop-blur-sm transition-all duration-300">
      <div className="project-glow-ring pointer-events-none absolute inset-0 rounded-3xl" />

      {/* Preview */}
      <div
        className="project-preview relative flex h-44 items-center justify-center overflow-hidden rounded-2xl sm:h-52"
        style={{ background: preview.gradient }}
      >
        <div className="project-preview-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative z-10 scale-110 transition-transform duration-300 group-hover:scale-125">
          {preview.icon}
        </div>
        <div className="project-preview-shine pointer-events-none absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-bold text-hero-foreground sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-hero-muted">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="project-tag inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
