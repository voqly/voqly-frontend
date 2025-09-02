import React from "react";
import PageShell from "../components/PageShell";

export default function Privacy() {
  return (
    <PageShell title="Privacy Policy" subtitle="How we collect, use, and protect your data.">
      <div className="prose max-w-none">
        <p className="text-gray-700">We respect your privacy. This page describes our practices for data collection, use, and retention.</p>
        <h3 className="text-lg font-semibold mt-6">Information we collect</h3>
        <p className="text-gray-700">Account details you provide, product telemetry, and content you upload for analysis.</p>
        <h3 className="text-lg font-semibold mt-6">How we use information</h3>
        <p className="text-gray-700">To provide and improve Voqly, support you, and ensure platform security.</p>
        <h3 className="text-lg font-semibold mt-6">Contact</h3>
        <p className="text-gray-700">Questions? Email <a className="text-blue-600 hover:text-blue-700" href="mailto:hello@voqly.com">hello@voqly.com</a>.</p>
      </div>
    </PageShell>
  );
}


