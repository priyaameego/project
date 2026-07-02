import { jsPDF } from "jspdf";

type Field = { label: string; type?: "text" | "long" | "checkbox" | "date" | "signature" };
type Section = { title: string; fields: Field[] };

export type FormSpec = {
  slug: string;
  title: string;
  subtitle?: string;
  sections: Section[];
};

const BRAND = { r: 15, g: 76, b: 129 };
const INK = { r: 30, g: 41, b: 59 };
const MUTED = { r: 100, g: 116, b: 139 };
const LINE = { r: 203, g: 213, b: 225 };

export function generateFormPdf(spec: FormSpec, prefill?: Record<string, string>) {
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 48;
  let y = margin;

  const ensure = (need: number) => {
    if (y + need > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // Header band
  doc.setFillColor(BRAND.r, BRAND.g, BRAND.b);
  doc.rect(0, 0, pageW, 90, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("McKinney Dental & Implant Center", margin, 40);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Premium Dental Care  •  HIPAA-Compliant Documentation", margin, 58);
  doc.setFontSize(9);
  doc.text(
    `Generated: ${new Date().toLocaleDateString()}`,
    pageW - margin,
    40,
    { align: "right" },
  );

  y = 120;
  doc.setTextColor(INK.r, INK.g, INK.b);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(spec.title, margin, y);
  y += 18;
  if (spec.subtitle) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
    const lines = doc.splitTextToSize(spec.subtitle, pageW - margin * 2);
    doc.text(lines, margin, y);
    y += lines.length * 12 + 8;
  }

  spec.sections.forEach((sec) => {
    ensure(60);
    // Section header
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(margin, y, pageW - margin * 2, 24, 4, 4, "F");
    doc.setTextColor(BRAND.r, BRAND.g, BRAND.b);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(sec.title.toUpperCase(), margin + 10, y + 16);
    y += 36;

    sec.fields.forEach((f) => {
      const isLong = f.type === "long";
      const isCheck = f.type === "checkbox";
      const isSig = f.type === "signature";
      const rowH = isLong ? 60 : isSig ? 50 : 32;
      ensure(rowH + 6);

      doc.setTextColor(INK.r, INK.g, INK.b);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text(f.label.toUpperCase(), margin, y);

      if (isCheck) {
        doc.setDrawColor(LINE.r, LINE.g, LINE.b);
        doc.setLineWidth(1);
        doc.rect(margin + 180, y - 9, 12, 12);
      } else {
        const val = prefill?.[f.label] || "";
        doc.setDrawColor(LINE.r, LINE.g, LINE.b);
        doc.setLineWidth(0.7);
        const bx = margin;
        const by = y + 6;
        const bw = pageW - margin * 2;
        const bh = isLong ? 50 : isSig ? 40 : 22;
        doc.roundedRect(bx, by, bw, bh, 3, 3, "S");
        if (val) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(10);
          doc.setTextColor(INK.r, INK.g, INK.b);
          doc.text(val, bx + 8, by + 15);
        }
      }
      y += rowH;
    });
    y += 8;
  });

  // Footer on each page
  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setDrawColor(LINE.r, LINE.g, LINE.b);
    doc.line(margin, pageH - 40, pageW - margin, pageH - 40);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
    doc.text(
      "McKinney Dental & Implant Center  •  (972) 833-6825  •  info@mckinneyddscenter.com",
      margin,
      pageH - 26,
    );
    doc.text(`Page ${i} of ${pages}`, pageW - margin, pageH - 26, { align: "right" });
  }

  doc.save(`${spec.slug}.pdf`);
}

export const FORM_SPECS: Record<string, FormSpec> = {
  "new-patient": {
    slug: "new-patient-registration",
    title: "New Patient Registration",
    subtitle: "Please complete this form prior to your first visit. All information is kept strictly confidential.",
    sections: [
      {
        title: "Personal Information",
        fields: [
          { label: "First Name" }, { label: "Last Name" }, { label: "Date of Birth", type: "date" },
          { label: "Email" }, { label: "Mobile Phone" }, { label: "Home Address" },
          { label: "City, State, ZIP" }, { label: "Preferred Contact Method" },
        ],
      },
      {
        title: "Emergency Contact",
        fields: [{ label: "Name" }, { label: "Relationship" }, { label: "Phone" }],
      },
      { title: "Signature", fields: [{ label: "Patient Signature", type: "signature" }, { label: "Date", type: "date" }] },
    ],
  },
  "medical-history": {
    slug: "medical-history",
    title: "Medical History",
    subtitle: "Help us provide safe care by sharing your complete medical background.",
    sections: [
      { title: "Current Health", fields: [
        { label: "Primary Physician" }, { label: "Last Physical Exam", type: "date" },
        { label: "Known Allergies", type: "long" }, { label: "Current Medications", type: "long" },
      ]},
      { title: "Conditions", fields: [
        { label: "Heart Conditions", type: "checkbox" }, { label: "Diabetes", type: "checkbox" },
        { label: "Pregnancy", type: "checkbox" }, { label: "Other Conditions", type: "long" },
      ]},
      { title: "Signature", fields: [{ label: "Patient Signature", type: "signature" }, { label: "Date", type: "date" }] },
    ],
  },
  "dental-history": {
    slug: "dental-history",
    title: "Dental History",
    subtitle: "Tell us about your previous dental experiences and smile goals.",
    sections: [
      { title: "Previous Care", fields: [
        { label: "Previous Dentist" }, { label: "Last Dental Visit", type: "date" },
        { label: "Reason for Today's Visit", type: "long" },
      ]},
      { title: "Concerns & Goals", fields: [
        { label: "Tooth Sensitivity", type: "checkbox" }, { label: "Gum Bleeding", type: "checkbox" },
        { label: "Jaw Pain / TMJ", type: "checkbox" }, { label: "Smile Goals", type: "long" },
      ]},
      { title: "Signature", fields: [{ label: "Patient Signature", type: "signature" }, { label: "Date", type: "date" }] },
    ],
  },
  insurance: {
    slug: "insurance-information",
    title: "Insurance Information",
    subtitle: "Provide your dental insurance details to streamline claims processing.",
    sections: [
      { title: "Primary Insurance", fields: [
        { label: "Insurance Provider" }, { label: "Policy / Member ID" }, { label: "Group Number" },
        { label: "Subscriber Name" }, { label: "Subscriber DOB", type: "date" },
        { label: "Relationship to Patient" },
      ]},
      { title: "Secondary Insurance (if any)", fields: [
        { label: "Provider" }, { label: "Policy Number" }, { label: "Group Number" },
      ]},
      { title: "Authorization", fields: [
        { label: "I authorize release of dental information for claims", type: "checkbox" },
        { label: "Signature", type: "signature" }, { label: "Date", type: "date" },
      ]},
    ],
  },
  consent: {
    slug: "consent-forms",
    title: "Consent Forms",
    subtitle: "Acknowledgment of treatment, privacy, and communication preferences.",
    sections: [
      { title: "Treatment Consent", fields: [
        { label: "I consent to dental examination and diagnostics", type: "checkbox" },
        { label: "I consent to recommended cleanings and treatment", type: "checkbox" },
      ]},
      { title: "HIPAA Privacy", fields: [
        { label: "I acknowledge the Notice of Privacy Practices", type: "checkbox" },
        { label: "I authorize appointment reminders by SMS/email", type: "checkbox" },
      ]},
      { title: "Signature", fields: [
        { label: "Patient Signature", type: "signature" }, { label: "Date", type: "date" },
      ]},
    ],
  },
  financial: {
    slug: "financial-policy",
    title: "Financial Policy",
    subtitle: "Our payment expectations and your financial responsibilities.",
    sections: [
      { title: "Acknowledgment", fields: [
        { label: "I understand payment is due at time of service", type: "checkbox" },
        { label: "I understand my insurance estimate is not a guarantee", type: "checkbox" },
        { label: "I accept responsibility for balances not covered", type: "checkbox" },
      ]},
      { title: "Payment Method on File", fields: [
        { label: "Cardholder Name" }, { label: "Card Type (Visa/MC/Amex)" },
      ]},
      { title: "Signature", fields: [
        { label: "Patient / Guarantor Signature", type: "signature" }, { label: "Date", type: "date" },
      ]},
    ],
  },
};
