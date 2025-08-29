import React from "react";
import PageShell from "../../components/PageShell";

export default function UseCasesMeetings() {
  return (
    <PageShell title="Online Meetings" subtitle="Sharpen remote presence: concise updates, clear asks, better facilitation.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">Meeting checklist / variants</div>
        <div className="space-y-3 text-gray-700">
          <ul className="list-disc pl-5 space-y-2">
            <li>Standups, status, and stakeholder reviews</li>
            <li>Interruptions and turn‑taking practice</li>
            <li>Action‑oriented wrap‑ups</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}


