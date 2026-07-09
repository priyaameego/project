import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactInfo, ContactMap, Appointment } from "@/components/site/Sections";

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
      <Appointment className="pt-4 pb-10 lg:pt-8 lg:pb-16" />
      <ContactInfo className="py-10 lg:py-16" />
      <ContactMap className="pt-10 pb-20 lg:pt-16 lg:pb-28" />
    </>
  ),
});
