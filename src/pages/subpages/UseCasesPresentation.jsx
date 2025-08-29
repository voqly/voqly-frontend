import React from "react";
import PageShell from "../../components/PageShell";

export default function UseCasesPresentation() {
  return (
    <PageShell title="Presentation Practice" subtitle="Run-throughs, slide narration, and storytelling reps.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3 text-gray-700">
          <ul className="list-disc pl-5 space-y-2">
            <li>Upload slides to guide timing</li>
            <li>Energy and pacing insights</li>
            <li>Audience‑style Q&A</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">Slide preview / narration tools</div>
      </div>
    </PageShell>
  );
}


