import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Services, Digital, Implants, Orthodontics, Cosmetic } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "General Dentistry — McKinney Dental & Implant Center" },
      { name: "description", content: "Comprehensive general and digital dentistry: cleanings, exams, fillings, crowns and advanced 3D imaging." },
      { property: "og:title", content: "General Dentistry — McKinney Dental" },
      { property: "og:description", content: "Modern general dentistry with advanced digital tools." },
    ],
  }),
  component: () => (
    <>
      <PageHeader title="Our Services" subtitle="Preventive, restorative and cosmetic dentistry under one roof." />
      <Services />
    </>
  ),
});
