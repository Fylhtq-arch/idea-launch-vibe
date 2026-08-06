export const projects = [
  {
    title: "StudyFlow",
    description:
      "AI-платформа для персонализированного обучения. Адаптирует материал под темп и уровень каждого студента.",
    tags: ["React", "TypeScript", "OpenAI", "Supabase"],
  },
  {
    title: "НейроАналитик",
    description:
      "AI-сервис для анализа данных. Превращает сырые таблицы в понятные инсайты и прогнозы для бизнеса.",
    tags: ["Python", "FastAPI", "Pandas", "OpenAI"],
  },
  {
    title: "LaunchPro",
    description:
      "Лендинг для продукта. Быстрый запуск посадочной страницы с фокусом на конверсию и визуальный вау-эффект.",
    tags: ["Next.js", "Tailwind", "Figma", "Vercel"],
  },
] as const;

export const services = [
  {
    title: "MVP за неделю",
    description:
      "Сборка первой версии продукта за 7 дней: быстрая и недорогая проверка гипотезы.",
    result: "MVP готов к тестам за неделю",
  },
  {
    title: "AI-автоматизация",
    description:
      "Внедрение ИИ в рутинные процессы: от обработки заявок до генерации контента.",
    result: "Экономия до 80% времени на рутине",
  },
  {
    title: "UI/UX с вайбкодингом",
    description:
      "Современные интерфейсы с помощью AI-инструментов: быстрый прототип и чистый код.",
    result: "Интерфейс, который продаёт",
  },
  {
    title: "Интеграции",
    description:
      "Связка сервисов между собой: CRM, платежи, аналитика, Telegram-боты.",
    result: "Единый поток данных без ручной работы",
  },
] as const;

export const contact = {
  telegram: "https://t.me/keza300",
  email: "andrey.eglit1969@gmail.com",
} as const;
