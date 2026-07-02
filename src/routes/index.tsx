import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Welcome } from "@/components/site/Welcome";
import { ServiceCards } from "@/components/site/ServiceCards";
import { TimeYouNeed } from "@/components/site/TimeYouNeed";
import { TechOfficeCall } from "@/components/site/TechOfficeCall";
import { ScheduleAppointment } from "@/components/site/ScheduleAppointment";
import {
  Trust, About, Services, Implants, Orthodontics, Cosmetic, FAQ,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "McKinney Dental & Implant Center | Premium Family & Implant Dentistry" },
      {
        name: "description",
        content:
          "Advanced implants, Invisalign, cosmetic and family dentistry in McKinney, TX — delivered in a calm, modern, patient-first environment.",
      },
      { property: "og:title", content: "McKinney Dental & Implant Center" },
      {
        property: "og:description",
        content: "Premium dental care: implants, Invisalign, cosmetic and digital dentistry.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
  component: Index,
});

import { Testimonials } from "@/components/site/Testimonials";

function Index() {
  return (
    <>
      <Hero />
      <Welcome />
      <ServiceCards />
      <TimeYouNeed />
      <TechOfficeCall />
      <ScheduleAppointment />
      <Testimonials />
      <FAQ />
    </>
  );
}
