import { createFileRoute } from "@tanstack/react-router";
import { CallToAction } from "@/components/cta/CallToAction";
import { Hero } from "@/components/hero/Hero";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { Services } from "@/components/services/Services";

const title = "Вайбкодинг-специалист — развитие бизнеса с помощью ИИ";
const description =
  "Портфолио специалиста по вайбкодингу: быстрый и надёжный запуск и развитие бизнес-идей с помощью искусственного интеллекта.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <CallToAction />
    </>
  );
}
