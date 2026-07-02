import { createFileRoute } from "@tanstack/react-router";
import { OurFamilyPage } from "@/components/site/OurFamilyPage";

export const Route = createFileRoute("/our-family")({
  head: () => ({
    meta: [
      { title: "Our Family — McKinney Dental & Implant Center" },
      { name: "description", content: "Meet Dr. Daniel Juma, DDS and the McKinney Dental family — compassionate, modern dental care in McKinney, TX." },
      { property: "og:title", content: "Our Family — McKinney Dental" },
      { property: "og:description", content: "A patient-first dental family in McKinney, TX." },
    ],
  }),
  component: OurFamilyPage,
});

