import React from "react";
import PageShell from "../../components/PageShell";

export default function FeatureAnnouncements() {
  return (
    <PageShell title="Feature Announcements" subtitle="What’s new in voqly.">
      <div className="space-y-6">
        {[1,2,3].map((i) => (
          <div key={i} className="rounded-2xl border border-gray-200 p-6">
            <h3 className="font-semibold">Release {i}</h3>
            <p className="text-sm text-gray-600">Short description of notable improvements and fixes.</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}


