import React from "react";
import PageShell from "../../components/PageShell";

export default function CorporateComms() {
  return (
    <PageShell
      title="Corporate Communications"
      subtitle="Elevate executive presence and sharpen company‑wide comms through deliberate practice."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-gray-700">
          <h2 className="text-xl font-semibold">From all‑hands to media prep</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Message clarity and narrative practice</li>
            <li>Media and crisis communication drills</li>
            <li>Speaker notes and slide walkthroughs</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">Speaker training / press kit area</div>
      </div>
    </PageShell>
  );
}


