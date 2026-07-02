import { createFileRoute } from "@tanstack/react-router";
import { PatientPortalLogin } from "@/components/site/PatientPortalLogin";

export const Route = createFileRoute("/patient-portal")({
  head: () => ({
    meta: [
      { title: "Patient Portal — McKinney Dental" },
      { name: "description", content: "Securely access your records, statements and appointments." },
    ],
  }),
  component: () => <PatientPortalLogin />,
});
