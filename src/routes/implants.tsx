import { createFileRoute } from "@tanstack/react-router";
import { ImplantsPage } from "@/components/site/ImplantsPage";

export const Route = createFileRoute("/implants")({
  head: () => ({
    meta: [
      { title: "Implants — McKinney Dental & Implant Center" },
      { name: "description", content: "Premium implants in McKinney, TX. Guided 3D placement, Swiss-engineered titanium, and lifetime warranty at McKinney's leading implant center." },
      { property: "og:title", content: "Implants — McKinney Dental" },
      { property: "og:description", content: "Permanent teeth, lifetime confidence. State-of-the-art implant dentistry with 3D digital planning." },
    ],
  }),
  component: ImplantsPage,
});
