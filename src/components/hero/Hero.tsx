import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section className="hero-shell relative min-h-screen w-full overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-orb-a pointer-events-none absolute" />
      <div className="hero-orb-b pointer-events-none absolute" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:py-28">
        <div className="min-w-0 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-hero-border bg-hero-panel/60 px-3 py-1 text-xs text-neon">
            <span className="hero-pulse h-1.5 w-1.5 rounded-full bg-neon" />
            Вайбкодинг · AI-разработка
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-hero-foreground sm:text-5xl lg:text-6xl">
            Развитие бизнеса{" "}
            <span className="hero-gradient-text">с помощью ИИ</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-hero-muted sm:text-lg lg:mx-0">
            Быстро и надежно с помощью ИИ делаем старт и развитие любых идей
            бизнеса
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
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

        <div className="min-w-0">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
