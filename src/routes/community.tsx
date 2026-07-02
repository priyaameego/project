import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";
import { CommunityService } from "@/components/site/CommunityService";
import { CommunityOutreach } from "@/components/site/CommunityOutreach";
import { CommunitySlider } from "@/components/site/CommunitySlider";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — McKinney Dental" },
      { name: "description", content: "We're proud to serve and support the McKinney community. See moments from our practice and our patients." },
      { property: "og:title", content: "Community — McKinney Dental" },
      { property: "og:description", content: "Serving the McKinney community with heart." },
    ],
  }),
  component: () => (
    <>
      <PageHeader title="Community" subtitle="Proud to serve and support the McKinney, TX community." />
      <CommunityService />
      <CommunitySlider />

      {/* Kenya 2019 Video */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(40,91,187,0.04),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2EB6CC]/10 text-[#0F4C81] text-xs font-semibold tracking-[0.18em] uppercase">
              Mission Trip
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-slate-900">
              KENYA <span className="italic text-[#285BBB]">2019</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_-30px_rgba(15,76,129,0.35)]"
          >
            <div className="aspect-video w-full">
              <iframe
                src="https://player.vimeo.com/video/509890241?h=27b2119189&title=0&byline=0&portrait=0"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Kenya Mission Trip 2019"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  ),
});
