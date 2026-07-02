import { createFileRoute } from "@tanstack/react-router";
import { OrthodonticsPage } from "@/components/site/OrthodonticsPage";

export const Route = createFileRoute("/orthodontics")({
  head: () => ({
    meta: [
      { title: "Invisalign & Orthodontics — McKinney Dental & Implant Center" },
      { name: "description", content: "Premium Invisalign clear aligners and modern orthodontic care in McKinney, TX. 3D smile previews, comfortable treatment, and transparent financing." },
      { property: "og:title", content: "Invisalign & Orthodontics — McKinney Dental" },
      { property: "og:description", content: "Discreet, comfortable clear aligners crafted with precision 3D planning at McKinney Dental & Implant Center." },
    ],
  }),
  component: OrthodonticsPage,
});
