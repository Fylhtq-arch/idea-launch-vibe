import { Rocket, Bot, Sparkles, Plug } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: Rocket,
    title: "MVP за неделю",
    description:
      "Собираю первую версию продукта за 7 дней. Проверяем гипотезу быстро и дёшево, без долгих согласований и переплат.",
    result: "MVP готов к тестам за неделю",
  },
  {
    icon: Bot,
    title: "AI-автоматизация",
    description:
      "Внедряю ИИ в рутинные процессы: от обработки заявок до генерации контента. Экономлю десятки часов в месяц.",
    result: "Экономия до 80% времени на рутине",
  },
  {
    icon: Sparkles,
    title: "UI/UX с вайбкодингом",
    description:
      "Создаю современные интерфейсы с помощью AI-инструментов. Быстрый прототип, чистый код и вау-эффект для пользователя.",
    result: "Интерфейс, который продаёт",
  },
  {
    icon: Plug,
    title: "Интеграции",
    description:
      "Связываю сервисы между собой: CRM, платежи, аналитика, Telegram-боты. Всё работает как единая экосистема.",
    result: "Единый поток данных без ручной работы",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-hero-bg py-16 sm:py-24"
    >
      <div className="services-grid-bg pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <span className="inline-block rounded-full border border-hero-border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-neon">
            Услуги
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-hero-foreground sm:text-4xl">
            Что я делаю
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-hero-muted sm:text-base">
            Четыре направления, в которых помогаю запускать и развивать
            бизнес-идеи с помощью ИИ и вайбкодинга.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
