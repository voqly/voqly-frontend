import React from "react";
import PageShell from "../../components/PageShell";

export default function UseCasesConversation() {
  return (
    <PageShell title="Conversation Roleplays" subtitle="Practice everyday conversations: 1:1s, feedback, tough talks, and more.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3 text-gray-700">
          <ul className="list-disc pl-5 space-y-2">
            <li>Constructive feedback and coaching</li>
            <li>Negotiation and stakeholder alignment</li>
            <li>Customer discovery conversations</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">Scenario examples / scripts</div>
      </div>
    </PageShell>
  );
}


