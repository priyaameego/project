import { createFileRoute } from "@tanstack/react-router";
import { CosmeticPage } from "@/components/site/CosmeticPage";

export const Route = createFileRoute("/cosmetic")({
  head: () => ({
    meta: [
      { title: "Cosmetic Dentistry — McKinney Dental & Implant Center" },
      { name: "description", content: "Premium porcelain veneers, cosmetic crowns, and smile makeovers in McKinney, TX. Hand-crafted artistry from a luxury cosmetic dental studio." },
      { property: "og:title", content: "Cosmetic Dentistry — McKinney Dental" },
      { property: "og:description", content: "Hand-crafted porcelain veneers and smile makeovers designed in-house at McKinney's premier cosmetic dental studio." },
    ],
  }),
  component: CosmeticPage,
});
