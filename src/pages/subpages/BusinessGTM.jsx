import React from "react";
import PageShell from "../../components/PageShell";

export default function BusinessGTM() {
  return (
    <PageShell
      title="GTM Enablement"
      subtitle="Ramp reps faster with realistic roleplays, shared rubrics, and AI coaching aligned to your ICP."
    >
      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-gray-700">
          <h2 className="text-xl font-semibold">Why it matters</h2>
          <p>High‑fidelity practice turns talk tracks into muscle memory. Give managers superpowers and scale consistent coaching.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Roleplays for discovery, demo, and objection handling</li>
            <li>Shared rubrics and scoring across teams</li>
            <li>Auto‑generated feedback and next best drills</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">Sample content / screenshots area</div>
      </section>
    </PageShell>
  );
}


