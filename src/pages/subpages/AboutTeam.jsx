import React from "react";
import PageShell from "../../components/PageShell";

export default function AboutTeam() {
  return (
    <PageShell title="Our team" subtitle="A small team with a big mission: unlock confident speaking for everyone.">
      <div className="grid md:grid-cols-3 gap-6">
          <div  className="rounded-2xl border border-gray-200 p-6 text-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 mx-auto mb-3" />
            <h3 className="font-semibold">Vatika  Bansal</h3>
            <p className="text-sm text-gray-600">CTO</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 text-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 mx-auto mb-3" />
            <h3 className="font-semibold">Shivank Goyal</h3>
            <p className="text-sm text-gray-600">CEO</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 text-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 mx-auto mb-3" />
            <h3 className="font-semibold">Priyanshi Goyal</h3>
            <p className="text-sm text-gray-600">CFO</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 text-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 mx-auto mb-3" />
            <h3 className="font-semibold">Sanket Goyal</h3>
            <p className="text-sm text-gray-600">President</p>
          </div>
      </div>
    </PageShell>
  );
}


