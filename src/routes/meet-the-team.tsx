import { createFileRoute } from "@tanstack/react-router";
import { MeetTheTeamPage } from "@/components/site/MeetTheTeamPage";

export const Route = createFileRoute("/meet-the-team")({
  head: () => ({
    meta: [
      { title: "Meet The Team — McKinney Dental & Implant Center" },
      { name: "description", content: "Meet the dedicated team at McKinney Dental & Implant Center." },
      { property: "og:title", content: "Meet The Team" },
      { property: "og:description", content: "The faces behind your smile." },
    ],
  }),
  component: MeetTheTeamPage,
});
