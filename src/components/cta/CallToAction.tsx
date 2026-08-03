import { Mail, Send } from "lucide-react";

export function CallToAction() {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-hero-bg py-16 sm:py-24">
      <div className="cta-grid-bg pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-8">
        <div className="cta-glass flex flex-col items-center rounded-2xl p-8 text-center sm:p-12">
          <div className="cta-glow-ring absolute inset-0 rounded-2xl" />

          <h2 className="relative z-10 text-2xl font-extrabold tracking-tight text-hero-foreground sm:text-4xl">
            Готов оживить идею?
          </h2>
          <p className="relative z-10 mt-3 max-w-md text-sm leading-relaxed text-hero-muted sm:text-base">
            Напиши и мы обсудим задачу
          </p>

          <div className="relative z-10 mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://t.me/keza300"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-telegram inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold sm:text-base"
            >
              <Send className="h-4 w-4" />
              Написать в Telegram
            </a>
            <a
              href="mailto:andrey.eglit1969@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-email inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold sm:text-base"
            >
              <Mail className="h-4 w-4" />
              Написать в Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
