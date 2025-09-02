import React from "react";
import PageShell from "../components/PageShell";

export default function Contact() {
  return (
    <PageShell title="Contact Us" subtitle="We'd love to hear from you.">
      <div className="max-w-xl">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <div className="space-y-3 text-gray-800">
            <div>
              <div className="text-sm text-gray-600">Email</div>
              <a href="mailto:hello@voqly.com" className="text-blue-600 hover:text-blue-700">hello@voqly.com</a>
            </div>
            <div>
              <div className="text-sm text-gray-600">Sales</div>
              <a href="tel:9860246306" className="text-blue-600 hover:text-blue-700">+91 98602 46306</a>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}


