import { createFileRoute } from "@tanstack/react-router";
import { PatientCheckin } from "@/components/site/PatientCheckin";

export const Route = createFileRoute("/patient-checkin")({
  head: () => ({
    meta: [
      { title: "Patient Check-In — McKinney Dental" },
      { name: "description", content: "Check in for your appointment quickly and securely." },
    ],
  }),
  component: () => <PatientCheckin />,
});
