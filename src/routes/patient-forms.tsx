import { createFileRoute } from "@tanstack/react-router";
import { PatientForms } from "@/components/site/PatientForms";

export const Route = createFileRoute("/patient-forms")({
  head: () => ({
    meta: [
      { title: "Patient Forms — McKinney Dental" },
      { name: "description", content: "Securely complete your new patient forms online — HIPAA-compliant, encrypted, and built for a smooth first visit." },
    ],
  }),
  component: () => <PatientForms />,
});
