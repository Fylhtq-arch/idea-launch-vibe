import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section className="hero-shell relative min-h-screen w-full overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-orb-a pointer-events-none absolute" />
      <div className="hero-orb-b pointer-events-none absolute" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center px-4 py-16 sm:px-8 sm:py-20">
        <HeroDashboard />
      </div>
    </section>
  );
}
