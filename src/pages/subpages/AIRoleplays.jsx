import React from "react";
import PageShell from "../../components/PageShell";

export default function AIRoleplays() {
  return (
    <PageShell title="AI Roleplays" subtitle="Lifelike practice with AI characters that challenge and coach you.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">Interactive demo area (coming soon)</div>
        <div className="space-y-3 text-gray-700">
          <ul className="list-disc pl-5 space-y-2">
            <li>Configurable scenarios and personas</li>
            <li>Realtime scoring and transcripts</li>
            <li>Replay and share highlights</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}


