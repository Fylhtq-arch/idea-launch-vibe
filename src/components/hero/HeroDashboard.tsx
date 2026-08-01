const metrics = [
  { label: "Запущено проектов", value: "48", delta: "+12%" },
  { label: "Средний срок MVP", value: "9 дней", delta: "-40%" },
  { label: "Экономия времени", value: "3.4x", delta: "+18%" },
  { label: "Довольных клиентов", value: "96%", delta: "+5%" },
];

const bars = [34, 52, 41, 68, 57, 80, 72, 94, 86, 100];

const tasks = [
  { name: "AI-ассистент для отдела продаж", status: "В работе" },
  { name: "Лендинг + CRM интеграция", status: "Готово" },
  { name: "Автоматизация отчётности", status: "Тест" },
];

export function HeroDashboard() {
  return (
    <div className="hero-glass relative w-full rounded-3xl p-4 sm:p-6">
      <div className="hero-glow-ring pointer-events-none absolute inset-0 rounded-3xl" />

      {/* header */}
      <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hero-pulse h-2.5 w-2.5 shrink-0 rounded-full bg-cta-green" />
          <p className="truncate text-sm font-semibold text-hero-foreground">
            AI Delivery Board
          </p>
        </div>
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-cta-orange/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-hero-muted/60" />
        </div>
      </div>

      {/* metrics */}
      <div className="relative mt-5 grid grid-cols-2 gap-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="min-w-0 rounded-2xl border border-hero-border bg-hero-panel/60 p-3 sm:p-4"
          >
            <p className="truncate text-[11px] uppercase tracking-wide text-hero-muted">
              {m.label}
            </p>
            <div className="mt-1.5 flex min-w-0 items-baseline gap-2">
              <span className="truncate text-xl font-bold text-hero-foreground sm:text-2xl">
                {m.value}
              </span>
              <span className="shrink-0 text-xs font-medium text-cta-green">{m.delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* chart */}
      <div className="relative mt-4 rounded-2xl border border-hero-border bg-hero-panel/60 p-4">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <p className="truncate text-xs font-medium text-hero-muted">
            Динамика запусков
          </p>
          <span className="shrink-0 rounded-full border border-hero-border px-2 py-0.5 text-[11px] text-neon">
            30 дней
          </span>
        </div>
        <div className="mt-4 flex h-24 items-end gap-1.5 sm:h-28">
          {bars.map((h, i) => (
            <div
              key={i}
              className="hero-bar flex-1 rounded-t-sm"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* tasks */}
      <div className="relative mt-4 space-y-2">
        {tasks.map((t) => (
          <div
            key={t.name}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-hero-border bg-hero-panel/40 px-3 py-2.5"
          >
            <p className="truncate text-xs text-hero-foreground sm:text-sm">{t.name}</p>
            <span className="shrink-0 rounded-full bg-neon/10 px-2 py-0.5 text-[11px] text-neon">
              {t.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
