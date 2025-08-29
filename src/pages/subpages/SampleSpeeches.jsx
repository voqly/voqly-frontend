import React from "react";
import PageShell from "../../components/PageShell";

export default function SampleSpeeches() {
  return (
    <PageShell title="Sample Speeches" subtitle="Great examples to model tone, structure, and delivery.">
      <div className="grid md:grid-cols-2 gap-6">
        {[1,2,3,4].map((i) => (
          <div key={i} className="rounded-2xl border border-gray-200 p-6">
            <h3 className="font-semibold">Speech {i}</h3>
            <p className="text-sm text-gray-600">Theme • duration</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}


