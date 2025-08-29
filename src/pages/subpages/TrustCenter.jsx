import React from "react";
import PageShell from "../../components/PageShell";

export default function TrustCenter() {
  return (
    <PageShell title="Trust Center" subtitle="Security, compliance, and privacy practices.">
      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-200 p-6">SOC2 Type II (in progress)</div>
        <div className="rounded-2xl border border-gray-200 p-6">Data deletion & retention policies</div>
        <div className="rounded-2xl border border-gray-200 p-6">Sub‑processor list</div>
      </div>
    </PageShell>
  );
}


