import { createFileRoute } from "@tanstack/react-router";
import { GeneralDentistryPage } from "@/components/site/GeneralDentistryPage";

export const Route = createFileRoute("/general-dentistry")({
  head: () => ({
    meta: [
      { title: "General Dentistry — McKinney Dental & Implant Center" },
      { name: "description", content: "Premium general & family dentistry in McKinney, TX. Cleanings, exams, fillings, crowns and gentle preventive care for every age." },
      { property: "og:title", content: "General Dentistry — McKinney Dental" },
      { property: "og:description", content: "Gentle care. Healthy smiles. Modern family dentistry in a calm, premium environment." },
    ],
  }),
  component: GeneralDentistryPage,
});
