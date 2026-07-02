import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { BeforeAfter } from "@/components/site/BeforeAfter";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — McKinney Dental & Implant Center" },
      { name: "description", content: "Browse our smile transformations — real before & after results from implants, veneers, Invisalign and cosmetic dentistry." },
      { property: "og:title", content: "Smile Gallery — McKinney Dental" },
      { property: "og:description", content: "Real patient before & after transformations from our McKinney, TX practice." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader title="Smile Gallery" subtitle="Real before & after results from our McKinney patients — implants, veneers, Invisalign and cosmetic dentistry." />
      <BeforeAfter />
    </>
  );
}
