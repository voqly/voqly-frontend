import React from "react";
import PageShell from "../../components/PageShell";

export default function PartnerEnablement() {
  return (
    <PageShell
      title="Partner Enablement"
      subtitle="Enable partners to message, demo, and handle objections with confidence."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-gray-700">
          <h2 className="text-xl font-semibold">Scale knowledge to the ecosystem</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Partner‑specific scenarios and talk tracks</li>
            <li>Auto‑scored practice with central governance</li>
            <li>Certification paths with shareable badges</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">Certification / portal preview</div>
      </div>
    </PageShell>
  );
}


