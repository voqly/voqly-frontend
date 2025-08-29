import React from "react";
import PageShell from "../../components/PageShell";

export default function UseCasesInterview() {
  return (
    <PageShell title="Interview Preparation" subtitle="Practice structured answers and handle curveballs with confidence.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">Question bank / STAR templates</div>
        <div className="space-y-3 text-gray-700">
          <ul className="list-disc pl-5 space-y-2">
            <li>Timed practice and follow‑ups</li>
            <li>Voice, filler words, and clarity feedback</li>
            <li>Share runs with mentors for review</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}


