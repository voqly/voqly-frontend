import React from "react";
import PageShell from "../../components/PageShell";

export default function Blog() {
  return (
    <PageShell title="Blog" subtitle="Ideas on communication, learning, and AI.">
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <a key={i} href="#" className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition">
            <div className="h-32 bg-gray-100 rounded-xl mb-3" />
            <h3 className="font-semibold">Post title {i}</h3>
            <p className="text-sm text-gray-600">Short excerpt goes here...</p>
          </a>
        ))}
      </div>
    </PageShell>
  );
}


