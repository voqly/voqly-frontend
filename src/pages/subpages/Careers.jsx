import React from "react";
import PageShell from "../../components/PageShell";

export default function Careers() {
  return (
    <PageShell title="Careers" subtitle="Come help millions find their voice.">
      <div className="space-y-6">
        {["Product Engineer", "Designer", "AI Research", "Customer Success"].map((role) => (
          <div key={role} className="rounded-2xl border border-gray-200 p-6 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{role}</h3>
              <p className="text-sm text-gray-600">Remote · Full‑time</p>
            </div>
            <a href="#" className="text-blue-600 hover:text-blue-700">View</a>
          </div>
        ))}
      </div>
    </PageShell>
  );
}


