import React from "react";
import PageShell from "../../components/PageShell";

export default function FAQ() {
  const faqs = [
    { q: "Is my data private?", a: "Yes. You control sharing and deletion. Enterprise controls available." },
    { q: "Can I practice with live calls?", a: "Yes. You can record meetings and upload for analysis." },
    { q: "Do you support team admin?", a: "Roles, SSO/SCIM, and org insights are available on enterprise plans." },
  ];
  return (
    <PageShell title="FAQ" subtitle="Answers to common questions.">
      <div className="max-w-3xl space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-2xl border border-gray-200 p-4">
            <summary className="font-semibold cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
    </PageShell>
  );
}


