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

      {/* header bar */}
      <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hero-pulse h-2.5 w-2.5 shrink-0 rounded-full bg-cta-green" />
          <p className="truncate text-sm font-semibold text-lilac">
            AI Delivery Board
          </p>
        </div>
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-cta-orange/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-hero-muted/60" />
        </div>
      </div>

      {/* content inside the picture */}
      <div className="relative mt-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-hero-border bg-hero-panel/60 px-3 py-1 text-xs text-lilac">
          <span className="hero-pulse h-1.5 w-1.5 rounded-full bg-lilac" />
          Вайбкодинг · AI-разработка
        </span>

        <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-lilac sm:text-4xl lg:text-5xl">
          Развитие бизнеса с помощью ИИ
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-lilac-muted sm:text-base">
          Быстро и надежно с помощью ИИ делаем старт и развитие любых идей
          бизнеса
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
