import { createFileRoute } from "@tanstack/react-router";
import { MeetTheDentistPage } from "@/components/site/MeetTheDentistPage";

export const Route = createFileRoute("/meet-the-dentist")({
  head: () => ({
    meta: [
      { title: "Meet Dr. Daniel Juma — McKinney Dental & Implant Center" },
      { name: "description", content: "Meet Dr. Daniel Juma, DDS — Founder & Lead Dentist at McKinney Dental & Implant Center." },
      { property: "og:title", content: "Meet Dr. Daniel Juma" },
      { property: "og:description", content: "Founder & Lead Dentist at McKinney Dental & Implant Center." },
    ],
  }),
  component: MeetTheDentistPage,
});
