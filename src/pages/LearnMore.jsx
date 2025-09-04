import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LearnMore() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />

      <section className="bg-[#0b0f2a] text-white app-theme">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold">How teams accelerate with Voqly</h1>
          <p className="mt-3 text-indigo-200 max-w-2xl">Real outcomes from AI roleplays and targeted coaching — faster onboarding, measurable skill lift, and confident communication.</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 app-theme">
        {[{
          title: "Ramp faster",
          desc: "Cut onboarding time with realistic roleplays and shared rubrics.",
        },{
          title: "Coach at scale",
          desc: "Give every teammate consistent, high‑quality feedback 24/7.",
        },{
          title: "Measure impact",
          desc: "Track skill growth, streaks, and outcomes with clear dashboards.",
        }].map((c,i)=> (
          <div key={i} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <p className="mt-2 text-gray-700">{c.desc}</p>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}


