import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "StudyFlow",
    description:
      "AI-платформа для персонализированного обучения. Адаптирует материал под темп и уровень каждого студента.",
    tags: ["React", "TypeScript", "OpenAI", "Supabase"],
    preview: {
      image: "/1.png",
      alt: "Иллюстрация вайбкодинга: разработчик, код и AI-куб",
    },
  },
  {
    title: "НейроАналитик",
    description:
      "AI-сервис для анализа данных. Превращает сырые таблицы в понятные инсайты и прогнозы для бизнеса.",
    tags: ["Python", "FastAPI", "Pandas", "OpenAI"],
    preview: {
      image: "/2.png",
      alt: "Аналитический дашборд с графиками и цифровым лицом ИИ",
    },
  },
  {
    title: "LaunchPro",
    description:
      "Лендинг для продукта. Быстрый запуск посадочной страницы с фокусом на конверсию и визуальный вау-эффект.",
    tags: ["Next.js", "Tailwind", "Figma", "Vercel"],
    preview: {
      image: "/3.png",
      alt: "Иллюстрация запуска продукта: планшет и бумажные самолётики",
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
