import heroImage from "@/assets/hero-ai.jpg";

const metrics = [
  { label: "Запущено проектов", value: "48", delta: "+12%" },
  { label: "Средний срок MVP", value: "9 дней", delta: "-40%" },
  { label: "Экономия времени", value: "3.4x", delta: "+18%" },
  { label: "Довольных клиентов", value: "96%", delta: "+5%" },
];

const bars = [34, 52, 41, 68, 57, 80, 72, 94, 86, 100];

export function HeroDashboard() {
  return (
    <div className="hero-glass relative w-full rounded-3xl p-4 sm:p-6 lg:p-8">
      <div className="hero-glow-ring pointer-events-none absolute inset-0 rounded-3xl" />

      {/* картинка с наложенным текстом */}
      <div className="relative overflow-hidden rounded-2xl border border-hero-border">
        <img
          src={heroImage}
          alt="Девушка и светящийся искусственный интеллект"
          className="h-[26rem] w-full object-cover sm:h-[30rem]"
          loading="eager"
        />
        <div className="hero-image-veil pointer-events-none absolute inset-0" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-8">
          <h1 className="hero-text-red text-2xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Развитие бизнеса с помощью ИИ
          </h1>

          <p className="mx-auto mt-4 inline-block w-fit max-w-xl rounded-lg bg-hero-blue px-4 py-2 text-sm font-semibold leading-relaxed text-hero-foreground shadow-lg shadow-hero-blue/25 sm:text-base">
            Быстро и надежно с помощью ИИ делаем старт и развитие любых идей
            бизнеса
          </p>


          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
            <a
              href="#projects"
              className="hero-btn-orange inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold sm:w-auto"
            >
              Посмотреть проекты
            </a>
            <a
              href="#contact"
              className="hero-btn-green inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold sm:w-auto"
            >
              Связаться
            </a>
          </div>
        </div>
      </div>

      {/* metrics */}
      <div className="relative mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="min-w-0 rounded-2xl border border-hero-border bg-hero-panel/60 p-3 sm:p-4"
          >
            <p className="truncate text-[11px] uppercase tracking-wide text-lilac-muted">
              {m.label}
            </p>
            <div className="mt-1.5 flex min-w-0 items-baseline gap-2">
              <span className="truncate text-xl font-bold text-lilac sm:text-2xl">
                {m.value}
              </span>
              <span className="shrink-0 text-xs font-medium text-cta-green">
                {m.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* chart */}
      <div className="relative mt-4 rounded-2xl border border-hero-border bg-hero-panel/60 p-4">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <p className="truncate text-xs font-medium text-lilac-muted">
            Динамика запусков
          </p>
          <span className="shrink-0 rounded-full border border-hero-border px-2 py-0.5 text-[11px] text-lilac">
            30 дней
          </span>
        </div>
        <div className="mt-4 flex h-20 items-end gap-1.5 sm:h-24">
          {bars.map((h, i) => (
            <div
              key={i}
              className="hero-bar flex-1 rounded-t-sm"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
