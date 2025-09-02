import React from "react";
import PageShell from "../components/PageShell";

export default function Terms() {
  return (
    <PageShell title="Terms of Service" subtitle="Your rights and responsibilities when using Voqly.">
      <div className="prose max-w-none">
        <p className="text-gray-700">By using Voqly, you agree to these terms. Please review them carefully.</p>
        <h3 className="text-lg font-semibold mt-6">Acceptable use</h3>
        <p className="text-gray-700">Do not misuse the service or infringe the rights of others.</p>
        <h3 className="text-lg font-semibold mt-6">Subscriptions</h3>
        <p className="text-gray-700">Billing terms apply based on your selected plan and region.</p>
      </div>
    </PageShell>
  );
}


