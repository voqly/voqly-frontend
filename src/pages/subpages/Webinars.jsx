import React from "react";
import PageShell from "../../components/PageShell";

export default function Webinars() {
  return (
    <PageShell title="Webinars" subtitle="Live sessions with coaches and guest speakers.">
      <div className="grid md:grid-cols-2 gap-6">
        {[1,2,3,4].map((i) => (
          <div key={i} className="rounded-2xl border border-gray-200 p-6">
            <h3 className="font-semibold">Session {i}</h3>
            <p className="text-sm text-gray-600">Topic • Date</p>
            <a className="text-blue-600 hover:text-blue-700 text-sm" href="#">Register</a>
          </div>
        ))}
      </div>
    </PageShell>
  );
}


