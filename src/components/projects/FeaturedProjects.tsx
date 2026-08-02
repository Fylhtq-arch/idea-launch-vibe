import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "StudyFlow",
    description:
      "AI-платформа для персонализированного обучения. Адаптирует материал под темп и уровень каждого студента.",
    tags: ["React", "TypeScript", "OpenAI", "Supabase"],
    preview: {
      gradient:
        "linear-gradient(135deg, oklch(0.35 0.1 260), oklch(0.25 0.08 240))",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-neon"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <circle cx="12" cy="7" r="2" />
        </svg>
      ),
    },
  },
  {
    title: "НейроАналитик",
    description:
      "AI-сервис для анализа данных. Превращает сырые таблицы в понятные инсайты и прогнозы для бизнеса.",
    tags: ["Python", "FastAPI", "Pandas", "OpenAI"],
    preview: {
      gradient:
        "linear-gradient(135deg, oklch(0.32 0.1 300), oklch(0.22 0.08 280))",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-lilac"
        >
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      ),
    },
  },
  {
    title: "LaunchPro",
    description:
      "Лендинг для продукта. Быстрый запуск посадочной страницы с фокусом на конверсию и визуальный вау-эффект.",
    tags: ["Next.js", "Tailwind", "Figma", "Vercel"],
    preview: {
      gradient:
        "linear-gradient(135deg, oklch(0.3 0.12 160), oklch(0.22 0.09 200))",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-cta-green"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-hero-bg py-16 sm:py-24"
    >
      <div className="project-grid-bg pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <span className="inline-block rounded-full border border-hero-border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-neon">
            Портфолио
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-hero-foreground sm:text-4xl">
            Избранные проекты
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-hero-muted sm:text-base">
            Реальные решения, созданные с помощью ИИ: от образовательных
            платформ до аналитических сервисов и продающих лендингов.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
