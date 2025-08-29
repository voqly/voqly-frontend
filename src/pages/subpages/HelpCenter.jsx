import React from "react";
import PageShell from "../../components/PageShell";

export default function HelpCenter() {
  return (
    <PageShell title="Help Center" subtitle="Guides and troubleshooting.">
      <div className="grid md:grid-cols-2 gap-6">
        {["Getting Started", "Recording issues", "Account & Billing", "Privacy"].map((t) => (
          <a key={t} href="#" className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition">
            <h3 className="font-semibold">{t}</h3>
            <p className="text-sm text-gray-600">Learn more</p>
          </a>
        ))}
      </div>
    </PageShell>
  );
}


