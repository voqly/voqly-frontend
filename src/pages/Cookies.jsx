import React from "react";
import PageShell from "../components/PageShell";

export default function Cookies() {
  return (
    <PageShell title="Cookie Preferences" subtitle="Manage how we use cookies and similar technologies.">
      <div className="prose max-w-none">
        <p className="text-gray-700">We use cookies to provide core functionality, analytics, and personalization.</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Essential cookies (required)</li>
          <li>Analytics (optional)</li>
          <li>Personalization (optional)</li>
        </ul>
      </div>
    </PageShell>
  );
}


