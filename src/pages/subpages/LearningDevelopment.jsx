import React from "react";
import PageShell from "../../components/PageShell";

export default function LearningDevelopment() {
  return (
    <PageShell
      title="Learning & Development"
      subtitle="Upgrade communication skills across the org with AI practice and measurable outcomes."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-gray-700">
          <h2 className="text-xl font-semibold">Programs that stick</h2>
          <p>Blend async drills with live practice. Track completion and proficiency growth in one dashboard.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Role‑specific learning paths</li>
            <li>Manager/mentor feedback loops</li>
            <li>Badges and streaks to drive adoption</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">Curriculum samples / KPIs area</div>
      </div>
    </PageShell>
  );
}


