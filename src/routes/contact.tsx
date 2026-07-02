import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact, Appointment } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — McKinney Dental & Implant Center" },
      { name: "description", content: "Visit, call or message McKinney Dental & Implant Center. We'd love to meet you." },
      { property: "og:title", content: "Contact — McKinney Dental" },
      { property: "og:description", content: "Get in touch with our McKinney, TX practice." },
    ],
  }),
  component: () => (
    <>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you — book a visit or send a message." />
      <Contact />
      <Appointment />
    </>
  ),
});
